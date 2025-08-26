// -----------------------------
// LOADER FUNCTIONS
// -----------------------------
function showLoader() {
    const loaderHTML = `
        <div role="presentation" class="MuiDialog-root MuiModal-root css-126xj0f" id="app-loader" style="z-index: 99999; display: flex;">
            <div tabindex="0" data-testid="sentinelStart"></div>
            <div class="MuiDialog-container MuiDialog-scrollPaper css-ekeie0" role="presentation" tabindex="-1"
                style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1); display: flex;">
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm css-yv7evq"
                    role="dialog" aria-labelledby=":r4:"
                    style="background: transparent; box-shadow: none; overflow: hidden;">
                    <div class="MuiDialogContent-root css-1ty026z" style="overflow: hidden; z-index: 99999;">
                        <section>
                            <div class="ctn-preloader">
                                <div><img src="https://dominospizza.ge/static/media/loader.2122b9244c2f5b65e627.gif" alt="Loader..." width="100">
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div tabindex="0" data-testid="sentinelEnd"></div>
        </div>
    `;
    
    // Добавить или показать загрузчик в тело
    let existingLoader = document.getElementById('app-loader');
    if (!existingLoader) {
        document.body.insertAdjacentHTML('beforeend', loaderHTML);
    } else {
        // Просто измените отображение, если оно существует.
        existingLoader.style.display = 'flex';
        const container = existingLoader.querySelector('.css-ekeie0');
        if (container) container.style.display = 'flex';
    }
    
    // Блокировать прокрутку тела
    document.body.style.overflow = 'hidden';
}

function hideLoader() {
    const loader = document.getElementById('app-loader');
    if (loader) {
        // Отображать нет
        loader.style.display = 'none';
        const container = loader.querySelector('.css-ekeie0');
        if (container) container.style.display = 'none';
        
        // Восстановить прокрутку тела
        document.body.style.overflow = '';
    }
}
// -----------------------------
// PATH-BASED LANGUAGE DETECTOR
// -----------------------------
function getCurrentLanguage() {
    // Определить язык по URL
    const path = window.location.pathname || '';

    // Геоязык - начинается с /geo/ или содержит /geo/
    if (path.includes('/geo/') || path.startsWith('/geo')) return 'geo';

    // Eng til - root  index.html
    if (path === '/' || path === '' || path === '/index.html') return 'en';

    // Светлая плитка по умолчанию
    return 'en';
}
window.getCurrentLanguage = getCurrentLanguage; // for testing in console

// -----------------------------

// Microsoft Translator API-based translate function
// Uses: https://api.cognitive.microsofttranslator.com/translate
// -----------------------------
const translationCache = new Map();
const BATCH_SIZE = 5;
const MAX_CONCURRENT_REQUESTS = 3;
const DELAY_BETWEEN_BATCHES = 100;

// Конфигурация API Microsoft Translator
const MS_TRANSLATOR_CONFIG = {
    subscriptionKey: '3qpBzaJoL2PcCnlD2ZZtiBKKjANUXnMJUBJNpSlzxVLsctfaCby9JQQJ99BHAC5RqLJXJ3w3AAAbACOGzWnm', // Bu yerga o'z kalitingizni qo'ying
    endpoint: 'https://api.cognitive.microsofttranslator.com',
    region: 'westeurope' // или ваш регион
};

async function translateTextLibre(text, targetLang) {
    if (!text || !String(text).trim()) return text;

    // Check cache first
    const cacheKey = `${text}_${targetLang}`;
    if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey);
    }

    // Коды языков API Microsoft Translator
    const fromLang = (targetLang === 'geo') ? 'en' : 'ka';
    const toLang = (targetLang === 'geo') ? 'ka' : 'en';
    
    const url = `${MS_TRANSLATOR_CONFIG.endpoint}/translate?api-version=3.0&from=${fromLang}&to=${toLang}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': MS_TRANSLATOR_CONFIG.subscriptionKey,
                'Ocp-Apim-Subscription-Region': MS_TRANSLATOR_CONFIG.region,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{
                'text': text
            }])
        });

        if (!response.ok) {
            console.error('Microsoft Translator API error:', response.status, response.statusText);
            return text;
        }

        const result = await response.json();
        
        if (!result || !Array.isArray(result) || result.length === 0) {
            return text;
        }

        const translations = result[0].translations;
        if (!translations || !Array.isArray(translations) || translations.length === 0) {
            return text;
        }

        let translated = translations[0].text;
        if (!translated) return text;

        // Удаление HTML-сущностей
        translated = translated.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

        // Если ответ содержит русские буквы — отмените перевод
        if (/[а-яё]/i.test(translated)) {
            return text; 
        }

        // Cache the result
        translationCache.set(cacheKey, translated);
        return translated;

    } catch (err) {
        console.error('Microsoft Translator API request failed:', err);
        return text;
    }
}

// 3. ТРЕТЬЕ: Добавить функцию индикатора прогресса
function updateTranslationProgress(current, total) {
    const percentage = Math.round((current / total) * 100);
    
    // Update loader text if element exists
    const loaderElement = document.querySelector('.ctn-preloader div');
    if (loaderElement) {
        
    }
}

// -----------------------------
// ОБНОВЛЕННАЯ ВЕРСИЯ: Перевод с оригинального продукта
// -----------------------------
// -----------------------------
// ОБНОВЛЕННАЯ ВЕРСИЯ: ПОДДЕРЖИВАЕТ ОБА ФОРМАТА ЗАКАЗА


// 4. ЧЕТВЕРТОЕ: Полностью заменить функцию translateStorageUsingLibre
async function translateStorageUsingLibre() {
    try {
        const targetLang = getCurrentLanguage();

        // прочитать текущее хранилище
        const orders = (typeof getOrdersFromLocalStorage === 'function') ? getOrdersFromLocalStorage() : JSON.parse(localStorage.getItem('orders') || '[]');
        const cart = (typeof getCartFromLocalStorage === 'function') ? getCartFromLocalStorage() : JSON.parse(localStorage.getItem('cart') || '[]');

        //собрать тексты (дедуплицировать)
        const tasks = []; 
        const uniqTexts = new Set(); // Используйте Set для лучшей производительности

        function pushText(type, idx, field, text, pizzaIdx) {
            if (!text || !String(text).trim()) return;
            const t = String(text);
            uniqTexts.add(t);
            tasks.push({ type, idx, field, text: t, pizzaIdx });
        }

        // Собрать все тексты (та же логика, что и раньше)
        orders.forEach((o, i) => {
            if (o && o.originalProduct) {
                if (o.originalProduct.title) pushText('order', i, 'title', o.originalProduct.title);
                if (o.originalProduct.description) pushText('order', i, 'description', o.originalProduct.description);
                if (o.title) pushText('order-self', i, 'title', o.title);
                if (o.description) pushText('order-self', i, 'description', o.description);
            } else {
                if (o && o.title) pushText('order', i, 'title', o.title);
                if (o && o.description) pushText('order', i, 'description', o.description);
            }

            if (Array.isArray(o.pizzas)) {
                o.pizzas.forEach((p, pi) => {
                    if (p && p.title) {
                        let originalPizzaTitle = p.title;
                        if (o.originalProduct && Array.isArray(o.originalProduct.pizzas)) {
                            const originalPizza = o.originalProduct.pizzas.find(op => 
                                op.id === p.id || op.title === p.title
                            );
                            if (originalPizza && originalPizza.title) {
                                originalPizzaTitle = originalPizza.title;
                            }
                        }
                        pushText('order-pizza', i, 'title', originalPizzaTitle, pi);
                    }

                    if (p && p.description) {
                        let originalPizzaDescription = p.description;
                        if (o.originalProduct && Array.isArray(o.originalProduct.pizzas)) {
                            const originalPizza = o.originalProduct.pizzas.find(op => 
                                op.id === p.id || op.title === p.title
                            );
                            if (originalPizza && originalPizza.description) {
                                originalPizzaDescription = originalPizza.description;
                            }
                        }
                        pushText('order-pizza', i, 'description', originalPizzaDescription, pi);
                    }

                    if (Array.isArray(p.ingredients)) {
                        p.ingredients.forEach((ing, ii) => {
                            if (ing && ing.name) {
                                let originalIngredientName = ing.name;
                                
                                if (o.originalProduct && Array.isArray(o.originalProduct.pizzas)) {
                                    const originalPizza = o.originalProduct.pizzas.find(op => 
                                        op.id === p.id || op.title === p.title
                                    );
                                    
                                    if (originalPizza && Array.isArray(originalPizza.ingredients)) {
                                        const originalIngredient = originalPizza.ingredients.find(oi => 
                                            oi.id === ing.id || 
                                            oi.name === ing.name ||
                                            (oi.name && ing.name && oi.name.toLowerCase() === ing.name.toLowerCase())
                                        );
                                        
                                        if (originalIngredient && originalIngredient.name) {
                                            originalIngredientName = originalIngredient.name;
                                        }
                                    }
                                }
                                
                                pushText('order-ingredient', i, 'name', originalIngredientName, pi + ':' + ii);
                            }
                        });
                    }
                });
            }
        });

        cart.forEach((c, i) => {
            if (c && c.originalProduct) {
                if (c.originalProduct.title) pushText('cart', i, 'title', c.originalProduct.title);
                if (c.originalProduct.description) pushText('cart', i, 'description', c.originalProduct.description);
            } else {
                if (c && c.title) pushText('cart', i, 'title', c.title);
                if (c && c.description) pushText('cart', i, 'description', c.description);
            }
        });

        if (uniqTexts.size === 0) {
            return;
        }

        // Преобразовать набор в массив для пакетной обработки
        const uniqTextsArray = Array.from(uniqTexts);
        
        // Показать первоначальный прогресс
        updateTranslationProgress(0, uniqTextsArray.length);

        // Переводите оптимизированными пакетами
        const translated = [];
        const batches = [];
        
        for (let i = 0; i < uniqTextsArray.length; i += BATCH_SIZE) {
            batches.push(uniqTextsArray.slice(i, i + BATCH_SIZE));
        }

        for (let i = 0; i < batches.length; i += MAX_CONCURRENT_REQUESTS) {
            const currentBatches = batches.slice(i, i + MAX_CONCURRENT_REQUESTS);
            
            const batchPromises = currentBatches.map(batch => 
                Promise.all(batch.map(text => translateTextLibre(text, targetLang)))
            );
            
            const batchResults = await Promise.all(batchPromises);
            translated.push(...batchResults.flat());
            
            // Обновить прогресс
            const currentProgress = Math.min(translated.length, uniqTextsArray.length);
            updateTranslationProgress(currentProgress, uniqTextsArray.length);
            
            // Небольшая задержка между группами партий
            if (i + MAX_CONCURRENT_REQUESTS < batches.length) {
                await new Promise(r => setTimeout(r, DELAY_BETWEEN_BATCHES));
            }
        }

        // Создать карту переводов для быстрого поиска
        const translationMap = new Map();
        uniqTextsArray.forEach((text, index) => {
            translationMap.set(text, translated[index] || text);
        });

        // Применить переводы обратно с помощью карт
        tasks.forEach(task => {
            const tr = translationMap.get(task.text) || task.text;
            
            if (task.type === 'order') {
                if (orders[task.idx] && orders[task.idx].originalProduct) {
                    orders[task.idx].originalProduct[task.field] = tr;
                } else if (orders[task.idx]) {
                    orders[task.idx][task.field] = tr;
                }
            } else if (task.type === 'order-self') {
                if (orders[task.idx]) {
                    orders[task.idx][task.field] = tr;
                }
            } else if (task.type === 'order-pizza') {
                if (orders[task.idx] && Array.isArray(orders[task.idx].pizzas) && orders[task.idx].pizzas[task.pizzaIdx]) {
                    orders[task.idx].pizzas[task.pizzaIdx][task.field] = tr;
                }
            } else if (task.type === 'cart') {
                if (cart[task.idx]) cart[task.idx][task.field] = tr;
            } else if (task.type === 'order-ingredient') {
                if (orders[task.idx] && Array.isArray(orders[task.idx].pizzas)) {
                    const [pi, ii] = String(task.pizzaIdx).split(':').map(Number);
                    if (orders[task.idx].pizzas[pi] && Array.isArray(orders[task.idx].pizzas[pi].ingredients)) {
                        if (orders[task.idx].pizzas[pi].ingredients[ii]) {
                            orders[task.idx].pizzas[pi].ingredients[ii].name = tr;
                        }
                    }
                }
            }
        });

        // сохранить обратно
        try {
            localStorage.setItem('orders', JSON.stringify(orders));
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (err) {
            console.error('Error saving to localStorage:', err);
        }

    } catch (err) {
        console.error('Translation error:', err);
    }
}

// разоблачить быстрого бегуна
window.translateStorageNow = function() {
    showLoader();
    return translateStorageUsingLibre().finally(() => {
        hideLoader();
    });
};
// -----------------------------
// ОРИГИНАЛЬНЫЙ КОД ПОЛЬЗОВАТЕЛЯ (сохранен нетронутым, но дедуплицированные помощники только один раз)
// -----------------------------

// Функция получения заказов из localStorage
function getOrdersFromLocalStorage() {
    try {
        const orders = localStorage.getItem('orders');
        return orders ? JSON.parse(orders) : [];
    } catch (error) {
        return [];
    }
}

// Функция получения корзины из localStorage
function getCartFromLocalStorage() {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        return [];
    }
}

// Функция для отображения ингредиентов в HTML
function renderIngredients(ingredients) {
    if (!ingredients || !Array.isArray(ingredients)) return '';
    
    return ingredients.map(ingredient => `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; width: 100%">
                <div style="display: flex; align-items: center;">
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-zwpvpp" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
                    </svg>
                    <span class="fs-14 text-gray">${ingredient.name || ''}</span>
                </div>
                <p class="fs-14 text-gray">${ingredient.price ? ingredient.price.toFixed(2) + '₾' : ''}</p>
            </div>
        </div>
    `).join('');
}

// Функция для рендеринга пиццы в HTML
function renderPizzas(pizzas) {
    if (!pizzas || !Array.isArray(pizzas)) return '';
    
    return pizzas.map((pizza, index) => `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; width: 100%; margin-top: 15px;">
                <div style="display: flex; align-items: center;">
                    <span class="fs-16 text-black" style="text-decoration: none;">product: ${index + 1} : ${pizza.title || ''}</span>
                </div>
                <p class="fs-16 text-black">${pizza.price ? pizza.price.toFixed(2) + '₾' : ''}</p>
            </div>
            <div>
                ${renderIngredients(pizza.ingredients)}
            </div>
        </div>
    `).join('');
}

// Функция расчета первоначальной цены (для демонстрационных целей)
function calculateOriginalPrice(order) {
    if (order.originalPrice) return order.originalPrice;
    
    // Рассчитать на основе aksiyaPrice * 2 (приблизительная оценка)
    const estimated = (parseFloat(order.totalPrice.replace('₾', '')) * 1.5).toFixed(2);
    return estimated + '₾';
}

// Функция для отображения HTML-элементов корзины
function renderCartHTML(cartItems) {
    if (!cartItems || cartItems.length === 0) return '';

    return cartItems.map(item => `
        <div class="MuiBox-root css-1hnm6b6">
            <div class="MuiBox-root css-0">
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-fgqxdv">
                    <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3.5 MuiGrid-grid-md-2.2 MuiGrid-grid-lg-1.5 css-2g1k7u">
                            <div class="for_cart_img">
                                <img src="${item.img || item.image || 'https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Bacon_&amp;_Jalapeno.webp'}" alt="${item.title || item.name || ''}" style="width: 156px; height: 68px; object-fit: contain;">
                            </div>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-9.8 MuiGrid-grid-lg-10.5 css-1br1bhk">
                            <div>
                                <div style="margin-bottom: 12px;">
                                    <p class="text-black IBM-Regular fs-20 capitalize tovar_title" style="font-weight: bold;">${item.title || item.name || ''}</p>
                                    <span class=" fs-14 text-gray capitalize">${item.description || ''}</span>
                                </div>
                                <div></div>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px;">
                                <h3 class="text-grey  fs-20"><s>${(item.aksiyaPrice*item.count).toFixed(2)}₾</s></h3>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0px;">
                                <h3 class="text-red  fs-24" style="text-align: end;">${(item.price*item.count).toFixed(2)}₾</h3>
                                <div>
                                    <div>
                                        <div class="Kanit-Regular" style="display: inline-flex;">
                                            <div style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeCartQuantity('${item.id}', -1)">-</div>
                                            <div class="Kanit-Regular" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 24px; box-shadow: none; display: inline-flex; justify-content: center; align-items: center; cursor: auto; user-select: none; color: rgb(0, 0, 0); margin-left: 4px; margin-right: 4px;">${item.count || 1}</div>
                                            <div style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeCartQuantity('${item.id}', 1)">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 30px; right: 35px; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div onclick="deleteCartItem('${item.id}')">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss10 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteForeverIcon">
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Основная функция для отображения HTML-кода заказов
function renderOrdersHTML(orders) {
    if (!orders || orders.length === 0) return '';

    return orders.map(order => {
        // Получение данных из ORIGINALPRODUCT
        const productData = order.originalProduct || order;
        
        return `
        <div class="MuiBox-root css-1hnm6b6">
            <div class="MuiBox-root css-0">
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-fgqxdv">
                    <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3.5 MuiGrid-grid-md-2.2 MuiGrid-grid-lg-1.5 css-2g1k7u">
                            <div class="for_cart_img">
                                <img src="${productData.img || order.img || ''}" alt="${productData.title || order.title || ''}" style="width: 156px; height: 68px; object-fit: contain;">
                            </div>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-9.8 MuiGrid-grid-lg-10.5 css-1br1bhk">
                            <div>
                                <div style="margin-bottom: 12px;">
                                    <p class="text-black IBM-Regular fs-20 capitalize tovar_title" style="font-weight: bold;">${productData.title || order.title || ''}</p>
                                    <span class=" fs-14 text-gray capitalize">${productData.description || order.description || ''}</span>
                                </div>
                                <div>
                                    <div>
                                        <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; width: 100%">
                                            <div style="display: flex; align-items: center;">
                                                <span class="fs-14" style="color: black; font-weight: 600; font-style: italic;">Promotion: ${productData.title || order.title || ''}</span>
                                            </div>
                                            <p class="fs-14 title_prices" style="color: black; font-weight: 600; font-style: italic;">starting: ${productData.price ? productData.price.toFixed(2) + '₾' : (order.price ? order.price.toFixed(2) + '₾' : '')}</p>
                                        </div>
                                        <div>
                                            ${renderPizzas(order.pizzas)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px;">
                                <h3 class="text-grey fs-20"><s>
${(() => {
    // Получите базовые цены от ORIGINALPRODUCT
    let basePrice = parseFloat(productData.aksiyaPrice || order.aksiyaPrice) || 0;
    let additionalPrice = 0;
    
    // Добавьте цену пиццы
    if (order.pizzas && order.pizzas.length > 0) {
        order.pizzas.forEach(pizza => {
            additionalPrice += parseFloat(pizza.price) || 0;
            
            // Добавьте стоимость ингредиентов
            if (pizza.ingredients && pizza.ingredients.length > 0) {
                pizza.ingredients.forEach(ingredient => {
                    additionalPrice += parseFloat(ingredient.price) || 0;
                });
            }
        });
    }
    
    // Если есть акция 1+1
    if ((productData.description || order.description) && (productData.description || order.description).includes("get second for free")) {
        return ((basePrice * order.count) + additionalPrice).toFixed(2);
    } else {
        return ((basePrice + additionalPrice) * order.count).toFixed(2);
    }
})()}₾
</s></h3>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0px;">
                                <h3 class="text-red fs-24" style="text-align: end;">
${(() => {
    // Получите базовые цены от ORIGINALPRODUCT
    let basePrice = parseFloat(productData.price || order.price) || 0;
    let additionalPrice = 0;
    
    // Добавьте цену пиццы
    if (order.pizzas && order.pizzas.length > 0) {
        order.pizzas.forEach(pizza => {
            additionalPrice += parseFloat(pizza.price) || 0;
            
            // Добавьте стоимость ингредиентов
            if (pizza.ingredients && pizza.ingredients.length > 0) {
                pizza.ingredients.forEach(ingredient => {
                    additionalPrice += parseFloat(ingredient.price) || 0;
                });
            }
        });
    }
    
    // Если есть акция 1+1
    if ((productData.description || order.description) && (productData.description || order.description).includes("get second for free")) {
        return ((basePrice * order.count) + additionalPrice).toFixed(2);
    } else {
        return ((basePrice + additionalPrice) * order.count).toFixed(2);
    }
})()}₾
</h3>
                                <div>
                                    <div>
                                        <div class="Kanit-Regular quantity-controls" style='display:inline-flex'>
                                            <div class="quantity-btn" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeQuantity(${order.id}, -1)">-</div>
                                            <div class="quantity-display" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 24px; box-shadow: none; display: inline-flex; justify-content: center; align-items: center; cursor: auto; user-select: none; color: rgb(0, 0, 0); margin-left: 4px; margin-right: 4px;">${order.count || 1}</div>
                                            <div class="quantity-btn" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeQuantity(${order.id}, 1)">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="action-buttons" style="position: absolute; top: 30px; right: 35px; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div>
                                    <a onclick="editOrder(${order.id})">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss9 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon">
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div onclick="deleteOrder(${order.id})">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss10 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteForeverIcon">
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');
}

// Комбинированная функция для отображения всех элементов (заказы + корзина)
function renderAllItemsHTML(orders, cartItems) {
    // Check if both are empty
    if ((!orders || orders.length === 0) && (!cartItems || cartItems.length === 0)) {
        // Если ссылки нет - показывать пустые элементы
        const noCartEmpty = document.getElementById('no-cart-empty');
        const cartContainerEmpty = document.getElementById('cart-container-empty');
        
        if (noCartEmpty) {
            noCartEmpty.style.display = 'inherit';
        }
        if (cartContainerEmpty) {
            cartContainerEmpty.style.display = 'none';
        }
        
        return ''; // Вернуть пустую строку
    }

    // Если есть ссылка - показывать заполненные элементы
    const noCartEmpty = document.getElementById('no-cart-empty');
    const cartContainerEmpty = document.getElementById('cart-container-empty');
    
    if (noCartEmpty) {
        noCartEmpty.style.display = 'none';
    }
    if (cartContainerEmpty) {
        cartContainerEmpty.style.display = 'block';
    }

    let html = '';
    
    // Сначала добавьте заказы
    if (orders && orders.length > 0) {
        html += renderOrdersHTML(orders);
    }
    
    // Добавить товары в корзину
    if (cartItems && cartItems.length > 0) {
        html += renderCartHTML(cartItems);
    }
    
    return html;
}

// Функция изменения количества заказа и обновления общей цены
function changeQuantity(orderId, change) {
    showLoader(); // Показать загрузчик
    
    try {
        const orders = getOrdersFromLocalStorage();
        const orderIndex = orders.findIndex(order => order.id === orderId);
        
        if (orderIndex !== -1) {
            const order = orders[orderIndex];
            const newQuantity = (order.count || 1) + change;
            
            if (newQuantity > 0) {
                // Рассчитать базовую цену из исходной totalPrice
                const basePriceValue = parseFloat(order.totalPrice.replace('₾', ''));
                const baseQuantity = order.count || 1;
                const unitPrice = basePriceValue / baseQuantity;
                
                // Обновить количество и рассчитать новую общую цену
                order.count = newQuantity;
                const newTotalPrice = (unitPrice * newQuantity).toFixed(2);
                order.totalPrice = newTotalPrice + '₾';
                
                localStorage.setItem('orders', JSON.stringify(orders));
                
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            }
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // сложить итоги
        let subTotal = cart.reduce((sum, item) => sum + (item.total || 0), 0);

        if (document.querySelector(".subTotal")) {
            document.querySelector(".subTotal").innerHTML = subTotal.toFixed(2)
        }
        
    } catch (error) {
        hideLoader();
    }
}

// Функция изменения количества товаров в корзине
function changeCartQuantity(itemId, change) {
    showLoader(); // Показать загрузчик
    
    try {
        const cartItems = getCartFromLocalStorage();
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
            const item = cartItems[itemIndex];
            const newQuantity = (item.count || 1) + change;
            
            if (newQuantity > 0) {
                // Рассчитать цену за единицу исходя из текущей суммы или цены
                let unitPrice = 0;
                
                if (item.unitPrice) {
                    // Если unitPrice уже существует, используйте его.
                    unitPrice = item.unitPrice;
                } else if (item.price && item.count) {
                    // Рассчитать цену за единицу исходя из общей суммы и количества
                    unitPrice = parseFloat(item.price) / (item.count || 1);
                    item.unitPrice = unitPrice; // Сохраните для будущего использования
                } else if (item.price) {
                    // Если существует только общее количество, предположим, что количество равно 1
                    unitPrice = parseFloat(item.price);
                    item.unitPrice = unitPrice;
                } else if (item.price) {
                    // Если существует только цена, предположим, что количество равно 1
                    unitPrice = parseFloat(item.price);
                    item.unitPrice = unitPrice;
                }
                
                // Обновить количество и рассчитать новую сумму
                item.count = newQuantity;
                const newTotal = (unitPrice * newQuantity).toFixed(2);
                item.total = parseFloat(newTotal);
                
                // Также обновите цену, если она существует (для обратной совместимости)
                if (item.price !== undefined) {
                    item.price = parseFloat(newTotal);
                }
                
                localStorage.setItem('cart', JSON.stringify(cartItems));
                
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            } else if (newQuantity <= 0) {
                // Удалить товар, если количество станет 0 или меньше
                deleteCartItem(itemId);
            }
        }
    } catch (error) {
        hideLoader();
    }
}

// Function to delete order
function deleteOrder(orderId) {
    showLoader(); // Показать загрузчик
    
    try {
        const orders = getOrdersFromLocalStorage();
        const filteredOrders = orders.filter(order => order.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(filteredOrders));
        
        setTimeout(() => {
            loadAndRenderAllItems(); // Повторный рендеринг
            hideLoader();
        }, 300);
    } catch (error) {
        hideLoader();
    }
    window.location.reload()
}

// Функция удаления товара из корзины
function deleteCartItem(itemId) {
    showLoader(); // Показать загрузчик
    
    try {
        const cartItems = getCartFromLocalStorage();
        const filteredCart = cartItems.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(filteredCart));
        
        setTimeout(() => {
            window.location.reload();
        }, 300);
    } catch (error) {
        hideLoader();
    }
            window.location.reload();

}

// Основная функция загрузки и отображения всех элементов (заказы + корзина)
function loadAndRenderAllItems() {
    try {
        const orders = getOrdersFromLocalStorage();
        const cartItems = getCartFromLocalStorage();
        const container = document.getElementById('ordersContainer');
        if (container) container.innerHTML = renderAllItemsHTML(orders, cartItems);
    } catch (error) {
    }
}

// Оставьте старую функцию для обратной совместимости.
function loadAndRenderOrders() {
    loadAndRenderAllItems();
}

function removeCart(){
    const el = document.querySelector(".css-ekeie0");
    if (el) el.style="display:flex"
    document.querySelector("body").style="overflow: hidden"
}

function calcels(){
    const el = document.querySelector(".css-ekeie0");
    if (el) el.style="display:none"
    document.querySelector("body").style="overflow: scroll"
}

function removeAll() {
    showLoader(); // Показать загрузчик
    
    try {
        localStorage.removeItem('cart')
        localStorage.removeItem('order')
        localStorage.removeItem('orders')
        localStorage.removeItem('selectedProduct')
        
        setTimeout(() => {
            window.location.reload();
        }, 500);
    } catch (error) {
        hideLoader();
    }
}

function editOrder(orderId) {
    showLoader(); // Показать загрузчик
   
    try {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.find(o => o.id === orderId);
       
        if (order) {
            // Давайте включим режим редактирования.
            localStorage.setItem('edit', 'true');
            localStorage.setItem('for_id', orderId);
           
            // Подсчет ингредиентов для пиццы
            if (order.pizzas && order.pizzas.length > 0) {
                localStorage.setItem('ingredient', order.pizzas.length.toString());
            }
           
            // ПЕРЕНЕСТИ ОБЪЕКТ ORIGINALPRODUCT НЕПОСРЕДСТВЕННО В SELECTEDPRODUCT
            if (order.originalProduct) {
                // Передача исходного объекта Product напрямую
                localStorage.setItem('selectedProduct', JSON.stringify(order.originalProduct));
            } else {
                // Резервный вариант: сохранить сам заказ, если originalProduct не существует.
                localStorage.setItem('selectedProduct', JSON.stringify(order));
            }
           
            // Мы храним дополнительную информацию о пицце
            if (order.dataType === 'pizza' && order.pizzas) {
                // Сохранить название первой пиццы как размер (при необходимости)
                const pizzaSize = order.pizzas[0] ? order.pizzas[0].title : null;
                if (pizzaSize) {
                    localStorage.setItem('selectedPizzaSize', pizzaSize);
                }
            }
           
            const hasPizza = order.dataType === 'pizza' ||
                           (Array.isArray(order.items) && order.items.some(item => item.dataType === 'pizza'));
           
            setTimeout(() => {
                hideLoader(); // Скрыть загрузчик
                if (hasPizza) {
                    window.location.href = '../details-pizza/';
                } else {
                    window.location.href = '../details/';
                }
            }, 300);
        } else {
            hideLoader();
        }
    } catch (error) {
        hideLoader();
    }
}

// ДОПОЛНИТЕЛЬНО: Вспомогательная функция для правильного извлечения данных о продукте в режиме редактирования
function getProductDataForEdit(order) {
    // Если в заказе присутствует originalProduct, мы будем использовать его.
    if (order.originalProduct) {
        return {
            ...order.originalProduct,
            // Из заказа получаем редактируемые значения.
            count: order.count
        };
    }
    
    // В противном случае мы восстановим данные о товаре из заказа.
    return {
        id: order.productId || extractProductId(order.id), // Распределение идентификатора продукта
        title: order.title,
        img: order.img,
        img_1: order.img_1 || '',
        description: order.description,
        price: order.originalPrice || order.price || 0,
        aksiyaPrice: order.originalAksiyaPrice || order.aksiyaPrice || 0,
        ingredients: order.ingredients || '',
        type: order.type || '',
        dataType: order.dataType || '',
        language: order.language || 'en'
    };
}

// Вспомогательная функция для отделения идентификатора товара от идентификатора заказа
function extractProductId(orderId) {
    // Здесь вам нужно написать логику в соответствии с вашей системой идентификации.
    // Например: если формат идентификатора заказа — «productId-timestamp»
    if (typeof orderId === 'string' && orderId.includes('-')) {
        return orderId.split('-')[0];
    }
    return orderId;
}

// ФУНКЦИЯ ADDTOCART ТАКЖЕ НУЖНО ИЗМЕНИТЬ
// Сохраняйте оригинальные данные о продукте при создании заказа
function createOrderWithOriginalProduct(productData, pizzasArray, count, totalPrice) {
    const orderId = lastOrderId + 1;
    lastOrderId = orderId;
    localStorage.setItem("lastOrderId", lastOrderId.toString());
    
    const newOrder = {
        // Информация о заказе
        id: orderId,
        count: count,
        pizzas: pizzasArray,
        totalPrice: totalPrice + "₾",
        date: new Date().toISOString(),
        
        // Информация о продукте (сплющенная)
        productId: productData.id, // Основной идентификатор продукта
        title: productData.title,
        img: productData.img,
        img_1: productData.img_1 || '',
        description: productData.description,
        price: productData.price,
        aksiyaPrice: productData.aksiyaPrice,
        ingredients: productData.ingredients || '',
        type: productData.type || '',
        dataType: productData.dataType || '',
        language: productData.language || 'en',
        
        // Сохранить исходные данные о продукте (для редактирования)
        originalProduct: {
            id: productData.id,
            title: productData.title,
            img: productData.img,
            img_1: productData.img_1 || '',
            description: productData.description,
            price: productData.price,
            aksiyaPrice: productData.aksiyaPrice,
            ingredients: productData.ingredients || '',
            type: productData.type || '',
            dataType: productData.dataType || '',
            language: productData.language || 'en'
        }
    };
    
    return newOrder;
}


// существующий расчет промежуточных итогов и визуализация cart_cards
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// cart subtotal
let cartTotal = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.count || 0)), 0);

// Итого заказов (оригиналПродукт бойича)
let ordersTotal = orders.reduce((sum, item) => {
    let productData = item.originalProduct || item;
    let count = item.count || 0;

    // оригиналЦена продукта
    let basePrice = productData.price || 0;

    // цена пиццы и цена ингредиентов
    let pizzasPrice = 0;
    if (item.pizzas && Array.isArray(item.pizzas)) {
        pizzasPrice = item.pizzas.reduce((pSum, pizza) => {
            let pizzaPrice = pizza.price || 0;

            // цены на ингредиенты
            let ingPrice = 0;
            if (pizza.ingredients && Array.isArray(pizza.ingredients)) {
                ingPrice = pizza.ingredients.reduce(
                    (ingSum, ing) => ingSum + (ing.price || 0),
                    0
                );
            }
           
            return pSum + pizzaPrice + ingPrice;
        }, 0);
    }
    // общий балл (умноженный на количество)
    return sum + ((basePrice * count) + pizzasPrice);
    
    
}, 0);

// общий итог
let grandTotal = cartTotal + ordersTotal;

if (document.querySelector(".subTotal")) {
    document.querySelector(".subTotal").innerHTML = grandTotal.toFixed(2) + "₾";
}


function payment_page() {
    showLoader(); // Показать загрузчик
    
    try {
        sessionStorage.setItem("dataprice", grandTotal.toFixed(2) + "₾");
        
        setTimeout(() => {
            window.location="../oplata";
        }, 300);
    } catch (error) {
        hideLoader();
    }
}

let cartDiv = document.querySelector(".cart_cards");
if (cartDiv) {
    cartDiv.innerHTML += orders.map(item => {

        let productData = item.originalProduct || item;

        return `
             <div class="cart_card">
                                    <p class=" fs-20 capitalize"
                                        style="color: rgb(73, 73, 73);font-weight: 300; text-decoration: none;">${item.title}</p>
                                    <span class="text-red " style="margin-left: auto; font-weight: 500;">
                                    ${(() => {
    // Получите базовые цены от ORIGINALPRODUCT
    let basePrice = parseFloat(productData.price || item.price) || 0;
    let additionalPrice = 0;
    
    // Добавьте цену пиццы
    if (item.pizzas && item.pizzas.length > 0) {
        item.pizzas.forEach(pizza => {
            additionalPrice += parseFloat(pizza.price) || 0;
            
            // Добавьте стоимость ингредиентов
            if (pizza.ingredients && pizza.ingredients.length > 0) {
                pizza.ingredients.forEach(ingredient => {
                    additionalPrice += parseFloat(ingredient.price) || 0;
                });
            }
        });
    }
    
    // Если есть акция 1+1
    if ((productData.description || item.description) && (productData.description || item.description).includes("get second for free")) {
        return ((basePrice * item.count) + additionalPrice).toFixed(2);
    } else {
        return ((basePrice + additionalPrice) * item.count).toFixed(2);
    }
})()}
                                    ₾</span>
                                </div>
        `;
    }).join("");

    cartDiv.innerHTML += cart.map(item => {
        return `
             <div class="cart_card">
                                    <p class=" fs-20 capitalize"
                                        style="color: rgb(73, 73, 73);font-weight: 300; text-decoration: none;">${item.title}</p>
                                    <span class="text-red " style="margin-left: auto; font-weight: 500;">${(item.price*item.count).toFixed(2)}₾</span>
                                </div>
        `;
    }).join("");
}

// -----------------------------
// DOMContentLoaded: запустить перевод, а затем выполнить рендеринг с помощью LOADER
// -----------------------------
// 5. ПЯТОЕ: Обновите раздел DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Показать загрузчик в начале
    showLoader();
    
    // Использовать оптимизированную функцию перевода
    translateStorageUsingLibre()
        .catch(err => { 
            console.error('Translation failed:', err);
        })
        .finally(() => {
            try {
                loadAndRenderAllItems();
                
                // Скрыть загрузчик после того, как все будет сделано
                setTimeout(() => {
                    hideLoader();
                }, 300); // Задержка уменьшена с 500 мс до 300 мс
                
            } catch (e) {
                console.error('Rendering failed:', e);
                hideLoader();
            }
        });
});

// -----------------------------
// Конец объединенного кода с интеграцией загрузчика
// -----------------------------