if (window.matchMedia("(max-width: 600px)").matches) {
const customIcon = L.icon({
  iconUrl: "https://dominospizza.ge/static/media/shop-blue.6c03fcec101d19ac945e53c16ec7bd05.svg",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38]
});

const locations = [
  { name: "ვაჟა-ფშაველას გამზ. 34", displayName: "დელისი", lat: 41.72561097144419, lng: 44.749278935297475, img: "https://dominosge.s3.eu-central-1.amazonaws.com/delisi.jpg" },
  { name: "ვიქტორ კუპრაძის ქ. 72",displayName: "ვარკეთილი", lat: 41.7121407, lng: 44.8778605, img: "https://dominosge.s3.eu-central-1.amazonaws.com/20250430131736952_DefaultStore.d520bc6434b9ff8cec2d.png" },
  { name: "ნავთლუღის ქ. 3 (ისანი მოლი)",displayName: "ისანი", lat: 41.68396467733614, lng: 44.84046947709175, img: "https://dominosge.s3.eu-central-1.amazonaws.com/isani.jpg" },
  { name: "ილია ვეკუას ქ. 10",displayName: "გლდანი", lat: 41.79295152621502, lng: 44.81723196196301, img: null},
  { name: "ვაჟა-ფშაველას გამზ. 78ა",displayName: "ვაჟა", lat: 41.72390007301149, lng: 44.73179612516593, img: "https://dominosge.s3.eu-central-1.amazonaws.com/vazha.jpg" },
  { name: "ილია ჭავჭავაძის გამზ. 9ა",displayName: "ვაკე", lat: 41.709304, lng: 44.774133, img: "https://dominosge.s3.eu-central-1.amazonaws.com/vake.jpg" },
  { name: "მერაბ კოსტავას ქ. 74",displayName: "კოსტავას", lat: 41.722178960393414, lng: 44.77663803805155, img: "https://dominosge.s3.eu-central-1.amazonaws.com/kostava.jpg" },
];

const map = L.map('mapMobile');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const bounds = L.latLngBounds();
locations.forEach((loc, i) => {
  L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map)
    .bindPopup(`
      <strong>${i+1}. ${loc.name}</strong><br>
      ${loc.img ? `<img src="${loc.img}" class="popup-img" style="width:100px;height:auto;"><br>` : ""}
      <span class="fs-14 Kanit-SemiBold text-blue" data-storeMobile="${i}">—</span>
    `);
  bounds.extend([loc.lat, loc.lng]);
});
map.fitBounds(bounds.pad(0.1));

// Haversine formulasi
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// TUZATILGAN: Manual va Geolokatsiya variantlari
document.getElementById("geo-btnMobile").addEventListener("click", function() {
  if (!navigator.geolocation) {
    alert("გთხოვთ, ჩართოთ მდებარეობაზე წვდომა თქვენი ბრაუზერის პარამეტრებში.");
    useManualCoordinates();
    return;
  }



  navigator.geolocation.getCurrentPosition(function(pos) {
    const userLat = pos.coords.latitude;
    const userLng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

  

    // Foydalanuvchi real koordinatasi bilan hisoblash
    calculateDistances(userLat, userLng, ``);

  }, function(err) {
    
    alert("გეოლოკაცია არ მუშაობდა.");
    // useManualCoordinates();
  }, {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 10000
  });
});




// MASOFALARNI HISOBLASH FUNKSIYASI
function calculateDistances(userLat, userLng, locationName) {
  

  // Foydalanuvchi markeri
  const userMarker = L.marker([userLat, userLng]).addTo(map)
    .bindPopup(`<b>${locationName}</b>`)
    .openPopup();
  map.setView([userLat, userLng], 12);

  // Har bir do'kon uchun masofa hisoblash
  locations.forEach((loc, i) => {
    
    
    try {
      // Haversine formula bilan hisoblash
      const distanceKm = haversineKm(userLat, userLng, loc.lat, loc.lng);
      
   
      
      // HTML da ko'rsatish
      const span = document.querySelector(`[data-storeMobile="${i}"]`);
      if (span) {
        span.textContent = distanceKm.toFixed(0) + " KM";
       
      } else {
        
      }
      
    } catch (error) {
     
    }
  });
  
 
}



const input = document.getElementById('searchInputStoreMobile');
const container = document.querySelector('.store-mapMobile');

const items = Array.from(container.querySelectorAll(':scope > div'))
  .filter(el => el.querySelector('h3'));

function runFilter() {
  const q = input.value.trim().toLowerCase();

  // Filterlash
  let visibleItems = [];
  items.forEach(el => {
    const name = el.querySelector('h3').textContent.trim().toLowerCase();
    if (name.includes(q)) {
      el.style.display = '';
      visibleItems.push(el);
    } else {
      el.style.display = 'none';
    }
  });

  // Agar faqat 1 ta do‘kon qolsa — ichidagi hr’ni yashiramiz
  items.forEach(el => {
    const hr = el.querySelector('hr');
    if (hr) hr.style.display = (visibleItems.length === 1) ? 'none' : '';
  });
}

input.addEventListener('input', runFilter);

// === Mana shu joyga joylashtiramiz ===
// Har bir do‘kon kartasiga click event qo‘shamiz
items.forEach(el => {
  el.addEventListener('click', () => {
    const storeName = el.querySelector('h3').textContent.trim().toLowerCase();

    // HTMLdagi nom yoki qisqa nom orqali topish
    const loc = locations.find(l =>
      storeName.includes(l.name.toLowerCase()) || 
      (l.displayName && storeName.includes(l.displayName.toLowerCase()))
    );

    if (!loc) {
      
      return;
    }

    // Map’ni shu do‘kon markaziga olib boramiz
    map.setView([loc.lat, loc.lng], 16);

    // Marker popupini ochamiz
    L.popup()
      .setLatLng([loc.lat, loc.lng])
      .setContent(`
        <strong>${loc.name}</strong><br>
        ${loc.img ? `<img src="${loc.img}" style="width:100px;height:auto;">` : ""}
      `)
      .openOn(map);
  });
});


}else{
  const customIcon = L.icon({
  iconUrl: "https://dominospizza.ge/static/media/shop-blue.6c03fcec101d19ac945e53c16ec7bd05.svg",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38]
});

const locations = [
  { name: "ვაჟა-ფშაველას გამზ. 34", displayName: "დელისი", lat: 41.72561097144419, lng: 44.749278935297475, img: "https://dominosge.s3.eu-central-1.amazonaws.com/delisi.jpg" },
  { name: "ვიქტორ კუპრაძის ქ. 72",displayName: "ვარკეთილი", lat: 41.7121407, lng: 44.8778605, img: "https://dominosge.s3.eu-central-1.amazonaws.com/20250430131736952_DefaultStore.d520bc6434b9ff8cec2d.png" },
  { name: "ნავთლუღის ქ. 3 (ისანი მოლი)",displayName: "ისანი", lat: 41.68396467733614, lng: 44.84046947709175, img: "https://dominosge.s3.eu-central-1.amazonaws.com/isani.jpg" },
  { name: "ილია ვეკუას ქ. 10",displayName: "გლდანი", lat: 41.79295152621502, lng: 44.81723196196301, img: null},
  { name: "ვაჟა-ფშაველას გამზ. 78ა",displayName: "ვაჟა", lat: 41.72390007301149, lng: 44.73179612516593, img: "https://dominosge.s3.eu-central-1.amazonaws.com/vazha.jpg" },
  { name: "ილია ჭავჭავაძის გამზ. 9ა",displayName: "ვაკე", lat: 41.709304, lng: 44.774133, img: "https://dominosge.s3.eu-central-1.amazonaws.com/vake.jpg" },
  { name: "მერაბ კოსტავას ქ. 74",displayName: "კოსტავას", lat: 41.722178960393414, lng: 44.77663803805155, img: "https://dominosge.s3.eu-central-1.amazonaws.com/kostava.jpg" },
];

const map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const bounds = L.latLngBounds();
locations.forEach((loc, i) => {
  L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map)
    .bindPopup(`
      <strong>${i+1}. ${loc.name}</strong><br>
      ${loc.img ? `<img src="${loc.img}" class="popup-img" style="width:100px;height:auto;"><br>` : ""}
      <span class="fs-14 Kanit-SemiBold text-blue" data-store="${i}">—</span>
    `);
  bounds.extend([loc.lat, loc.lng]);
});
map.fitBounds(bounds.pad(0.1));

// Haversine formulasi
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// TUZATILGAN: Manual va Geolokatsiya variantlari
document.getElementById("geo-btn").addEventListener("click", function() {
  if (!navigator.geolocation) {
    alert("გთხოვთ, ჩართოთ მდებარეობაზე წვდომა თქვენი ბრაუზერის პარამეტრებში.");
    useManualCoordinates();
    return;
  }



  navigator.geolocation.getCurrentPosition(function(pos) {
    const userLat = pos.coords.latitude;
    const userLng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

   

    // Foydalanuvchi real koordinatasi bilan hisoblash
    calculateDistances(userLat, userLng, ``);

  }, function(err) {
   
    alert("გეოლოკაცია არ მუშაობდა.");
    // useManualCoordinates();
  }, {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 10000
  });
});




// MASOFALARNI HISOBLASH FUNKSIYASI
function calculateDistances(userLat, userLng, locationName) {


  // Foydalanuvchi markeri
  const userMarker = L.marker([userLat, userLng]).addTo(map)
    .bindPopup(`<b>${locationName}</b>`)
    .openPopup();
  map.setView([userLat, userLng], 12);

  // Har bir do'kon uchun masofa hisoblash
  locations.forEach((loc, i) => {
   
    
    try {
      // Haversine formula bilan hisoblash
      const distanceKm = haversineKm(userLat, userLng, loc.lat, loc.lng);
      
      
      
      // HTML da ko'rsatish
      const span = document.querySelector(`[data-store="${i}"]`);
      if (span) {
        span.textContent = distanceKm.toFixed(0) + " KM";
        
      } else {
        
      }
      
    } catch (error) {
      
    }
  });
  
  
}



const input = document.getElementById('searchInputStore');
const container = document.querySelector('.store-map');

const items = Array.from(container.querySelectorAll(':scope > div'))
  .filter(el => el.querySelector('h3'));

function runFilter() {
  const q = input.value.trim().toLowerCase();

  // Filterlash
  let visibleItems = [];
  items.forEach(el => {
    const name = el.querySelector('h3').textContent.trim().toLowerCase();
    if (name.includes(q)) {
      el.style.display = '';
      visibleItems.push(el);
    } else {
      el.style.display = 'none';
    }
  });

  // Agar faqat 1 ta do‘kon qolsa — ichidagi hr’ni yashiramiz
  items.forEach(el => {
    const hr = el.querySelector('hr');
    if (hr) hr.style.display = (visibleItems.length === 1) ? 'none' : '';
  });
}

input.addEventListener('input', runFilter);

// === Mana shu joyga joylashtiramiz ===
// Har bir do‘kon kartasiga click event qo‘shamiz
items.forEach(el => {
  el.addEventListener('click', () => {
    const storeName = el.querySelector('h3').textContent.trim().toLowerCase();

    // HTMLdagi nom yoki qisqa nom orqali topish
    const loc = locations.find(l =>
      storeName.includes(l.name.toLowerCase()) || 
      (l.displayName && storeName.includes(l.displayName.toLowerCase()))
    );

    if (!loc) {
     
      return;
    }

    // Map’ni shu do‘kon markaziga olib boramiz
    map.setView([loc.lat, loc.lng], 16);

    // Marker popupini ochamiz
    L.popup()
      .setLatLng([loc.lat, loc.lng])
      .setContent(`
        <strong>${loc.name}</strong><br>
        ${loc.img ? `<img src="${loc.img}" style="width:100px;height:auto;">` : ""}
      `)
      .openOn(map);
  });
});


}
