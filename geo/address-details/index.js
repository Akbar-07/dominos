if (window.matchMedia("(max-width: 600px)").matches) {
  document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("saveAddressBtnMobile");
  const changeBtn = document.querySelector("#MuiButtonBase-root");

  // 1) EditAddress bor-yo'qligini tekshirish
  let editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
  let selectedLocation = JSON.parse(sessionStorage.getItem("selectedLocation"));

  // Agar edit bo'lsa — shuni ishlatamiz
  let activeLocation = editAddress || selectedLocation;

  // Agar index kerak bo'lsa, editAddress ni ko'rsatadigan index ni o'rnatamiz
  if (editAddress) {
    // editAddress qaysi manzil ekanini topamiz
    let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];
    let idx = addresses.findIndex(addr => addr.display_name === editAddress.display_name);
    activeLocation.index = idx !== -1 ? idx : null;
  }

  // 2) Inputlarga ma'lumotni chiqarish
  if (activeLocation) {
    if (activeLocation.display_name) {
      const locationTextElement = document.querySelector("#jss23-p");
      if (locationTextElement) {
        locationTextElement.textContent = activeLocation.display_name;
      }
    }

    const setValue = (selector, value) => {
      const input = document.querySelector(selector);
      if (input) input.value = value || "";
    };

    setValue('#buildingMobile', activeLocation.buildingName);
    setValue('#entranceMobile', activeLocation.entrance);
    setValue('#doorCodeMobile', activeLocation.doorCode);
    setValue('#FloorMobile', activeLocation.floor);
    setValue('#ApartmentMobile', activeLocation.apartment);
    setValue('#homeWorkMobile', activeLocation.homeWork);
    setValue('#OptionalMobile', activeLocation.otherInstruction);
  }

  // 3) Saqlash tugmasi
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (!activeLocation) {
        alert("გთხოვთ, აირჩიოთ მდებარეობა.");
        return;
      }

      const requiredFields = [
        { selector: '#buildingMobile', name: "შენობის სახელწოდება" },
        { selector: '#entranceMobile', name: "შესასვლელი" },
        { selector: '#FloorMobile', name: "სართული" },
        { selector: '#ApartmentMobile', name: "ბინა" }
      ];

      for (let field of requiredFields) {
        const value = document.querySelector(field.selector)?.value.trim();
        if (!value) {
          alert(`${field.name} ველი სავალდებულოა!`);
          return;
        }
      }

      const fullLocationData = {
        ...activeLocation,
        buildingName: document.querySelector('#buildingMobile').value.trim(),
        entrance: document.querySelector('#entranceMobile').value.trim(),
        doorCode: document.querySelector('#doorCodeMobile').value.trim(),
        floor: document.querySelector('#FloorMobile').value.trim(),
        apartment: document.querySelector('#ApartmentMobile').value.trim(),
        homeWork: document.querySelector('#homeWorkMobile').value.trim(),
        otherInstruction: document.querySelector('#OptionalMobile').value.trim()
      };

      // Eski manzillarni olish yoki bo'sh massiv yaratish
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      // Agar edit bo'lsa — eski manzilni yangilash
      if (activeLocation.index != null && addresses[activeLocation.index]) {
        addresses[activeLocation.index] = fullLocationData;
      } else {
        addresses.push(fullLocationData);
      }

      sessionStorage.setItem("addresses", JSON.stringify(addresses));
      sessionStorage.removeItem("selectedLocation");
      sessionStorage.removeItem("editAddress");
      sessionStorage.setItem("success",true);

      
      window.location.href = "../addresses";
    });
  }

  // 4) Change tugmasi (manzilni o'zgartirish)
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      const editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      if (editAddress) {
        // O‘chirish: har bir elementni chuqur tekshiramiz
        addresses = addresses.filter(addr => {
          // To'liq obyektni tekshirish (JSON string bo‘yicha)
          return JSON.stringify(addr) !== JSON.stringify(editAddress);
        });
        sessionStorage.setItem("addresses", JSON.stringify(addresses));
        sessionStorage.removeItem("editAddress");
      }

      sessionStorage.removeItem("selectedLocation");
      window.location.href = "../add-address";
    });
  }

  
});
}else{
  document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("saveAddressBtn");
  const changeBtn = document.querySelector(".MuiButtonBase-root.MuiButton-root");

  // 1) EditAddress bor-yo'qligini tekshirish
  let editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
  let selectedLocation = JSON.parse(sessionStorage.getItem("selectedLocation"));

  // Agar edit bo'lsa — shuni ishlatamiz
  let activeLocation = editAddress || selectedLocation;

  // Agar index kerak bo'lsa, editAddress ni ko'rsatadigan index ni o'rnatamiz
  if (editAddress) {
    // editAddress qaysi manzil ekanini topamiz
    let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];
    let idx = addresses.findIndex(addr => addr.display_name === editAddress.display_name);
    activeLocation.index = idx !== -1 ? idx : null;
  }

  // 2) Inputlarga ma'lumotni chiqarish
  if (activeLocation) {
    if (activeLocation.display_name) {
      const locationTextElement = document.querySelector(".jss28 p");
      if (locationTextElement) {
        locationTextElement.textContent = activeLocation.display_name;
      }
    }

    const setValue = (selector, value) => {
      const input = document.querySelector(selector);
      if (input) input.value = value || "";
    };

    setValue('#buildingDestop', activeLocation.buildingName);
    setValue('#entranceDestop', activeLocation.entrance);
    setValue('#doorCodeDestop', activeLocation.doorCode);
    setValue('#FloorDestop', activeLocation.floor);
    setValue('#ApartmentDestop', activeLocation.apartment);
    setValue('#homeWorkDestop', activeLocation.homeWork);
    setValue('#OptionalDestop', activeLocation.otherInstruction);
  }

  // 3) Saqlash tugmasi
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (!activeLocation) {
        alert("გთხოვთ, აირჩიოთ მდებარეობა.");
        return;
      }

      const requiredFields = [
        { selector: '#buildingDestop', name: "შენობის სახელწოდება" },
        { selector: '#entranceDestop', name: "შესასვლელი" },
        { selector: '#FloorDestop', name: "სართული" },
        { selector: '#ApartmentDestop', name: "ბინა" }
      ];

      for (let field of requiredFields) {
        const value = document.querySelector(field.selector)?.value.trim();
        if (!value) {
          alert(`${field.name} ველი სავალდებულოა!`);
          return;
        }
      }

      const fullLocationData = {
        ...activeLocation,
        buildingName: document.querySelector('#buildingDestop').value.trim(),
        entrance: document.querySelector('#entranceDestop').value.trim(),
        doorCode: document.querySelector('#doorCodeDestop').value.trim(),
        floor: document.querySelector('#FloorDestop').value.trim(),
        apartment: document.querySelector('#ApartmentDestop').value.trim(),
        homeWork: document.querySelector('#homeWorkDestop').value.trim(),
        otherInstruction: document.querySelector('#OptionalDestop').value.trim()
      };

      // Eski manzillarni olish yoki bo'sh massiv yaratish
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      // Agar edit bo'lsa — eski manzilni yangilash
      if (activeLocation.index != null && addresses[activeLocation.index]) {
        addresses[activeLocation.index] = fullLocationData;
      } else {
        addresses.push(fullLocationData);
      }

      sessionStorage.setItem("addresses", JSON.stringify(addresses));
      sessionStorage.setItem("success",true);
      sessionStorage.removeItem("selectedLocation");
      sessionStorage.removeItem("editAddress");

      window.location.href = "../addresses";
    });
  }

  // 4) Change tugmasi (manzilni o'zgartirish)
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      const editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      if (editAddress) {
        // O‘chirish: har bir elementni chuqur tekshiramiz
        addresses = addresses.filter(addr => {
          // To'liq obyektni tekshirish (JSON string bo‘yicha)
          return JSON.stringify(addr) !== JSON.stringify(editAddress);
        });
        sessionStorage.setItem("addresses", JSON.stringify(addresses));
        sessionStorage.removeItem("editAddress");
      }

      sessionStorage.removeItem("selectedLocation");
      window.location.href = "../add-address";
    });
  }

  
});
}



