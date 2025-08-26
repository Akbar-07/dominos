if (window.matchMedia("(max-width: 900px)").matches) {


let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

// ===================
// TRANSLATION SYSTEM
// ===================

// Функция определения текущего языка
function getCurrentLanguage() {
    // Определить язык по URL
    const path = window.location.pathname;
    
    // Геоязык - начинается с /geo/ или содержит /geo/
    if (path.includes('/geo/') || path.startsWith('/geo')) return 'geo';
    
    // Наиболее распространенный — http://127.0.0.1:5500/ (корневой путь или заканчивается на /)
    if (path === '/' || path === '' || path === '/index.html') return 'en';
    
    // Default eng tili
    return 'en';
}

// Перевод информации о продукте на новый язык
function translateProductData(productId, newLanguage) {
    // Получить информацию на новом языке из существующих продуктов на странице
    const productElement = document.querySelector(`[data-id="${productId}"]`);
    
    if (!productElement) {
        // Попытка получить данные из localStorage, если на странице нет товара
        return null;
    }

    return {
        id: productId,
        img: productElement.dataset.img,
        title: productElement.dataset.title,
        description: productElement.dataset.description,
        price: parseFloat(productElement.dataset.price),
        aksiyaPrice: parseFloat(productElement.dataset.aksiyaPrice) || null
    };
}

// Перевод корзины и заказов на новый язык
function translateCartItems() {
    const currentLang = getCurrentLanguage();
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    let updated = false;

    // Обновить позиции корзины
    cart.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            // Обновите только те поля, которые требуют перевода.
            cart[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Обновить элементы заказов
    orders.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            orders[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Если были изменения, сохраните в localStorage.
    if (updated) {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("orders", JSON.stringify(orders));
        
        // Обновите также глобальные переменные
        window.cart = cart;
        window.orders = orders;
        
        // Обновите пользовательский интерфейс
        updateCartBadge();
        updateCartPopup();
        
        // Также вызовите функцию в addCART.js (если доступно)
        if (typeof loadAndRenderOrders === 'function') {
            loadAndRenderOrders();
        }
        
    }
}

// ===================
// CART FUNCTIONS
// ===================

// Обновление значка (количество корзин и заказов)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const countCart = document.querySelector(".countCartMobile");

    if (!countCart) return;

    // Общее количество товаров в корзине и заказах
    const totalCount = cart.length + orders.length;

    countCart.textContent = totalCount;

    if (totalCount > 0) {
        countCart.style.display = "flex";
    } else {
        countCart.style.display = "none";
    }

    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Всплывающее окно корзины ни янгилаш (корзина + заказы)
function updateCartPopup() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const container = document.querySelector(".item-card-container");
    const cartItemMap = document.querySelector(".cart-item-map-container");
    const emptyImg = document.querySelector(".cart-popup-img");
    const totalEl = document.querySelector(".cart-total .redflag");


    if (!container || !cartItemMap || !emptyImg || !totalEl) return;

    container.innerHTML = ""; // чистка старых вещей

    const allItems = [...cart, ...orders];

    if (allItems.length === 0) {
        cartItemMap.style.display = "none";
        emptyImg.style.display = "flex";
        totalEl.textContent = " 0.00";
        return;
    }

    cartItemMap.style.display = "block";
    emptyImg.style.display = "none";

    let total = 0;

    // Сначала добавьте товары в корзину
    cart.forEach(item => {
        const itemTotal = item.price || 0;
        total += itemTotal;
        
        const div = document.createElement("div");
        div.className = "item-card-container";
        div.innerHTML = `
            <div class="img-cart-item">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="card-text-info-item">
                <p>${item.title}</p>
                <span>${item.description || ''}</span>
            </div>
            <div class="card-price-item">
                <p class="fs-18 text-red redflag" style="font-size:15px;">
                    ${(item.price*item.count).toFixed(2)}<b>₾</b>
                </p>
            </div>
        `;
        container.appendChild(div);
    });

    // Затем добавьте позиции заказов
    orders.forEach(item => {
        // Потому что структура заказа другая
        let itemTotal = 0;
         if (item.price) {
            itemTotal = item.price * (item.count);
        }

        total += itemTotal;

        const div = document.createElement("div");
        div.className = "item-card-container";
        div.innerHTML = `
            <div class="img-cart-item">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="card-text-info-item">
                <p>${item.title}</p>
                <span>${item.description || ''}</span>
            </div>
            <div class="card-price-item">
                <p class="fs-18 text-red redflag" style="font-size:15px;">
                    ${(item.price*item.count).toFixed(2)}<b>₾</b>
                </p>
            </div>
        `;
        container.appendChild(div);
    });
    
    totalEl.textContent = " " + total.toFixed(2);
}

// Хранилище LocalStorage и общий расчет
function saveCart() {
    cart.forEach(item => {
        item.total = (item.aksiyaPrice || item.price) * item.count;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    updateCartPopup();
}

// Сохраняйте заказы
function saveOrders() {
    // Мы ничего не делаем, потому что структура заказов отличается от корзины.
    localStorage.setItem("orders", JSON.stringify(orders));
    updateCartBadge();
    updateCartPopup();
    
    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Добавить товар в заказы
function addToOrders(item) {
    const orderItem = {
        ...item,
        count: item.count, // Добавить поле количества
        date: new Date().toISOString(),
        status: 'pending'
    };
    
    orders.push(orderItem);
    saveOrders();
}

// Перейти из корзины в заказы
function moveCartToOrders() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    cart.forEach(item => {
        addToOrders(item);
    });
    
    // Очистить корзину
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Обновите пользовательский интерфейс
    document.querySelectorAll(".product").forEach(product => {
        const id = product.dataset.id;
        const cartItem = cart.find(item => item.id === id);
        
        if (!cartItem) {
            product.querySelector(".jss41").style.display = "inline-block";
            product.querySelector(".qty-container").style.display = "none";
            
            // Восстановление цен
            const priceEl = product.querySelector(".product-price");
            if (priceEl) {
                const aksiyaPrice = parseFloat(product.dataset.price);
                const price = parseFloat(product.dataset.aksiyaPrice) || null;
                priceEl.innerHTML = (aksiyaPrice || price).toFixed(2) + "<b>₾</b>";
            }
        }
    });
    
    updateCartBadge();
    updateCartPopup();
    
    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
    
    alert("Order placed successfully!");
}

// ===================
// EVENT HANDLERS
// ===================

// Очистка старых обработчиков кликов
function clearOldHandlers() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
}

// При нажатии кнопки «Добавить в корзину»
function initAddToCartButtons() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.addEventListener("click", function () {
            let product = this.closest(".product");

            // Если набор данных не содержит цен, то мы будем читать только из DOM.
            if (!product.dataset.price || !product.dataset.aksiyaPrice) {
                // Получение цен из DOM (только в первый раз)
                let discountedPrice = parseFloat(product.querySelector(".for_aksiyaPrice").textContent.trim());
                let originalPrice = parseFloat(product.querySelector(".for_price").textContent.trim());

                // data-atributlarga saqlash
                product.dataset.price = originalPrice.toFixed(2);       // первоначальная цена
                product.dataset.aksiyaPrice = discountedPrice.toFixed(2); // цена акции
            }

            // Набор данных и масло
            let id = product.dataset.id;
            let img = product.dataset.img;
            let title = product.dataset.title;
            let description = product.dataset.description;
            let aksiyaPrice = parseFloat(product.dataset.price);
            let price = parseFloat(product.dataset.aksiyaPrice) || 0;

            let existing = cart.find(item => item.id === id);

            if (!existing) {
                cart.push({
                    id,
                    img,
                    title,
                    description,
                    price,               // первоначальная цена
                    aksiyaPrice,         // цена акции
                    count: 1,
                    total: aksiyaPrice ? aksiyaPrice : price
                });
                saveCart();

                this.style.display = "none";
                product.querySelector(".qty-container").style.display = "flex";
                
                // На десктопе for_price — это исходная цена, for_sharePrice — это цена акций.
                let priceEl = product.querySelector(".for_price");
                let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice");
                
                if (priceEl) {
                    priceEl.innerHTML = price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = aksiyaPrice.toFixed(2) + "<b></b>";
                }
                
                updateQuantityUI(product, id);
            }
        });
    });
}

// Обновление пользовательского интерфейса «плюс/минус» для продукта
function updateQuantityUI(product, id) {
    let cartItem = cart.find(item => item.id === id);
    if (!cartItem) return;

    let minusBtn = product.querySelector(".qty-minus");
    let plusBtn = product.querySelector(".qty-plus");
    let countEl = product.querySelector(".qty-count");

    // получить два ценовых элемента
    let priceEl = product.querySelector(".for_price");           // Вот цена (первоначальная цена)
    let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice"); // Вот цена акции

    if (countEl) countEl.textContent = cartItem.count;

    // for_price ga faqat price (asl narx) * count
    let totalPrice = cartItem.price * cartItem.count;
    let totalAksiya = (cartItem.aksiyaPrice) * cartItem.count;

    // Ввод цены (первоначальной цены) в for_price
    if (priceEl) {
        priceEl.innerHTML = totalPrice.toFixed(2) + "<b>₾</b>";
    }
    
    // Установите цену акций на for_stockPrice
    if (aksiyaPriceEl && cartItem.aksiyaPrice) {
        aksiyaPriceEl.innerHTML = totalAksiya.toFixed(2) + "<b></b>";
    }

    if (plusBtn) {
        plusBtn.onclick = () => {
            cartItem.count += 1;
            saveCart();
            updateQuantityUI(product, id);
        };
    }

    if (minusBtn) {
        minusBtn.onclick = () => {
            cartItem.count -= 1;
            if (cartItem.count <= 0) {
                cart = cart.filter(item => item.id !== id);
                saveCart();
                
                const qtyContainer = product.querySelector(".qty-container");
                const addBtn = product.querySelector(".jss41");
                
                if (qtyContainer) qtyContainer.style.display = "none";
                if (addBtn) addBtn.style.display = "inline-block";

                // возвращать цены по умолчанию при нажатии минуса
                if (priceEl) {
                    priceEl.innerHTML = cartItem.price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && cartItem.aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = cartItem.aksiyaPrice.toFixed(2) + "<b></b>";
                }
            } else {
                saveCart();
                updateQuantityUI(product, id);
            }
        };
    }
}

// ===================
// POPUP EVENTS
// ===================

// Cart popup mouse events
function initCartPopupEvents() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartPopup = document.querySelector('.cart-popup');

    if (!cartIcon || !cartPopup) return;

    let hideTimeout;

    // При наведении курсора на значок открывается всплывающее окно.
    cartIcon.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        cartPopup.style.display = 'flex';
    });

    // При наведении курсора на иконку - мы проверяем
    cartIcon.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            if (!cartPopup.matches(':hover')) {
                cartPopup.style.display = 'none';
            }
        }, 1500);
    });

    // Мы также закрываем всплывающее окно при выходе.
    cartPopup.addEventListener('mouseleave', () => {
        cartPopup.style.display = 'none';
    });

    // При наведении курсора на всплывающее окно — если оно ожидает закрытия, мы отменим его.
    cartPopup.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
    });
}

// ===================
// INITIALIZATION
// ===================

// Запустить систему перевода после загрузки страницы
function initTranslationSystem() {
    // Проверьте перевод после полной загрузки страницы.
    setTimeout(translateCartItems, 100);
    
    // Проверять даже при изменении URL (для SPA)
    let currentUrl = window.location.href;
    setInterval(() => {
        if (currentUrl !== window.location.href) {
            currentUrl = window.location.href;
            setTimeout(translateCartItems, 100);
        }
    }, 500);
}

// Сброс пользовательского интерфейса при загрузке страницы
function initializeCartSystem() {
    // Сначала перевод
    setTimeout(translateCartItems, 50);
    
    updateCartBadge();
    updateCartPopup();

    // Очистить старые обработчики и добавить новые обработчики
    clearOldHandlers();
    initAddToCartButtons();
    initCartPopupEvents();

    // Сбросить пользовательский интерфейс
    document.querySelectorAll(".product").forEach(product => {
        let id = product.dataset.id;
        let cartItem = cart.find(item => item.id === id);

        if (cartItem && cartItem.count > 0) {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "none";
            if (qtyContainer) qtyContainer.style.display = "flex";
            
            updateQuantityUI(product, id);
        } else {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "inline-block";
            if (qtyContainer) qtyContainer.style.display = "none";
        }
    });
}

// ===================
// EVENT LISTENERS
// ===================

// Когда DOM загружен
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initTranslationSystem();
        initializeCartSystem();
    });
} else {
    initTranslationSystem();
    initializeCartSystem();
}

// Прослушиватель событий для кнопки заказа
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
        moveCartToOrders();
    }
});

// Прослушиватель событий, который запускается при изменении языка
window.addEventListener('languageChanged', translateCartItems);

// Проверка видимости страницы с помощью API видимости страницы
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        setTimeout(translateCartItems, 100);
    }
});

// Проверка даже если хеш изменился
window.addEventListener('hashchange', function() {
    setTimeout(translateCartItems, 100);
});

// Событие Popstate (браузер назад/вперед tugmalari)
window.addEventListener('popstate', function() {
    setTimeout(translateCartItems, 100);
});

// Прослушивайте событие localStorage для обновления корзины при изменении заказов.
window.addEventListener('storage', function(e) {
    if (e.key === 'orders') {
        updateCartBadge();
        updateCartPopup();
    }
});

// ===================
// UTILITY FUNCTIONS
// ===================

// Функция просмотра заказов (для тестирования в консоли)
function viewOrders() {
}

// Функция клиринга заказов (для тестирования)
function clearOrders() {
    localStorage.removeItem("orders");
    orders = [];
    updateCartBadge();
    updateCartPopup();
    
    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Глобальная функция для ручного перевода
window.forceTranslateCart = function() {
    translateCartItems();
};

// Глобальная функция - для вызова из других файлов
window.updateCartFromOrders = function() {
    updateCartBadge();
    updateCartPopup();
};







}else{

// COMPLETE DESKTOP CART SYSTEM WITH TRANSLATION

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

// ===================
// TRANSLATION SYSTEM
// ===================

// Функция определения текущего языка
function getCurrentLanguage() {
    // Определить язык по URL
    const path = window.location.pathname;
    
    // Геоязык - начинается с /geo/ или содержит /geo/
    if (path.includes('/geo/') || path.startsWith('/geo')) return 'geo';
    
    // Наиболее распространенный — http://127.0.0.1:5500/ (корневой путь или заканчивается на /)
    if (path === '/' || path === '' || path === '/index.html') return 'en';
    
    // Default eng tili
    return 'en';
}

// Перевод информации о продукте на новый язык
function translateProductData(productId, newLanguage) {
    // Получить информацию на новом языке из существующих продуктов на странице
    const productElement = document.querySelector(`[data-id="${productId}"]`);
    
    if (!productElement) {
        // Попытка получить данные из localStorage, если на странице нет товара
        return null;
    }

    return {
        id: productId,
        img: productElement.dataset.img,
        title: productElement.dataset.title,
        description: productElement.dataset.description,
        price: parseFloat(productElement.dataset.price),
        aksiyaPrice: parseFloat(productElement.dataset.aksiyaPrice) || null
    };
}

// Перевод корзины и заказов на новый язык
function translateCartItems() {
    const currentLang = getCurrentLanguage();
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    let updated = false;

    // Обновить позиции корзины
    cart.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            // Обновите только те поля, которые требуют перевода.
            cart[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Обновить элементы заказов
    orders.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            orders[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Если были изменения, сохраните в localStorage.
    if (updated) {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("orders", JSON.stringify(orders));
        
        // Обновите также глобальные переменные
        window.cart = cart;
        window.orders = orders;
        
        // Обновите пользовательский интерфейс
        updateCartBadge();
        updateCartPopup();
        
        // Также вызовите функцию в addCART.js (если доступно)
        if (typeof loadAndRenderOrders === 'function') {
            loadAndRenderOrders();
        }
        
    }
}

// ===================
// CART FUNCTIONS
// ===================

// Обновление значка (количество корзин и заказов)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const countCart = document.querySelector(".countCart");

    if (!countCart) return;

    // Общее количество товаров в корзине и заказах
    const totalCount = cart.length + orders.length;

    countCart.textContent = totalCount;

    if (totalCount > 0) {
        countCart.style.display = "flex";
    } else {
        countCart.style.display = "none";
    }

    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Всплывающее окно корзины ни янгилаш (корзина + заказы)
function updateCartPopup() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const container = document.querySelector(".item-card-container");
    const cartItemMap = document.querySelector(".cart-item-map-container");
    const emptyImg = document.querySelector(".cart-popup-img");
    const totalEl = document.querySelector(".cart-total .redflag");

    if (!container || !cartItemMap || !emptyImg || !totalEl) return;

    container.innerHTML = ""; // чистка старых вещей

    const allItems = [...cart, ...orders];

    if (allItems.length === 0) {
        cartItemMap.style.display = "none";
        emptyImg.style.display = "flex";
        totalEl.textContent = " 0.00";
        return;
    }

    cartItemMap.style.display = "block";
    emptyImg.style.display = "none";

    let total = 0;

    // Сначала добавьте товары в корзину
    cart.forEach(item => {
        const itemTotal = item.price * item.count;
        total += itemTotal;
        
        const div = document.createElement("div");
        div.className = "item-card-container";
        div.innerHTML = `
            <div class="img-cart-item">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="card-text-info-item">
                <p>${item.title}</p>
                <span>${item.description || ''}</span>
            </div>
            <div class="card-price-item">
                <p class="fs-18 text-red redflag" style="font-size:15px;">
                    ${(item.price * item.count).toFixed(2)}<b>₾</b>
                </p>
            </div>
        `;
        container.appendChild(div);
    });

    // Затем добавьте позиции заказа (с originalProduct)
    orders.forEach(item => {
    // Получить данные из originalProduct
    let productData = item.originalProduct || item; // Резервный вариант: получить из элемента, если originalProduct не существует
    
    let itemTotal = 0;

    if (productData.price || productData.aksiyaPrice) {
        // Используйте promotionPrice, если он существует, в противном случае price
        const price = productData.price || productData.aksiyaPrice || 0;

        // базовая цена (только с учетом базовой цены товара)
        itemTotal = price * (item.count || 1);

        // Если есть пиццы, мы добавим их цены и ингредиенты.
        if (item.pizzas && Array.isArray(item.pizzas)) {
            let pizzasExtra = item.pizzas.reduce((sum, pizza) => {
                let pizzaPrice = pizza.price || 0;

                // цены на ингредиенты
                let ingPrice = 0;
                if (pizza.ingredients && Array.isArray(pizza.ingredients)) {
                    ingPrice = pizza.ingredients.reduce(
                        (ingSum, ing) => ingSum + (ing.price || 0),
                        0
                    );
                }

                return sum + pizzaPrice + ingPrice;
            }, 0);

            // pizzasExtra добавляется только ОДИН РАЗ (не умножается на количество!)
            itemTotal += pizzasExtra;
        }
    }

    total += itemTotal;

    // Рендеринг пользовательского интерфейса корзины
    const div = document.createElement("div");
    div.className = "item-card-container";
    div.innerHTML = `
        <div class="img-cart-item">
            <img src="${productData.img}" alt="${productData.title}">
        </div>
        <div class="card-text-info-item">
            <p>${productData.title}</p>
            <span>${productData.description || ''}</span>
        </div>
        <div class="card-price-item">
            <p class="fs-18 text-red redflag" style="font-size:15px;">
                ${(() => {
                    // Базовая цена
                    let basePrice = parseFloat(productData.price || item.price) || 0;
                    let additionalPrice = 0;

                    // Добавление стоимости пиццы и ингредиентов
                    if (item.pizzas && item.pizzas.length > 0) {
                        item.pizzas.forEach(pizza => {
                            additionalPrice += parseFloat(pizza.price) || 0;

                            if (pizza.ingredients && pizza.ingredients.length > 0) {
                                pizza.ingredients.forEach(ingredient => {
                                    additionalPrice += parseFloat(ingredient.price) || 0;
                                });
                            }
                        });
                    }

                    // Рассчитать общую стоимость
                    return ((basePrice * (item.count || 1)) + additionalPrice).toFixed(2);
                })()}<b>₾</b>
            </p>
        </div>
    `;
    container.appendChild(div);
});

    
    totalEl.textContent = " " + total.toFixed(2);
}

// Хранилище LocalStorage и общий расчет
function saveCart() {
    cart.forEach(item => {
        item.total = (item.aksiyaPrice || item.price) * item.count;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    updateCartPopup();
}

// Сохраняйте заказы
function saveOrders() {
    // Мы ничего не делаем, потому что структура заказов отличается от корзины.
    localStorage.setItem("orders", JSON.stringify(orders));
    updateCartBadge();
    updateCartPopup();
    
    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Добавить товар в заказы
function addToOrders(item) {
    const orderItem = {
        ...item,
        count: item.count, // Добавить поле количества
        date: new Date().toISOString(),
        status: 'pending'
    };
    
    orders.push(orderItem);
    saveOrders();
}

//Перейти из корзины в заказы
function moveCartToOrders() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    cart.forEach(item => {
        addToOrders(item);
    });
    
    // Очистить корзину
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Обновите пользовательский интерфейс
    document.querySelectorAll(".product").forEach(product => {
        const id = product.dataset.id;
        const cartItem = cart.find(item => item.id === id);
        
        if (!cartItem) {
            product.querySelector(".jss41").style.display = "inline-block";
            product.querySelector(".qty-container").style.display = "none";
            
            // Восстановление цен
            const priceEl = product.querySelector(".product-price");
            if (priceEl) {
                const aksiyaPrice = parseFloat(product.dataset.price);
                const price = parseFloat(product.dataset.aksiyaPrice) || null;
                priceEl.innerHTML = (aksiyaPrice || price).toFixed(2) + "<b>₾</b>";
            }
        }
    });
    
    updateCartBadge();
    updateCartPopup();
    
    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
    
    alert("Order placed successfully!");
}

// ===================
// EVENT HANDLERS
// ===================

// Очистка старых обработчиков кликов
function clearOldHandlers() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
}

// При нажатии кнопки «Добавить в корзину»
function initAddToCartButtons() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.addEventListener("click", function () {
            let product = this.closest(".product");

            // Если набор данных не содержит цен, то мы будем читать только из DOM.
            if (!product.dataset.price || !product.dataset.aksiyaPrice) {
                // Получение цен из DOM (только в первый раз)
                let discountedPrice = parseFloat(product.querySelector(".for_aksiyaPrice").textContent.trim());
                let originalPrice = parseFloat(product.querySelector(".for_price").textContent.trim());

                //сохранить в атрибутах данных
                product.dataset.aksiyaPrice = originalPrice.toFixed(2);       // первоначальная цена
                product.dataset.price = discountedPrice.toFixed(2); // цена акции
            }

            // Набор данных и масло
            let id = product.dataset.id;
            let img = product.dataset.img;
            let title = product.dataset.title;
            let description = product.dataset.description;
            let for_favorite=  true;
            let aksiyaPrice = parseFloat(product.dataset.price);
            let price = parseFloat(product.dataset.aksiyaPrice) || null;

            let existing = cart.find(item => item.id === id);

            if (!existing) {
                cart.push({
                    id,
                    img,
                    title,
                    description,
                    price,               
                    aksiyaPrice,   
                    for_favorite,      
                    count: 1,
                    total: aksiyaPrice ? aksiyaPrice : price
                });
                saveCart();

                this.style.display = "none";
                product.querySelector(".qty-container").style.display = "flex";
                
                // На десктопе for_price — это исходная цена, for_sharePrice — это цена акций.
                let priceEl = product.querySelector(".for_price");
                let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice");
                
                if (priceEl) {
                    priceEl.innerHTML = price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = aksiyaPrice.toFixed(2) + "<b></b>";
                }
                
                updateQuantityUI(product, id);
            }
        });
    });
}

// Обновление пользовательского интерфейса «плюс/минус» для продукта
function updateQuantityUI(product, id) {
    let cartItem = cart.find(item => item.id === id);
    if (!cartItem) return;

    let minusBtn = product.querySelector(".qty-minus");
    let plusBtn = product.querySelector(".qty-plus");
    let countEl = product.querySelector(".qty-count");

    // получить два ценовых элемента
    let priceEl = product.querySelector(".for_price");           // Вот цена (первоначальная цена)
    let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice"); // Вот цена акции

    if (countEl) countEl.textContent = cartItem.count;

    // for_price ga faqat price (asl narx) * count
    let totalPrice = cartItem.price * cartItem.count;
    let totalAksiya = (cartItem.aksiyaPrice || cartItem.price) * cartItem.count;

    // Ввод цены (первоначальной цены) в for_price
    if (priceEl) {
        priceEl.innerHTML = totalPrice.toFixed(2) + "<b>₾</b>";
    }
    
    // Установите цену акций на for_stockPrice
    if (aksiyaPriceEl && cartItem.aksiyaPrice) {
        aksiyaPriceEl.innerHTML = totalAksiya.toFixed(2) + "<b></b>";
    }

    if (plusBtn) {
        plusBtn.onclick = () => {
            cartItem.count += 1;
            saveCart();
            updateQuantityUI(product, id);
        };
    }

    if (minusBtn) {
        minusBtn.onclick = () => {
            cartItem.count -= 1;
            if (cartItem.count <= 0) {
                cart = cart.filter(item => item.id !== id);
                saveCart();
                
                const qtyContainer = product.querySelector(".qty-container");
                const addBtn = product.querySelector(".jss41");
                
                if (qtyContainer) qtyContainer.style.display = "none";
                if (addBtn) addBtn.style.display = "inline-block";

                // возвращать цены по умолчанию при нажатии минуса
                if (priceEl) {
                    priceEl.innerHTML = cartItem.price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && cartItem.aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = cartItem.aksiyaPrice.toFixed(2) + "<b></b>";
                }
            } else {
                saveCart();
                updateQuantityUI(product, id);
            }
        };
    }
}

// ===================
// POPUP EVENTS
// ===================

// Cart popup mouse events
function initCartPopupEvents() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartPopup = document.querySelector('.cart-popup');

    if (!cartIcon || !cartPopup) return;

    let hideTimeout;

    // При наведении курсора на значок открывается всплывающее окно.
    cartIcon.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        cartPopup.style.display = 'flex';
    });

    // При наведении курсора на иконку - мы проверяем
    cartIcon.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            if (!cartPopup.matches(':hover')) {
                cartPopup.style.display = 'none';
            }
        }, 1500);
    });

    // Мы также закрываем всплывающее окно при выходе.
    cartPopup.addEventListener('mouseleave', () => {
        cartPopup.style.display = 'none';
    });

    // При наведении курсора на всплывающее окно — если оно ожидает закрытия, мы отменим его.
    cartPopup.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
    });
}

// ===================
// INITIALIZATION
// ===================

// Запустить систему перевода после загрузки страницы
function initTranslationSystem() {
    // Проверьте перевод после полной загрузки страницы.
    setTimeout(translateCartItems, 100);
    
    // Проверять даже при изменении URL (для SPA)
    let currentUrl = window.location.href;
    setInterval(() => {
        if (currentUrl !== window.location.href) {
            currentUrl = window.location.href;
            setTimeout(translateCartItems, 100);
        }
    }, 500);
}

// Сброс пользовательского интерфейса при загрузке страницы
function initializeCartSystem() {
    // Сначала перевод
    setTimeout(translateCartItems, 50);
    
    updateCartBadge();
    updateCartPopup();

    // Очистить старые обработчики и добавить новые обработчики
    clearOldHandlers();
    initAddToCartButtons();
    initCartPopupEvents();

    // Сбросить пользовательский интерфейс
    document.querySelectorAll(".product").forEach(product => {
        let id = product.dataset.id;
        let cartItem = cart.find(item => item.id === id);

        if (cartItem && cartItem.count > 0) {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "none";
            if (qtyContainer) qtyContainer.style.display = "flex";
            
            updateQuantityUI(product, id);
        } else {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "inline-block";
            if (qtyContainer) qtyContainer.style.display = "none";
        }
    });
}

// ===================
// EVENT LISTENERS
// ===================

// Когда DOM загружен
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initTranslationSystem();
        initializeCartSystem();
    });
} else {
    initTranslationSystem();
    initializeCartSystem();
}

// Прослушиватель событий для кнопки заказа
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
        moveCartToOrders();
    }
});

// Прослушиватель событий, который запускается при изменении языка
window.addEventListener('languageChanged', translateCartItems);

//Проверка видимости страницы с помощью API видимости страницы
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        setTimeout(translateCartItems, 100);
    }
});

// Проверка даже если хеш изменился
window.addEventListener('hashchange', function() {
    setTimeout(translateCartItems, 100);
});

// Событие Popstate (браузер назад/вперед tugmalari)
window.addEventListener('popstate', function() {
    setTimeout(translateCartItems, 100);
});

// Прослушивайте событие localStorage для обновления корзины при изменении заказов.
window.addEventListener('storage', function(e) {
    if (e.key === 'orders') {
        updateCartBadge();
        updateCartPopup();
    }
});

// ===================
// UTILITY FUNCTIONS
// ===================

// Функция просмотра заказов (для тестирования в консоли)


// Функция клиринга заказов (для тестирования)
function clearOrders() {
    localStorage.removeItem("orders");
    orders = [];
    updateCartBadge();
    updateCartPopup();
    
    // Также вызовите функцию в addCART.js (если доступно)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Глобальная функция для ручного перевода
window.forceTranslateCart = function() {
    translateCartItems();
};

// Глобальная функция - для вызова из других файлов
window.updateCartFromOrders = function() {
    updateCartBadge();
    updateCartPopup();
};

}
























(function () {
  document.addEventListener("DOMContentLoaded", () => {

    const getFavs = () => {
      try {
        const f = JSON.parse(localStorage.getItem("favorites") || "[]");
        return Array.isArray(f) ? f : [];
      } catch (_) { return []; }
    };

    const setFavs = (favs) => localStorage.setItem("favorites", JSON.stringify(favs));

    const isFav = (favs, id) => favs.some(x => x.id === id);

    function parseNum(v) {
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : null;
    }

    function updateFavoriteUI(product, on) {
      const checkbox = product.querySelector('input[type="checkbox"]');
      const emptyHeart = product.querySelector('[data-testid="FavoriteBorderIcon"]')?.closest('span');
      const filledHeartWrapper = product.querySelector('[data-testid="FavoriteIcon"]')?.closest('span.MuiTypography-root');

      if (checkbox) checkbox.checked = !!on;
      if (emptyHeart) emptyHeart.style.setProperty("display", on ? "none" : "inline-flex", "important");
      if (filledHeartWrapper) filledHeartWrapper.style.setProperty("display", on ? "inline-flex" : "none", "important");
    }

    // --- initial UI sync ---
    (function initialSync() {
      const favs = getFavs();
      document.querySelectorAll('.product').forEach(product => {
        const id = product?.dataset?.id;
        if (!id) return;
        updateFavoriteUI(product, isFav(favs, id));
      });
    })();

    // --- yurak toggle ---
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.MuiButtonBase-root.MuiCheckbox-root');
      if (!btn) return;

      const product = btn.closest('.product');
      if (!product) return;

      const id = product.dataset.id;
      let favs = getFavs();

      if (!isFav(favs, id)) {
        favs.push({
          id,
          img: product.dataset.img,
          title: product.dataset.title,
          description: product.dataset.description,
          type: product.dataset.type || '',
          img_1: product.dataset.img_1 || '',
          Ingredients: product.dataset.ingredients || '',
          price: parseNum(product.dataset.price),
          aksiyaPrice: parseNum(product.dataset.aksiyaPrice),
          count: 1,
          total: parseNum(product.dataset.aksiyaPrice) ?? parseNum(product.dataset.price)
        });
        setFavs(favs);
        updateFavoriteUI(product, true);
      } else {
        favs = favs.filter(x => x.id !== id);
        setFavs(favs);
        updateFavoriteUI(product, false);

        const container = document.getElementById('favorites-container');
        if (container && container.contains(product)) {
          const outer = product.closest('.jss32') || product;
          outer.remove();
        }

        // Если вы находитесь на странице избранного и избранное пусто, обновите страницу.
        if (window.location.pathname === './favoritess/' && favs.length === 0) {
          location.reload();
        }
      }
    });

    // --- синхронизация для динамически добавляемых продуктов с наблюдателем мутаций ---
    const observer = new MutationObserver(() => {
      const favs = getFavs();
      document.querySelectorAll('.product').forEach(product => {
        const id = product?.dataset?.id;
        if (!id) return;
        updateFavoriteUI(product, isFav(favs, id));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const oldUrl = 'https://dominospizza.ge/static/media/empty_cart.ce51a99a8179668c0c85.png';
  const newUrl = '../assets/image/empty_cart.ce51a99a8179668c0c85.png';

  // Проверяем все элементы <img> на странице
  document.querySelectorAll('img').forEach(img => {
    if (img.src === oldUrl) {
      img.src = newUrl;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".view-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "../cart/";
    });
  });
});
document.addEventListener("click", (e) => {
  const badge = e.target.closest(".MuiBadge-root.css-1rzb3uu");
  if (badge) {
    window.location.href = "../cart/";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const capa = document.getElementById("Capa_1");
  if (capa) {
    capa.addEventListener("click", () => {
      window.location.href = "../tracking/";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    if (img.src === "https://dominospizza.ge/static/media/shop-white.f9932044a442888258cf4888ce686068.svg") {
      img.src = "../assets/image/bike-white.c750e44adb7ca082feca9c0ac6e6bd23.svg";
    }
  });
});

document.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (img) {
    const style = window.getComputedStyle(img);
    if (
      style.height === "38px" &&
      style.width === "38px" &&
      style.objectFit === "contain"
    ) {
      window.location.href = "../stores/";
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('div[style*="position: fixed"][style*="bottom: 70px"][style*="right: 4px"]');
    divs.forEach(div => div.style.display = 'none');
});

document.addEventListener("DOMContentLoaded", () => {
  const capa = document.getElementById("Layer_1");
  if (capa) {
    capa.addEventListener("click", () => {
      window.location.href = "../";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cart-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      window.location.href = "../cart/";
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const geDivs = document.querySelectorAll('.lang_Ge');

    geDivs.forEach(div => {
        const img = div.querySelector('img');
        if (img && img.getAttribute('src') === '../assets/image/usa-flag-round-circle-design-shape-united-state-america-flag_1091279-1016-removebg-preview.png') {
            div.style.display = 'none';
        }
    });
});


// URL o'zgarishini kuzatish va localStorage tozalash
(function () {
    let currentPath = window.location.pathname;
    
    // Tekshiriladigan path'lar ro'yxati
    const targetPaths = [
        '/details/',
        '/geo/details/',
        '/details-pizza/',
        '/geo/details-pizza/'
    ];
    
    // Ushbu pathlardan birortasi mos kelsa, true qaytaradi
    function isTargetPath(path) {
        return targetPaths.some(target => path.startsWith(target));
    }
    
    // localStorage ni tozalash funksiyasi
    function clearStorage() {
        localStorage.removeItem('for_id');
        localStorage.removeItem('edit');
        console.log('localStorage dan for_id va edit olib tashlandi');
    }
    
    // Sahifa yuklanganda yoki url o'zgarganda chaqiriladi
    function checkAndCleanup() {
        const newPath = window.location.pathname;
        
        // Agar oldingi path targetlardan biri bo'lsa, ammo yangi path targetlardan biri bo'lmasa
        if (isTargetPath(currentPath) && !isTargetPath(newPath)) {
            clearStorage();
        }
        
        currentPath = newPath;
    }
    
    // Refresh holatini aniqlash
    function checkForRefresh() {
        const path = window.location.pathname;
        if (isTargetPath(path)) {
            const navEntry = performance.getEntriesByType('navigation')[0];
            if (navEntry && navEntry.type === 'reload') {
                clearStorage();
            }
        }
    }
    
    // History API'ni kuzatish
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function () {
        originalPushState.apply(history, arguments);
        setTimeout(checkAndCleanup, 0);
    };
    
    history.replaceState = function () {
        originalReplaceState.apply(history, arguments);
        setTimeout(checkAndCleanup, 0);
    };
    
    // Orqaga/oldinga tugmalar uchun
    window.addEventListener('popstate', function () {
        setTimeout(checkAndCleanup, 0);
    });
    
    // Sahifa yuklanganda tekshirish (refresh ham bunda)
    window.addEventListener('load', function() {
        checkForRefresh();
        checkAndCleanup();
    });
    
    // Hash o'zgarishi uchun ham
    window.addEventListener('hashchange', checkAndCleanup);
})();