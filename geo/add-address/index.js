if (window.matchMedia("(max-width: 600px)").matches) {
  
  // Default location (Di Roma coordinates)
const defaultLocation = {
  lat: 41.722385888711855,
  lng: 44.77608106923325,
  display_name: "Di Roma"
};

let map;
let marker;

// Yangi interactive map funksiyasi
function loadIframe(lat = defaultLocation.lat, lng = defaultLocation.lng) {
  // Agar koordinatalar string formatida bo'lsa, uni raqamga aylantirish
  if (typeof lat === 'string') lat = parseFloat(lat);
  if (typeof lng === 'string') lng = parseFloat(lng);
  
  // Map div mavjudligini tekshirish
  const mapDiv = document.getElementById("map2");
  if (!mapDiv) return;

  // Eski xaritani o'chirish
  if (map) {
    map.remove();
  }

  // Yangi xarita yaratish
  map = L.map('map2').setView([lat, lng], 15);

  // OpenStreetMap tiles qo'shish
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Marker qo'shish
  marker = L.marker([lat, lng]).addTo(map);

  // Xaritani bosganda marker ko'chirish va manzil olish
  map.on('click', function(e) {
    const clickLat = e.latlng.lat;
    const clickLng = e.latlng.lng;
    
    // Markerni yangi joyga ko'chirish
    marker.setLatLng([clickLat, clickLng]);
    
    // Koordinatalardan manzil olish (reverse geocoding)
    reverseGeocode(clickLat, clickLng);
  });
}

// Eski Google Maps iframe funksiyasi (fallback sifatida)
function loadGoogleIframe(src) {
  document.querySelector("#map-iframe").innerHTML = `
    <iframe 
      src="${src}" 
      width="600" 
      height="450" 
      style="border:0;" 
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
}

// Koordinatalardan manzil olish
function reverseGeocode(lat, lng) {
  fetch(`https://photon.komoot.io/reverse?lat=${lat}&lon=${lng}`)
    .then(res => res.json())
    .then(data => {
      if (data.features && data.features.length > 0) {
        const feature = data.features[0];
        const displayName = [
          feature.properties.name || "",
          feature.properties.city || "",
          feature.properties.country || ""
        ].filter(Boolean).join(", ");

        tempSelectedLocation = {
          lat: lat,
          lon: lng,
          display_name: displayName || `${lat.toFixed(6)}, ${lng.toFixed(6)}`
        };

        // Input maydoniga manzilni yozish
        if (addressInput) {
          addressInput.value = tempSelectedLocation.display_name;
        }
      } else {
        tempSelectedLocation = {
          lat: lat,
          lon: lng,
          display_name: `${lat.toFixed(6)}, ${lng.toFixed(6)}`
        };
        if (addressInput) {
          addressInput.value = tempSelectedLocation.display_name;
        }
      }
    })
    .catch(() => {
      tempSelectedLocation = {
        lat: lat,
        lon: lng,
        display_name: `${lat.toFixed(6)}, ${lng.toFixed(6)}`
      };
      if (addressInput) {
        addressInput.value = tempSelectedLocation.display_name;
      }
    });
}

// updateMapMarker funksiyasi
function updateMapMarker(lat, lon, display_name) {
  loadIframe(lat, lon);
  tempSelectedLocation = {
    lat: lat,
    lon: lon,
    display_name: display_name
  };
}

// DOM elementlarni olish
  const addressInput = document.getElementById("addressInputMobile");
  const pacContainer = document.querySelector(".pac-containerMobile");
  const continueBtn = document.querySelector(".btnLocationMobile");

// Tanlangan joyni vaqtinchalik saqlash uchun global o'zgaruvchi
let tempSelectedLocation = null;

// Sahifa yuklanganda ishlaydigan kod
function initializeMap() {
  // sessionStorage'dagi tanlangan joyni yuklash (agar bo'lsa)
  let savedSelectedLocation = sessionStorage.getItem("selectedLocation");
  
  if (savedSelectedLocation) {
    savedSelectedLocation = JSON.parse(savedSelectedLocation);
    if (addressInput) {
      addressInput.value = savedSelectedLocation.display_name;
    }
    loadIframe(savedSelectedLocation.lat, savedSelectedLocation.lon);
    tempSelectedLocation = savedSelectedLocation;
  } else {
    // Default joylashuvni ko'rsatish (faqat xarita uchun, tempSelectedLocation null qoladi)
    loadIframe();

    // Geolocation orqali foydalanuvchi joylashuvini olish
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          loadIframe(lat, lon);

          // Geolokatsiyani tempSelectedLocation ga yozamiz
          tempSelectedLocation = {
            lat,
            lon,
            display_name: "Current Location"
          };
        },
        err => {
          // Geolocation xatoligi bo'lsa, tempSelectedLocation null qoladi
          // Faqat xaritada default joy ko'rsatiladi
        }
      );
    }
    // Geolocation yo'q bo'lsa ham tempSelectedLocation null qoladi
  }
}

// Search timeout o'zgaruvchisi
let searchTimeout;

// Input maydonida yozish hodisasi
if (addressInput) {
  addressInput.addEventListener("input", function () {
    const query = this.value.trim();
    clearTimeout(searchTimeout);

    if (!query) {
      if (pacContainer) {
        pacContainer.style.display = "none";
      }
      return;
    }

    searchTimeout = setTimeout(() => {
      fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=6`)
        .then(res => res.json())
        .then(data => {
          if (pacContainer) {
            pacContainer.innerHTML = "";

            if (!data.features || data.features.length === 0) {
              pacContainer.style.display = "none";
              return;
            }

            data.features.forEach(loc => {
              const item = document.createElement("div");
              item.className = "pac-item";
              item.style.cursor = "pointer";

              // Icon span
              const icon = document.createElement("span");
              icon.className = "pac-icon pac-icon-marker";

              // Matn qismlari
              const displayName = [
                loc.properties.name || "",
                loc.properties.city || "",
                loc.properties.country || ""
              ].filter(Boolean);

              const firstPart = displayName[0] || "";
              const restParts = displayName.slice(1).join(", ");

              const querySpan = document.createElement("span");
              querySpan.className = "pac-item-query";
              const matchedText = firstPart.slice(0, query.length);
              const restText = firstPart.slice(query.length);
              querySpan.innerHTML = `<span class="pac-matched">${matchedText}</span>${restText}`;

              const restSpan = document.createElement("span");
              restSpan.textContent = restParts;

              item.appendChild(icon);
              item.appendChild(querySpan);
              item.appendChild(restSpan);

              item.addEventListener("click", () => {
                const fullDisplayName = displayName.join(", ");
                addressInput.value = fullDisplayName;
                pacContainer.style.display = "none";

                const lat = loc.geometry.coordinates[1];
                const lng = loc.geometry.coordinates[0];

                // Xarita yangilash
                loadIframe(lat, lng);

                // Bu joy vaqtinchalik tanlangan location sifatida saqlanadi
                tempSelectedLocation = {
                  lat: lat,
                  lon: lng,
                  display_name: fullDisplayName
                };
              });

              pacContainer.appendChild(item);
            });

            pacContainer.style.display = "block";
          }
        })
        .catch(() => {
          if (pacContainer) {
            pacContainer.style.display = "none";
          }
        });
    }, 100);
  });
}

// Continue button hodisasi
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    if (!tempSelectedLocation) {
      // Toast xabarni ko'rsatish
      const toastElement = document.querySelector('#Toastify');
      if (toastElement) {
        toastElement.style.setProperty('display', 'flex', 'important');
        setTimeout(() => {
          toastElement.style.setProperty('display', 'none', 'important');
        }, 2000);
      }
      return;
    }

    // 1) Agar editAddress mavjud bo'lsa — uni yangilab qaytarish
    let editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      editAddress = JSON.parse(editAddress);

      // faqat location ma'lumotlarini yangilaymiz
      const updatedEdit = {
        ...editAddress,
        lat: tempSelectedLocation.lat,
        lon: tempSelectedLocation.lon,
        display_name: tempSelectedLocation.display_name
      };

      sessionStorage.setItem("editAddress", JSON.stringify(updatedEdit));
      window.location.href = "../address-details/";
      return;
    }

    // 2) Oddiy yangi manzil qo'shish holati
    sessionStorage.setItem("selectedLocation", JSON.stringify(tempSelectedLocation));
    window.location.href = "../address-details/";
  });
}

// Autocomplete container pozitsiyasini sozlash
if (pacContainer && addressInput && addressInput.parentElement) {
  addressInput.parentElement.appendChild(pacContainer);
  pacContainer.style.position = "absolute";
  pacContainer.style.top = addressInput.offsetHeight + "px";
  pacContainer.style.left = "0";
  pacContainer.style.width = addressInput.offsetWidth + "px";
}

// DOMContentLoaded hodisasi
window.addEventListener("DOMContentLoaded", () => {
  // Edit rejimini tekshirish
  const editAddress = sessionStorage.getItem("editAddress");
  if (editAddress) {
    const parsed = JSON.parse(editAddress);
    
    // Inputga mavjud manzilni chiqarish
    if (addressInput) {
      addressInput.value = parsed.display_name || "";
    }

    // Agar koordinatalar bo'lsa, xaritani yangilash
    if (parsed.lat && parsed.lon) {
      const lat = parsed.lat;
      const lon = parsed.lon;

      // Xaritani yangilash
      updateMapMarker(lat, lon, parsed.display_name);
    }
  } else {
    // Oddiy rejimda xaritani ishga tushirish
    initializeMap();
  }
});

// Sahifa to'liq yuklangandan keyin xaritani ishga tushirish
window.addEventListener("load", () => {
  // Agar DOMContentLoaded da ishga tushmagan bo'lsa
  if (!map) {
    setTimeout(() => {
      const editAddress = sessionStorage.getItem("editAddress");
      if (!editAddress) {
        initializeMap();
      }
    }, 100);
  }
});



}else {

  // Default location (Di Roma coordinates)
const defaultLocation = {
  lat: 41.722385888711855,
  lng: 44.77608106923325,
  display_name: "Di Roma"
};

let map;
let marker;

// Yangi interactive map funksiyasi
function loadIframe(lat = defaultLocation.lat, lng = defaultLocation.lng) {
  // Agar koordinatalar string formatida bo'lsa, uni raqamga aylantirish
  if (typeof lat === 'string') lat = parseFloat(lat);
  if (typeof lng === 'string') lng = parseFloat(lng);
  
  // Map div mavjudligini tekshirish
  const mapDiv = document.getElementById("map");
  if (!mapDiv) return;

  // Eski xaritani o'chirish
  if (map) {
    map.remove();
  }

  // Yangi xarita yaratish
  map = L.map('map').setView([lat, lng], 15);

  // OpenStreetMap tiles qo'shish
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Marker qo'shish
  marker = L.marker([lat, lng]).addTo(map);

  // Xaritani bosganda marker ko'chirish va manzil olish
  map.on('click', function(e) {
    const clickLat = e.latlng.lat;
    const clickLng = e.latlng.lng;
    
    // Markerni yangi joyga ko'chirish
    marker.setLatLng([clickLat, clickLng]);
    
    // Koordinatalardan manzil olish (reverse geocoding)
    reverseGeocode(clickLat, clickLng);
  });
}

// Eski Google Maps iframe funksiyasi (fallback sifatida)
function loadGoogleIframe(src) {
  document.getElementById("map").innerHTML = `
    <iframe 
      src="${src}" 
      width="600" 
      height="450" 
      style="border:0;" 
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
}

// Koordinatalardan manzil olish
function reverseGeocode(lat, lng) {
  fetch(`https://photon.komoot.io/reverse?lat=${lat}&lon=${lng}`)
    .then(res => res.json())
    .then(data => {
      if (data.features && data.features.length > 0) {
        const feature = data.features[0];
        const displayName = [
          feature.properties.name || "",
          feature.properties.city || "",
          feature.properties.country || ""
        ].filter(Boolean).join(", ");

        tempSelectedLocation = {
          lat: lat,
          lon: lng,
          display_name: displayName || `${lat.toFixed(6)}, ${lng.toFixed(6)}`
        };

        // Input maydoniga manzilni yozish
        if (addressInput) {
          addressInput.value = tempSelectedLocation.display_name;
        }
      } else {
        tempSelectedLocation = {
          lat: lat,
          lon: lng,
          display_name: `${lat.toFixed(6)}, ${lng.toFixed(6)}`
        };
        if (addressInput) {
          addressInput.value = tempSelectedLocation.display_name;
        }
      }
    })
    .catch(() => {
      tempSelectedLocation = {
        lat: lat,
        lon: lng,
        display_name: `${lat.toFixed(6)}, ${lng.toFixed(6)}`
      };
      if (addressInput) {
        addressInput.value = tempSelectedLocation.display_name;
      }
    });
}

// updateMapMarker funksiyasi
function updateMapMarker(lat, lon, display_name) {
  loadIframe(lat, lon);
  tempSelectedLocation = {
    lat: lat,
    lon: lon,
    display_name: display_name
  };
}

// DOM elementlarni olish
const addressInput = document.getElementById("addressInput");
const pacContainer = document.querySelector(".pac-container");
const continueBtn = document.querySelector(".btnLocation");

// Tanlangan joyni vaqtinchalik saqlash uchun global o'zgaruvchi
let tempSelectedLocation = null;

// Sahifa yuklanganda ishlaydigan kod
function initializeMap() {
  // sessionStorage'dagi tanlangan joyni yuklash (agar bo'lsa)
  let savedSelectedLocation = sessionStorage.getItem("selectedLocation");
  
  if (savedSelectedLocation) {
    savedSelectedLocation = JSON.parse(savedSelectedLocation);
    if (addressInput) {
      addressInput.value = savedSelectedLocation.display_name;
    }
    loadIframe(savedSelectedLocation.lat, savedSelectedLocation.lon);
    tempSelectedLocation = savedSelectedLocation;
  } else {
    // Default joylashuvni ko'rsatish (faqat xarita uchun, tempSelectedLocation null qoladi)
    loadIframe();

    // Geolocation orqali foydalanuvchi joylashuvini olish
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          loadIframe(lat, lon);

          // Geolokatsiyani tempSelectedLocation ga yozamiz
          tempSelectedLocation = {
            lat,
            lon,
            display_name: "Current Location"
          };
        },
        err => {
          // Geolocation xatoligi bo'lsa, tempSelectedLocation null qoladi
          // Faqat xaritada default joy ko'rsatiladi
        }
      );
    }
    // Geolocation yo'q bo'lsa ham tempSelectedLocation null qoladi
  }
}

// Search timeout o'zgaruvchisi
let searchTimeout;

// Input maydonida yozish hodisasi
if (addressInput) {
  addressInput.addEventListener("input", function () {
    const query = this.value.trim();
    clearTimeout(searchTimeout);

    if (!query) {
      if (pacContainer) {
        pacContainer.style.display = "none";
      }
      return;
    }

    searchTimeout = setTimeout(() => {
      fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=6`)
        .then(res => res.json())
        .then(data => {
          if (pacContainer) {
            pacContainer.innerHTML = "";

            if (!data.features || data.features.length === 0) {
              pacContainer.style.display = "none";
              return;
            }

            data.features.forEach(loc => {
              const item = document.createElement("div");
              item.className = "pac-item";
              item.style.cursor = "pointer";

              // Icon span
              const icon = document.createElement("span");
              icon.className = "pac-icon pac-icon-marker";

              // Matn qismlari
              const displayName = [
                loc.properties.name || "",
                loc.properties.city || "",
                loc.properties.country || ""
              ].filter(Boolean);

              const firstPart = displayName[0] || "";
              const restParts = displayName.slice(1).join(", ");

              const querySpan = document.createElement("span");
              querySpan.className = "pac-item-query";
              const matchedText = firstPart.slice(0, query.length);
              const restText = firstPart.slice(query.length);
              querySpan.innerHTML = `<span class="pac-matched">${matchedText}</span>${restText}`;

              const restSpan = document.createElement("span");
              restSpan.textContent = restParts;

              item.appendChild(icon);
              item.appendChild(querySpan);
              item.appendChild(restSpan);

              item.addEventListener("click", () => {
                const fullDisplayName = displayName.join(", ");
                addressInput.value = fullDisplayName;
                pacContainer.style.display = "none";

                const lat = loc.geometry.coordinates[1];
                const lng = loc.geometry.coordinates[0];

                // Xarita yangilash
                loadIframe(lat, lng);

                // Bu joy vaqtinchalik tanlangan location sifatida saqlanadi
                tempSelectedLocation = {
                  lat: lat,
                  lon: lng,
                  display_name: fullDisplayName
                };
              });

              pacContainer.appendChild(item);
            });

            pacContainer.style.display = "block";
          }
        })
        .catch(() => {
          if (pacContainer) {
            pacContainer.style.display = "none";
          }
        });
    }, 100);
  });
}

// Continue button hodisasi
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    if (!tempSelectedLocation) {
      // Toast xabarni ko'rsatish
      const toastElement = document.querySelector('#Toastify');
      if (toastElement) {
        toastElement.style.setProperty('display', 'flex', 'important');
        setTimeout(() => {
          toastElement.style.setProperty('display', 'none', 'important');
        }, 2000);
      }
      return;
    }

    // 1) Agar editAddress mavjud bo'lsa — uni yangilab qaytarish
    let editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      editAddress = JSON.parse(editAddress);

      // faqat location ma'lumotlarini yangilaymiz
      const updatedEdit = {
        ...editAddress,
        lat: tempSelectedLocation.lat,
        lon: tempSelectedLocation.lon,
        display_name: tempSelectedLocation.display_name
      };

      sessionStorage.setItem("editAddress", JSON.stringify(updatedEdit));
      window.location.href = "../address-details/";
      return;
    }

    // 2) Oddiy yangi manzil qo'shish holati
    sessionStorage.setItem("selectedLocation", JSON.stringify(tempSelectedLocation));
    window.location.href = "../address-details/";
  });
}

// Autocomplete container pozitsiyasini sozlash
if (pacContainer && addressInput && addressInput.parentElement) {
  addressInput.parentElement.appendChild(pacContainer);
  pacContainer.style.position = "absolute";
  pacContainer.style.top = addressInput.offsetHeight + "px";
  pacContainer.style.left = "0";
  pacContainer.style.width = addressInput.offsetWidth + "px";
}

// DOMContentLoaded hodisasi
window.addEventListener("DOMContentLoaded", () => {
  // Edit rejimini tekshirish
  const editAddress = sessionStorage.getItem("editAddress");
  if (editAddress) {
    const parsed = JSON.parse(editAddress);
    
    // Inputga mavjud manzilni chiqarish
    if (addressInput) {
      addressInput.value = parsed.display_name || "";
    }

    // Agar koordinatalar bo'lsa, xaritani yangilash
    if (parsed.lat && parsed.lon) {
      const lat = parsed.lat;
      const lon = parsed.lon;

      // Xaritani yangilash
      updateMapMarker(lat, lon, parsed.display_name);
    }
  } else {
    // Oddiy rejimda xaritani ishga tushirish
    initializeMap();
  }
});

// Sahifa to'liq yuklangandan keyin xaritani ishga tushirish
window.addEventListener("load", () => {
  // Agar DOMContentLoaded da ishga tushmagan bo'lsa
  if (!map) {
    setTimeout(() => {
      const editAddress = sessionStorage.getItem("editAddress");
      if (!editAddress) {
        initializeMap();
      }
    }, 100);
  }
});

}

function myAddressInfo() {
  const addressStr = sessionStorage.getItem('addresses');

  if (!addressStr) {
    return;
  }

  let addresses;
  try {
    addresses = JSON.parse(addressStr);
  } catch (e) {
    return;
  }

  // Agar array bo‘sh bo‘lsa, sahifaga o‘tkazmaymiz
  if (!Array.isArray(addresses) || addresses.length === 0) {
    return;
  }

  // Hammasi to‘g‘ri bo‘lsa, sahifaga yo‘naltiramiz
  window.location.href = '../addresses';
}

