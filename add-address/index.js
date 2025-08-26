if (window.matchMedia("(max-width: 600px)").matches) {
  
  // Местоположение по умолчанию (координаты Ди Рома)
const defaultLocation = {
  lat: 41.722385888711855,
  lng: 44.77608106923325,
  display_name: "Di Roma"
};

let map;
let marker;

// Новая функция интерактивной карты
function loadIframe(lat = defaultLocation.lat, lng = defaultLocation.lng) {
  // Если координаты в строковом формате, преобразуйте их в число.
  if (typeof lat === 'string') lat = parseFloat(lat);
  if (typeof lng === 'string') lng = parseFloat(lng);
  
  // Проверить, существует ли div карты
  const mapDiv = document.getElementById("map2");
  if (!mapDiv) return;

  // Удалить старую карту
  if (map) {
    map.remove();
  }

  // Yangi xarita yaratish
  map = L.map('map2').setView([lat, lng], 15);

  // Добавить плитки OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Добавить маркер
  marker = L.marker([lat, lng]).addTo(map);

  // Перемещайте маркер и получайте адрес при нажатии на карту
  map.on('click', function(e) {
    const clickLat = e.latlng.lat;
    const clickLng = e.latlng.lng;
    
    // Переместите маркер на новое место
    marker.setLatLng([clickLat, clickLng]);
    
    // Получение адреса по координатам (обратное геокодирование)
    reverseGeocode(clickLat, clickLng);
  });
}

// Старая функциональность iframe Google Maps (как резервная)
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

// Получение адреса по координатам
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

        // Введите адрес в поле ввода.
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

// функция updateMapMarker
function updateMapMarker(lat, lon, display_name) {
  loadIframe(lat, lon);
  tempSelectedLocation = {
    lat: lat,
    lon: lon,
    display_name: display_name
  };
}

// Получить элементы DOM
  const addressInput = document.getElementById("addressInputMobile");
  const pacContainer = document.querySelector(".pac-containerMobile");
  const continueBtn = document.querySelector(".btnLocationMobile");

// Глобальная переменная для временного хранения выбранного местоположения
let tempSelectedLocation = null;

// Код, который запускается при загрузке страницы
function initializeMap() {
  // Загрузить выбранное местоположение в sessionStorage (если есть)
  let savedSelectedLocation = sessionStorage.getItem("selectedLocation");
  
  if (savedSelectedLocation) {
    savedSelectedLocation = JSON.parse(savedSelectedLocation);
    if (addressInput) {
      addressInput.value = savedSelectedLocation.display_name;
    }
    loadIframe(savedSelectedLocation.lat, savedSelectedLocation.lon);
    tempSelectedLocation = savedSelectedLocation;
  } else {
    // Показать местоположение по умолчанию (только для карты, tempSelectedLocation остается пустым)
    loadIframe();

    // Получение местоположения пользователя через геолокацию
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          loadIframe(lat, lon);

          // Записываем геолокацию в tempSelectedLocation
          tempSelectedLocation = {
            lat,
            lon,
            display_name: "Current Location"
          };
        },
        err => {
   
        }
      );
    }
    
  }
}

// Поиск переменной тайм-аута
let searchTimeout;

// Событие записи поля ввода
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

             
              const icon = document.createElement("span");
              icon.className = "pac-icon pac-icon-marker";

              
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

                // Обновление карты
                loadIframe(lat, lng);

                // Это местоположение временно сохранено как выбранное местоположение.
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

// Продолжить кнопку hodisasi
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    if (!tempSelectedLocation) {
      // Показать тост-сообщение
      const toastElement = document.querySelector('#Toastify');
      if (toastElement) {
        toastElement.style.setProperty('display', 'flex', 'important');
        setTimeout(() => {
          toastElement.style.setProperty('display', 'none', 'important');
        }, 2000);
      }
      return;
    }

    // 1) Если editAddress существует — обновите его и верните.
    let editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      editAddress = JSON.parse(editAddress);

      // мы обновляем только информацию о местоположении
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

    // 2) Простой статус добавления нового адреса
    sessionStorage.setItem("selectedLocation", JSON.stringify(tempSelectedLocation));
    window.location.href = "../address-details/";
  });
}

// Установка позиции контейнера автозаполнения
if (pacContainer && addressInput && addressInput.parentElement) {
  addressInput.parentElement.appendChild(pacContainer);
  pacContainer.style.position = "absolute";
  pacContainer.style.top = addressInput.offsetHeight + "px";
  pacContainer.style.left = "0";
  pacContainer.style.width = addressInput.offsetWidth + "px";
}

// Событие DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  // Проверьте режим редактирования
  const editAddress = sessionStorage.getItem("editAddress");
  if (editAddress) {
    const parsed = JSON.parse(editAddress);
    
    // Вывод текущего адреса на вход
    if (addressInput) {
      addressInput.value = parsed.display_name || "";
    }

    // Обновите карту, если существуют координаты
    if (parsed.lat && parsed.lon) {
      const lat = parsed.lat;
      const lon = parsed.lon;

      // Обновить карту
      updateMapMarker(lat, lon, parsed.display_name);
    }
  } else {
    // Запустить карту в обычном режиме
    initializeMap();
  }
});

// Sahifa to'liq yuklangandan keyin xaritani ishga tushirish
window.addEventListener("load", () => {
  // Если он не срабатывает при DOMContentLoaded
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

  // Местоположение по умолчанию (координаты Ди Рома)
const defaultLocation = {
  lat: 41.722385888711855,
  lng: 44.77608106923325,
  display_name: "Di Roma"
};

let map;
let marker;

// Новая функция интерактивной карты
function loadIframe(lat = defaultLocation.lat, lng = defaultLocation.lng) {
  // Если координаты в строковом формате, преобразуйте их в число.
  if (typeof lat === 'string') lat = parseFloat(lat);
  if (typeof lng === 'string') lng = parseFloat(lng);
  
  // Проверить, существует ли div карты
  const mapDiv = document.getElementById("map");
  if (!mapDiv) return;

  //Удалить старую карту
  if (map) {
    map.remove();
  }

  // Создать новую карту
  map = L.map('map').setView([lat, lng], 15);

  // Добавить плитки OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Добавить маркер
  marker = L.marker([lat, lng]).addTo(map);

  // Перемещайте маркер и получайте адрес при нажатии на карту
  map.on('click', function(e) {
    const clickLat = e.latlng.lat;
    const clickLng = e.latlng.lng;
    
    // Переместите маркер на новое место
    marker.setLatLng([clickLat, clickLng]);
    
    // Получение адреса по координатам (обратное геокодирование)
    reverseGeocode(clickLat, clickLng);
  });
}

// Старая функциональность iframe Google Maps (как резервная)
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

// Получение адреса по координатам
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

        // Введите адрес в поле ввода.
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

// функция updateMapMarker
function updateMapMarker(lat, lon, display_name) {
  loadIframe(lat, lon);
  tempSelectedLocation = {
    lat: lat,
    lon: lon,
    display_name: display_name
  };
}

// Получить элементы DOM
const addressInput = document.getElementById("addressInput");
const pacContainer = document.querySelector(".pac-container");
const continueBtn = document.querySelector(".btnLocation");

// Глобальная переменная для временного хранения выбранного местоположения
let tempSelectedLocation = null;

// Код, который запускается при загрузке страницы
function initializeMap() {
  // Загрузить выбранное местоположение в sessionStorage (если есть)
  let savedSelectedLocation = sessionStorage.getItem("selectedLocation");
  
  if (savedSelectedLocation) {
    savedSelectedLocation = JSON.parse(savedSelectedLocation);
    if (addressInput) {
      addressInput.value = savedSelectedLocation.display_name;
    }
    loadIframe(savedSelectedLocation.lat, savedSelectedLocation.lon);
    tempSelectedLocation = savedSelectedLocation;
  } else {
    // Показать местоположение по умолчанию (только для карты, tempSelectedLocation остается пустым)
    loadIframe();

    // Получение местоположения пользователя через геолокацию
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          loadIframe(lat, lon);

          // Записываем геолокацию в tempSelectedLocation
          tempSelectedLocation = {
            lat,
            lon,
            display_name: "Current Location"
          };
        },
        err => {
         
        }
      );
    }
    
  }
}

// Поиск переменной тайм-аута
let searchTimeout;

// Событие записи поля ввода
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

            
              const icon = document.createElement("span");
              icon.className = "pac-icon pac-icon-marker";

          
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

                // Обновление карты
                loadIframe(lat, lng);

                // Это местоположение временно сохранено как выбранное местоположение.
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

// Continue кнопка 
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    if (!tempSelectedLocation) {
      // Показать тост-сообщение
      const toastElement = document.querySelector('#Toastify');
      if (toastElement) {
        toastElement.style.setProperty('display', 'flex', 'important');
        setTimeout(() => {
          toastElement.style.setProperty('display', 'none', 'important');
        }, 2000);
      }
      return;
    }

    // 1) Если editAddress существует — обновите его и верните.
    let editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      editAddress = JSON.parse(editAddress);

      // мы обновляем только информацию о местоположении
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

    // 2) Простой статус добавления нового адреса
    sessionStorage.setItem("selectedLocation", JSON.stringify(tempSelectedLocation));
    window.location.href = "../address-details/";
  });
}

// Установка позиции контейнера автозаполнения
if (pacContainer && addressInput && addressInput.parentElement) {
  addressInput.parentElement.appendChild(pacContainer);
  pacContainer.style.position = "absolute";
  pacContainer.style.top = addressInput.offsetHeight + "px";
  pacContainer.style.left = "0";
  pacContainer.style.width = addressInput.offsetWidth + "px";
}

// DOMContentLoaded 
window.addEventListener("DOMContentLoaded", () => {
  // Проверьте режим редактирования
  const editAddress = sessionStorage.getItem("editAddress");
  if (editAddress) {
    const parsed = JSON.parse(editAddress);
    
    // Вывод текущего адреса на вход
    if (addressInput) {
      addressInput.value = parsed.display_name || "";
    }

    // Обновите карту, если существуют координаты
    if (parsed.lat && parsed.lon) {
      const lat = parsed.lat;
      const lon = parsed.lon;

      // Обновить карту
      updateMapMarker(lat, lon, parsed.display_name);
    }
  } else {
    // Запустить карту в обычном режиме
    initializeMap();
  }
});

// Запустите карту после полной загрузки страницы.
window.addEventListener("load", () => {
  // Если он не срабатывает при DOMContentLoaded
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

  // Если массив пуст, мы не перейдем на страницу.
  if (!Array.isArray(addresses) || addresses.length === 0) {
    return;
  }

  // Если все верно, мы перенаправим вас на страницу.
  window.location.href = '../addresses';
}

