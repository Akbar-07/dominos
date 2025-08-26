if (window.matchMedia("(max-width: 600px)").matches) {
  document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("saveAddressBtnMobile");
  const changeBtn = document.querySelector("#MuiButtonBase-root");

  // 1) Проверьте, существует ли EditAddress
  let editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
  let selectedLocation = JSON.parse(sessionStorage.getItem("selectedLocation"));

  // Если есть правка, мы ее используем.
  let activeLocation = editAddress || selectedLocation;

  // Если необходим индекс, мы устанавливаем индекс, указывающий на editAddress
  if (editAddress) {
    // Узнаем, какой адрес editAddress
    let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];
    let idx = addresses.findIndex(addr => addr.display_name === editAddress.display_name);
    activeLocation.index = idx !== -1 ? idx : null;
  }

  // 2) Вывод информации на входы
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

  // 3) Кнопка «Сохранить»
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (!activeLocation) {
        alert("Please select a location.");
        return;
      }

      const requiredFields = [
        { selector: '#buildingMobile', name: "Building Name" },
        { selector: '#entranceMobile', name: "Entrance" },
        { selector: '#FloorMobile', name: "Floor" },
        { selector: '#ApartmentMobile', name: "Apartment" }
      ];

      for (let field of requiredFields) {
        const value = document.querySelector(field.selector)?.value.trim();
        if (!value) {
          alert(`${field.name} field is mandatory!`);
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

      // Получить старые адреса или создать пустой массив
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      // Если это редактирование — обновите старый адрес.
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

  // 4) Кнопка «Изменить» (изменить адрес)
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      const editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      if (editAddress) {
        // Удалить: Мы тщательно проверяем каждый элемент
        addresses = addresses.filter(addr => {
          // Проверить весь объект (по строке JSON)
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

  // 1) Проверьте, существует ли EditAddress
  let editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
  let selectedLocation = JSON.parse(sessionStorage.getItem("selectedLocation"));

  // Если есть правка, мы ее используем.
  let activeLocation = editAddress || selectedLocation;

  // Если необходим индекс, мы устанавливаем индекс, указывающий на editAddress
  if (editAddress) {
    // Узнаем, какой адрес editAddress
    let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];
    let idx = addresses.findIndex(addr => addr.display_name === editAddress.display_name);
    activeLocation.index = idx !== -1 ? idx : null;
  }

  // 2) Вывод информации на входы
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

  // 3) Кнопка «Сохранить»
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (!activeLocation) {
        alert("Please select a location.");
        return;
      }

      const requiredFields = [
        { selector: '#buildingDestop', name: "Building Name" },
        { selector: '#entranceDestop', name: "Entrance" },
        { selector: '#FloorDestop', name: "Floor" },
        { selector: '#ApartmentDestop', name: "Apartment" }
      ];

      for (let field of requiredFields) {
        const value = document.querySelector(field.selector)?.value.trim();
        if (!value) {
          alert(`${field.name} field is mandatory!`);
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

      // Получить старые адреса или создать пустой массив
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      // Если редактировать — обновить старый адрес
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

  // 4) Кнопка «Изменить» (изменить адрес)
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      const editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      if (editAddress) {
        // Удалить: Мы тщательно проверяем каждый элемент
        addresses = addresses.filter(addr => {
          // Проверить весь объект (по строке JSON)
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



