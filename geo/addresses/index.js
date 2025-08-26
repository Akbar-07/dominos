if (window.matchMedia("(max-width: 600px)").matches) {
document.addEventListener("DOMContentLoaded", () => {
    const locations = JSON.parse(sessionStorage.getItem("addresses")) || [];
    const container = document.getElementById("address-container-mobile");
    container.innerHTML = "";

    // Agar manzil yo'q bo'lsa, add-address sahifasiga yo'naltiramiz
    if (locations.length === 0) {
        window.location.href = "../add-address/";
        return;
    }

    // Sarlavhani qo'shamiz (original HTML'dagi kabi)
    const titleSpan = document.createElement("span");
    titleSpan.className = "text-black fs-14 Kanit-Light fs-500";

    titleSpan.style.setProperty("padding-left", "43px", "important");
    titleSpan.style.setProperty("padding-bottom", "20px", "important");
    titleSpan.style.setProperty("font-family", "'Kanit', sans-serif", "important");
    titleSpan.style.setProperty("font-weight", "300", "important");

    titleSpan.textContent = "Your Registered Addresses";
    container.appendChild(titleSpan);


    // Har bir manzilni chiqaramiz
    locations.forEach((loc, index) => {
        const outerDiv = document.createElement("div");

        // homeWork p
        const p = document.createElement("p");
        p.style.paddingLeft = "50px";
        p.style.margin = "0px";
        p.style.fontFamily = "'Kanit', sans-serif";
        p.style.fontWeight = "400";
        p.textContent = loc.homeWork || "--";

        // asosiy pill div
        const pill = document.createElement("div");
        pill.className = "jss424";
        pill.style.background = "rgb(255, 255, 255)";
        pill.style.border = "3.5px solid rgb(0, 120, 174)";
        pill.style.width = "90%";
        pill.style.margin = "auto";
        pill.style.borderRadius = "50px";
        pill.style.display = "flex";
        pill.style.justifyContent = "space-between";
        pill.style.alignItems = "center";
        pill.style.padding = "5px";

        // chap qism (manzil)
        const leftDiv = document.createElement("div");
        leftDiv.style.paddingLeft = "15px";

        const addressP = document.createElement("p");
        addressP.className = "text-trauncate-moblie text-blue Kanit-SemiBold fs-20";
        addressP.style.fontWeight = "600";
        addressP.textContent = loc.display_name || "Location not found";

        const citySpan = document.createElement("span");
        citySpan.className = "text-trauncate-moblie text-gray fs-14 Kanit-Light";
        citySpan.style.fontWeight = "300";
        citySpan.style.fontFamily = "'Kanit', sans-serif";
        citySpan.textContent = loc.city || "--";

        leftDiv.appendChild(addressP);
        leftDiv.appendChild(citySpan);

        // o'ng qism (edit va delete icon)
        const rightDiv = document.createElement("div");
        rightDiv.style.display = "flex";
        rightDiv.style.gap = "14px";
        rightDiv.style.paddingRight = "15px";

        rightDiv.innerHTML = `
            <svg class="edit-icon-mobile MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss404 css-vubbuv"
                 focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-index="${index}">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 
                         0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 
                         3.75 3.75z"></path>
            </svg>
            <svg class="delete-icon-mobile MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss405 css-vubbuv"
                 focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-index="${index}">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 
                         1.41-1.41L12 12.59l2.12-2.12 
                         1.41 1.41L13.41 14l2.12 2.12-1.41 
                         1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 
                         14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
        `;

        pill.appendChild(leftDiv);
        pill.appendChild(rightDiv);
        outerDiv.appendChild(p);
        outerDiv.appendChild(pill);
        container.appendChild(outerDiv);
    });

    // EDIT bosilganda
    document.querySelectorAll(".edit-icon-mobile").forEach(icon => {
        icon.addEventListener("click", (e) => {
            const idx = e.currentTarget.getAttribute("data-index");
            const selectedAddress = locations[idx];
            sessionStorage.setItem("editAddress", JSON.stringify(selectedAddress));
            window.location.href = "../address-details/";
        });
    });

    // DELETE bosilganda
    document.querySelectorAll(".delete-icon-mobile").forEach(icon => {
        icon.addEventListener("click", (e) => {
            const idx = e.currentTarget.getAttribute("data-index");
            const updated = locations.filter((_, i) => i != idx);
            sessionStorage.setItem("addresses", JSON.stringify(updated));
            document.querySelector('#Toastify-success5').style.setProperty('display', 'flex', 'important');
            setTimeout(()=>{
             document.querySelector('#Toastify-success5').style.setProperty('display', 'none', 'important');
            window.location.reload();
            },2000)
        });
    });
});


function addNewAddress(){
    window.location.href='../add-address';
}

}else{
document.addEventListener("DOMContentLoaded", () => {
    const locations = JSON.parse(sessionStorage.getItem("addresses")) || [];
    const container = document.getElementById("address-container");
    container.innerHTML = "";

        if (locations.length === 0) {
        window.location.href = "../add-address/";
        return; // keyingi kod ishlamasligi uchun
    }

    locations.forEach((loc, index) => {
        const wrapper = document.createElement("div");

        // homeWork ni chiqarish
        const p = document.createElement("p");
        p.style.paddingLeft = "30px";
        p.style.margin = "0px";
        p.textContent = loc.homeWork || "--";

        // asosiy blok
        const jssDiv = document.createElement("div");
        jssDiv.className = "jss29";
        jssDiv.style.border = "3.5px solid rgb(0, 120, 174)";

        jssDiv.innerHTML = `
            <div>
                <p class="text-trauncate text-blue Kanit-SemiBold fs-20">
                    ${loc.display_name || "Location not found"}
                </p>
                <span class="text-trauncate text-gray fs-14 Kanit-Light">--</span>
            </div>
            <div style="display: flex; gap: 14px;">
                <svg class="edit-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss9 css-vubbuv" 
                     focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-index="${index}">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04
                             c.39-.39.39-1.02 0-1.41l-2.34-2.34
                             a.9959.9959 0 0 0-1.41 0l-1.83 1.83 
                             3.75 3.75z"></path>
                </svg>
                <svg class="delete-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss10 css-vubbuv" 
                     focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-index="${index}">
                    <path d="M6 19c0 1.1.9 2 2 2h8
                             c1.1 0 2-.9 2-2V7H6zm2.46-7.12 
                             1.41-1.41L12 12.59l2.12-2.12 
                             1.41 1.41L13.41 14l2.12 2.12
                             -1.41 1.41L12 15.41l-2.12 2.12
                             -1.41-1.41L10.59 14zM15.5 4l-1-1
                             h-5l-1 1H5v2h14V4z"></path>
                </svg>
            </div>
        `;

        wrapper.appendChild(p);
        wrapper.appendChild(jssDiv);
        container.appendChild(wrapper);
    });

    // EDIT bosilganda
    document.querySelectorAll(".edit-icon").forEach(icon => {
        icon.addEventListener("click", (e) => {
            const idx = e.currentTarget.getAttribute("data-index");
            const selectedAddress = locations[idx];
            // tanlangan manzilni vaqtinchalik sessionga yozamiz
            sessionStorage.setItem("editAddress", JSON.stringify(selectedAddress));
            window.location.href = "../address-details/";
        });
    });

    // DELETE bosilganda
    document.querySelectorAll(".delete-icon").forEach(icon => {
        icon.addEventListener("click", (e) => {
            const idx = e.currentTarget.getAttribute("data-index");
            const updated = locations.filter((_, i) => i != idx);
            sessionStorage.setItem("addresses", JSON.stringify(updated));
            document.querySelector('#Toastify-success').style.setProperty('display', 'flex', 'important');
            setTimeout(()=>{
             document.querySelector('#Toastify-success').style.setProperty('display', 'none', 'important');
            window.location.reload();
            },2000)
            
        });
    });
});

function addNewAddress(){
    window.location.href='../add-address';
}

}

// Do'konlar
const locations = [
  { name: "34 Vazha Pshavela Ave", displayName: "Delisi", lat: 41.72561097144419, lng: 44.749278935297475 },
  { name: "72 Viktor Kupradze St", displayName: "Varketili", lat: 41.7121407, lng: 44.8778605 },
  { name: "3 Navtlughi St (Isani Mall)", displayName: "Isani", lat: 41.68396467733614, lng: 44.84046947709175 },
  { name: "10 Ilia Vekua St", displayName: "Gldani", lat: 41.79295152621502, lng: 44.81723196196301 },
  { name: "78a Vazha Pshavela Ave", displayName: "Vazha", lat: 41.72390007301149, lng: 44.73179612516593 },
  { name: "9a Ilia Chavchavadze Ave", displayName: "Vake", lat: 41.709304, lng: 44.774133 },
  { name: "74 Merab Kostava St", displayName: "Kostava", lat: 41.722178960393414, lng: 44.77663803805155 }
];

// Haversine formulasi (km)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}


document.querySelector('#searchLocation').addEventListener('click', () => {
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

  if (!Array.isArray(addresses) || addresses.length === 0) {
    return;
  }

  const maxDistance = 999999; // km
  let farStores = [];

  locations.forEach(store => {
    let minDistance = Infinity;
    addresses.forEach(userLocation => {
      if (userLocation.lat == null || userLocation.lon == null) return;
      const distance = getDistance(userLocation.lat, userLocation.lon, store.lat, store.lng);
      if (distance < minDistance) minDistance = distance;
    });

    if (minDistance > maxDistance) {
      farStores.push(`${store.displayName} (${minDistance.toFixed(2)} km)`);
    }
  });

  // Toastify elementini olish
  const toast = document.querySelector('#Toastify');
  const login_banner = document.querySelector('#login_banner_11');


  if (farStores.length > 0) {
    toast.style.setProperty('display', 'flex', 'important');
    setTimeout(() => {
      toast.style.setProperty('display', 'none', 'important'); 
    }, 2000);
  } else {
    login_banner.style.setProperty('display', 'block', 'important');
    document.querySelector('#login_banner_3').style='display:none'
    sessionStorage.setItem('selected_adres',true)
  }
});

document.querySelector('.btnasdd').addEventListener('click', () => {
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

  if (!Array.isArray(addresses) || addresses.length === 0) {
    return;
  }

  const maxDistance = 999999; // km
  let farStores = [];

  locations.forEach(store => {
    let minDistance = Infinity;
    addresses.forEach(userLocation => {
      if (userLocation.lat == null || userLocation.lon == null) return;
      const distance = getDistance(userLocation.lat, userLocation.lon, store.lat, store.lng);
      if (distance < minDistance) minDistance = distance;
    });

    if (minDistance > maxDistance) {
      farStores.push(`${store.displayName} (${minDistance.toFixed(2)} km)`);
    }
  });

  // Toastify elementini olish
  const toast = document.querySelector('#Toastify-nostore');
  const login_banner = document.querySelector('#login_banner_11');


  if (farStores.length > 0) {
    toast.style.setProperty('display', 'flex', 'important');
    setTimeout(() => {
      toast.style.setProperty('display', 'none', 'important'); 
    }, 2000);
  } else {
    login_banner.style.setProperty('display', 'block', 'important');
    document.querySelector('#login_banner_3').style='display:none'
    sessionStorage.setItem('selected_adres',true)
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const toast = document.querySelector('#Toastify-success2');

  // SessionStorage'dan success ni o'qish
  const success = sessionStorage.getItem('success');

  if (success === 'true') {
    // Toastni ko'rsatish
    toast.style.setProperty('display', 'flex', 'important');

    // 2 sekunddan keyin toastni yashirish va success ni o'chirish
    setTimeout(() => {
      toast.style.setProperty('display', 'none', 'important');
      sessionStorage.removeItem('success');
    }, 2200);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.querySelector('#Toastify-success3');

  // SessionStorage'dan success ni o'qish
  const success = sessionStorage.getItem('success');

  if (success === 'true') {
    // Toastni ko'rsatish
    toast.style.setProperty('display', 'flex', 'important');

    // 2 sekunddan keyin toastni yashirish va success ni o'chirish
    setTimeout(() => {
      toast.style.setProperty('display', 'none', 'important');
      sessionStorage.removeItem('success');
    }, 2200);
  }
});


