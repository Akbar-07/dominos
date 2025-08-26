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
    
    // Loader ni body ga qo'shish yoki ko'rsatish
    let existingLoader = document.getElementById('app-loader');
    if (!existingLoader) {
        document.body.insertAdjacentHTML('beforeend', loaderHTML);
    } else {
        // Agar mavjud bo'lsa, faqat display ni o'zgartirish
        existingLoader.style.display = 'flex';
        const container = existingLoader.querySelector('.css-ekeie0');
        if (container) container.style.display = 'flex';
    }
    
    // Body scroll ni bloklash
    document.body.style.overflow = 'hidden';
}

function hideLoader() {
    const loader = document.getElementById('app-loader');
    if (loader) {
        // Display none qilish
        loader.style.display = 'none';
        const container = loader.querySelector('.css-ekeie0');
        if (container) container.style.display = 'none';
        
        // Body scroll ni tiklash
        document.body.style.overflow = '';
    }
}
// -----------------------------
// PATH-BASED LANGUAGE DETECTOR
// -----------------------------
function getCurrentLanguage() {
    // URL dan tilni aniqlash
    const path = window.location.pathname || '';

    // Geo til - /geo/ bilan boshlanadi yoki ichida /geo/ bor
    if (path.includes('/geo/') || path.startsWith('/geo')) return 'geo';

    // Eng til - root yoki index.html
    if (path === '/' || path === '' || path === '/index.html') return 'en';

    // Default eng tili
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

// Microsoft Translator API konfiguratsiyasi
const MS_TRANSLATOR_CONFIG = {
    subscriptionKey: '3qpBzaJoL2PcCnlD2ZZtiBKKjANUXnMJUBJNpSlzxVLsctfaCby9JQQJ99BHAC5RqLJXJ3w3AAAbACOGzWnm', // Bu yerga o'z kalitingizni qo'ying
    endpoint: 'https://api.cognitive.microsofttranslator.com',
    region: 'westeurope' // yoki sizning regioningiz
};

async function translateTextLibre(text, targetLang) {
    if (!text || !String(text).trim()) return text;

    // Check cache first
    const cacheKey = `${text}_${targetLang}`;
    if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey);
    }

    // Microsoft Translator API til kodlari
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

        // HTML entitylarni ochirish
        translated = translated.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

        // Agar javobda ruscha harflar bo'lsa — tarjimani bekor qilish
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

// 3. UCHINCHI: Progress indicator funksiyasini qo'shing
function updateTranslationProgress(current, total) {
    const percentage = Math.round((current / total) * 100);
    
    // Update loader text if element exists
    const loaderElement = document.querySelector('.ctn-preloader div');
    if (loaderElement) {
        
    }
}

// -----------------------------
// TRANSLATE STORAGE BY PATH (uses translateTextLibre -> Microsoft Translator)
// YANGILANGAN VERSIYA: originalProduct'dan tarjima qilish
// -----------------------------
// -----------------------------
// TRANSLATE STORAGE BY PATH (uses translateTextLibre -> Microsoft Translator)
// YANGILANGAN VERSIYA: HAR IKKALA ORDER FORMATINI QO'LLAB-QUVVATLAYDI
// 4. TO'RTINCHI: translateStorageUsingLibre funksiyasini to'liq almashtiring
async function translateStorageUsingLibre() {
    try {
        const targetLang = getCurrentLanguage();

        // read current storage
        const orders = (typeof getOrdersFromLocalStorage === 'function') ? getOrdersFromLocalStorage() : JSON.parse(localStorage.getItem('orders') || '[]');
        const cart = (typeof getCartFromLocalStorage === 'function') ? getCartFromLocalStorage() : JSON.parse(localStorage.getItem('cart') || '[]');

        // gather texts (deduped)
        const tasks = []; 
        const uniqTexts = new Set(); // Use Set for better performance

        function pushText(type, idx, field, text, pizzaIdx) {
            if (!text || !String(text).trim()) return;
            const t = String(text);
            uniqTexts.add(t);
            tasks.push({ type, idx, field, text: t, pizzaIdx });
        }

        // Collect all texts (same logic as before)
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

        // Convert Set to Array for batch processing
        const uniqTextsArray = Array.from(uniqTexts);
        
        // Show initial progress
        updateTranslationProgress(0, uniqTextsArray.length);

        // Translate in optimized batches
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
            
            // Update progress
            const currentProgress = Math.min(translated.length, uniqTextsArray.length);
            updateTranslationProgress(currentProgress, uniqTextsArray.length);
            
            // Small delay between batch groups
            if (i + MAX_CONCURRENT_REQUESTS < batches.length) {
                await new Promise(r => setTimeout(r, DELAY_BETWEEN_BATCHES));
            }
        }

        // Create translation map for quick lookup
        const translationMap = new Map();
        uniqTextsArray.forEach((text, index) => {
            translationMap.set(text, translated[index] || text);
        });

        // Apply translations back using maps
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

        // save back
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

// expose quick runner
window.translateStorageNow = function() {
    showLoader();
    return translateStorageUsingLibre().finally(() => {
        hideLoader();
    });
};
// -----------------------------
// ORIGINAL USER CODE (kept intact, but deduplicated helpers only once)
// -----------------------------

// Function to get orders from localStorage
function getOrdersFromLocalStorage() {
    try {
        const orders = localStorage.getItem('orders');
        return orders ? JSON.parse(orders) : [];
    } catch (error) {
        return [];
    }
}

// Function to get cart from localStorage
function getCartFromLocalStorage() {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        return [];
    }
}

// Function to render ingredients HTML
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

// Function to render pizzas HTML
function renderPizzas(pizzas) {
    if (!pizzas || !Array.isArray(pizzas)) return '';
    
    return pizzas.map((pizza, index) => `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; width: 100%; margin-top: 15px;">
                <div style="display: flex; align-items: center;">
                    <span class="fs-16 text-black" style="text-decoration: none;">პროდუქტი: ${index + 1} : ${pizza.title || ''}</span>
                </div>
                <p class="fs-16 text-black">${pizza.price ? pizza.price.toFixed(2) + '₾' : ''}</p>
            </div>
            <div>
                ${renderIngredients(pizza.ingredients)}
            </div>
        </div>
    `).join('');
}

// Function to calculate original price (for demo purposes)
function calculateOriginalPrice(order) {
    if (order.originalPrice) return order.originalPrice;
    
    // Calculate based on aksiyaPrice * 2 (rough estimation)
    const estimated = (parseFloat(order.totalPrice.replace('₾', '')) * 1.5).toFixed(2);
    return estimated + '₾';
}

// Function to render cart items HTML
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

// Main function to render orders HTML
// Main function to render orders HTML
function renderOrdersHTML(orders) {
    if (!orders || orders.length === 0) return '';

    return orders.map(order => {
        // ORIGINALPRODUCT dan ma'lumotlarni olish
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
                                                <span class="fs-14" style="color: black; font-weight: 600; font-style: italic;">დაწინაურება: ${productData.title || order.title || ''}</span>
                                            </div>
                                            <p class="fs-14 title_prices" style="color: black; font-weight: 600; font-style: italic;">დაწყებული: ${productData.price ? productData.price.toFixed(2) + '₾' : (order.price ? order.price.toFixed(2) + '₾' : '')}</p>
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
    // ORIGINALPRODUCT dan asosiy narxlarni olish
    let basePrice = parseFloat(productData.aksiyaPrice || order.aksiyaPrice) || 0;
    let additionalPrice = 0;
    
    // Pizzalar narxini qo'shish
    if (order.pizzas && order.pizzas.length > 0) {
        order.pizzas.forEach(pizza => {
            additionalPrice += parseFloat(pizza.price) || 0;
            
            // Ingredientlar narxini qo'shish
            if (pizza.ingredients && pizza.ingredients.length > 0) {
                pizza.ingredients.forEach(ingredient => {
                    additionalPrice += parseFloat(ingredient.price) || 0;
                });
            }
        });
    }
    
    // Agar 1+1 aksiya bo'lsa
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
    // ORIGINALPRODUCT dan asosiy narxlarni olish
    let basePrice = parseFloat(productData.price || order.price) || 0;
    let additionalPrice = 0;
    
    // Pizzalar narxini qo'shish
    if (order.pizzas && order.pizzas.length > 0) {
        order.pizzas.forEach(pizza => {
            additionalPrice += parseFloat(pizza.price) || 0;
            
            // Ingredientlar narxini qo'shish
            if (pizza.ingredients && pizza.ingredients.length > 0) {
                pizza.ingredients.forEach(ingredient => {
                    additionalPrice += parseFloat(ingredient.price) || 0;
                });
            }
        });
    }
    
    // Agar 1+1 aksiya bo'lsa
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

// Combined function to render all items (orders + cart)
function renderAllItemsHTML(orders, cartItems) {
    // Check if both are empty
    if ((!orders || orders.length === 0) && (!cartItems || cartItems.length === 0)) {
        // Malumot yo'q bo'lsa - bo'sh elementlarni ko'rsatish
        const noCartEmpty = document.getElementById('no-cart-empty');
        const cartContainerEmpty = document.getElementById('cart-container-empty');
        
        if (noCartEmpty) {
            noCartEmpty.style.display = 'inherit';
        }
        if (cartContainerEmpty) {
            cartContainerEmpty.style.display = 'none';
        }
        
        return ''; // Bo'sh string qaytarish
    }

    // Malumot bor bo'lsa - to'ldirilgan elementlarni ko'rsatish
    const noCartEmpty = document.getElementById('no-cart-empty');
    const cartContainerEmpty = document.getElementById('cart-container-empty');
    
    if (noCartEmpty) {
        noCartEmpty.style.display = 'none';
    }
    if (cartContainerEmpty) {
        cartContainerEmpty.style.display = 'block';
    }

    let html = '';
    
    // Add orders first
    if (orders && orders.length > 0) {
        html += renderOrdersHTML(orders);
    }
    
    // Add cart items
    if (cartItems && cartItems.length > 0) {
        html += renderCartHTML(cartItems);
    }
    
    return html;
}

// Function to change order quantity and update total price
function changeQuantity(orderId, change) {
    showLoader(); // Loader ko'rsatish
    
    try {
        const orders = getOrdersFromLocalStorage();
        const orderIndex = orders.findIndex(order => order.id === orderId);
        
        if (orderIndex !== -1) {
            const order = orders[orderIndex];
            const newQuantity = (order.count || 1) + change;
            
            if (newQuantity > 0) {
                // Calculate base price from original totalPrice
                const basePriceValue = parseFloat(order.totalPrice.replace('₾', ''));
                const baseQuantity = order.count || 1;
                const unitPrice = basePriceValue / baseQuantity;
                
                // Update quantity and calculate new total price
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

        // total larni yig'ish
        let subTotal = cart.reduce((sum, item) => sum + (item.total || 0), 0);

        if (document.querySelector(".subTotal")) {
            document.querySelector(".subTotal").innerHTML = subTotal.toFixed(2)
        }
        
    } catch (error) {
        hideLoader();
    }
}

// Function to change cart item quantity
function changeCartQuantity(itemId, change) {
    showLoader(); // Loader ko'rsatish
    
    try {
        const cartItems = getCartFromLocalStorage();
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
            const item = cartItems[itemIndex];
            const newQuantity = (item.count || 1) + change;
            
            if (newQuantity > 0) {
                // Calculate unit price from current total or price
                let unitPrice = 0;
                
                if (item.unitPrice) {
                    // If unitPrice already exists, use it
                    unitPrice = item.unitPrice;
                } else if (item.price && item.count) {
                    // Calculate unit price from total and quantity
                    unitPrice = parseFloat(item.price) / (item.count || 1);
                    item.unitPrice = unitPrice; // Store for future use
                } else if (item.price) {
                    // If only total exists, assume quantity is 1
                    unitPrice = parseFloat(item.price);
                    item.unitPrice = unitPrice;
                } else if (item.price) {
                    // If only price exists, assume quantity is 1
                    unitPrice = parseFloat(item.price);
                    item.unitPrice = unitPrice;
                }
                
                // Update quantity and calculate new total
                item.count = newQuantity;
                const newTotal = (unitPrice * newQuantity).toFixed(2);
                item.total = parseFloat(newTotal);
                
                // Also update price if it exists (for backward compatibility)
                if (item.price !== undefined) {
                    item.price = parseFloat(newTotal);
                }
                
                localStorage.setItem('cart', JSON.stringify(cartItems));
                
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            } else if (newQuantity <= 0) {
                // Remove item if quantity becomes 0 or less
                deleteCartItem(itemId);
            }
        }
    } catch (error) {
        hideLoader();
    }
}

// Function to delete order
function deleteOrder(orderId) {
    showLoader(); // Loader ko'rsatish
    
    try {
        const orders = getOrdersFromLocalStorage();
        const filteredOrders = orders.filter(order => order.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(filteredOrders));
        
        setTimeout(() => {
            loadAndRenderAllItems(); // Re-render
            hideLoader();
        }, 300);
    } catch (error) {
        hideLoader();
    }
    window.location.reload()
}

// Function to delete cart item
function deleteCartItem(itemId) {
    showLoader(); // Loader ko'rsatish
    
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

// Main function to load and render all items (orders + cart)
function loadAndRenderAllItems() {
    try {
        const orders = getOrdersFromLocalStorage();
        const cartItems = getCartFromLocalStorage();
        const container = document.getElementById('ordersContainer');
        if (container) container.innerHTML = renderAllItemsHTML(orders, cartItems);
    } catch (error) {
    }
}

// Keep the old function for backward compatibility
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
    showLoader(); // Loader ko'rsatish
    
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
    showLoader(); // Loader ko'rsatish
   
    try {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.find(o => o.id === orderId);
       
        if (order) {
            // Tahrirlash rejimini yoqamiz
            localStorage.setItem('edit', 'true');
            localStorage.setItem('for_id', orderId);
           
            // Pizza uchun ingredient countini saqlash
            if (order.pizzas && order.pizzas.length > 0) {
                localStorage.setItem('ingredient', order.pizzas.length.toString());
            }
           
            // ORIGINALPRODUCT OBYEKTINI TO'G'RIDAN-TO'G'RI SELECTEDPRODUCTGA O'TKAZISH
            if (order.originalProduct) {
                // originalProduct obyektini to'g'ridan-to'g'ri o'tkazish
                localStorage.setItem('selectedProduct', JSON.stringify(order.originalProduct));
            } else {
                // Fallback: originalProduct yo'q bo'lsa, orderning o'zini saqlash
                localStorage.setItem('selectedProduct', JSON.stringify(order));
            }
           
            // Pizza uchun qo'shimcha ma'lumotlarni saqlaymiz
            if (order.dataType === 'pizza' && order.pizzas) {
                // Birinchi pizzaning title'ini size sifatida saqlash (agar kerak bo'lsa)
                const pizzaSize = order.pizzas[0] ? order.pizzas[0].title : null;
                if (pizzaSize) {
                    localStorage.setItem('selectedPizzaSize', pizzaSize);
                }
            }
           
            const hasPizza = order.dataType === 'pizza' ||
                           (Array.isArray(order.items) && order.items.some(item => item.dataType === 'pizza'));
           
            setTimeout(() => {
                hideLoader(); // Loader yashirish
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

// QO'SHIMCHA: Edit rejimida product ma'lumotlarini to'g'ri olish uchun helper function
function getProductDataForEdit(order) {
    // Agar order ichida originalProduct mavjud bo'lsa, uni ishlatamiz
    if (order.originalProduct) {
        return {
            ...order.originalProduct,
            // Edit qilinadigan qiymatlarni order'dan olamiz
            count: order.count
        };
    }
    
    // Aks holda order'dan product ma'lumotlarini tiklaymiz
    return {
        id: order.productId || extractProductId(order.id), // Mahsulot ID'sini ajratish
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

// Product ID'sini order ID'sidan ajratish uchun helper function
function extractProductId(orderId) {
    // Bu yerda sizning ID tizimingizga mos ravishda logika yozishingiz kerak
    // Masalan: agar order ID formatiz "productId-timestamp" bo'lsa
    if (typeof orderId === 'string' && orderId.includes('-')) {
        return orderId.split('-')[0];
    }
    return orderId;
}

// ADDTOCART FUNKSIYASIDA HAM O'ZGARTIRISH KERAK
// Order yaratishda originalProduct ma'lumotlarini saqlash
function createOrderWithOriginalProduct(productData, pizzasArray, count, totalPrice) {
    const orderId = lastOrderId + 1;
    lastOrderId = orderId;
    localStorage.setItem("lastOrderId", lastOrderId.toString());
    
    const newOrder = {
        // Order ma'lumotlari
        id: orderId,
        count: count,
        pizzas: pizzasArray,
        totalPrice: totalPrice + "₾",
        date: new Date().toISOString(),
        
        // Product ma'lumotlari (flatted)
        productId: productData.id, // Asosiy mahsulot ID'si
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
        
        // Original product ma'lumotlarini saqlash (edit uchun)
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


// existing subtotal calc & cart_cards rendering
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// cart subtotal
let cartTotal = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.count || 0)), 0);

// orders subtotal (originalProduct boyicha)
let ordersTotal = orders.reduce((sum, item) => {
    let productData = item.originalProduct || item;
    let count = item.count || 0;

    // originalProduct narxi
    let basePrice = productData.price || 0;

    // pizzas narxi va ingredientlar narxi
    let pizzasPrice = 0;
    if (item.pizzas && Array.isArray(item.pizzas)) {
        pizzasPrice = item.pizzas.reduce((pSum, pizza) => {
            let pizzaPrice = pizza.price || 0;

            // ingredient narxlari
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
    // umumiy hisob (count ga ko‘paytirilgan)
    return sum + ((basePrice * count) + pizzasPrice);
    
    
}, 0);

// umumiy total
let grandTotal = cartTotal + ordersTotal;

if (document.querySelector(".subTotal")) {
    document.querySelector(".subTotal").innerHTML = grandTotal.toFixed(2) + "₾";
}


function payment_page() {
    showLoader(); // Loader ko'rsatish
    
    try {
        sessionStorage.setItem("dataprice", grandTotal.toFixed(2) + "₾");
        
        setTimeout(() => {
            window.location="../../oplata";
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
    // ORIGINALPRODUCT dan asosiy narxlarni olish
    let basePrice = parseFloat(productData.price || item.price) || 0;
    let additionalPrice = 0;
    
    // Pizzalar narxini qo'shish
    if (item.pizzas && item.pizzas.length > 0) {
        item.pizzas.forEach(pizza => {
            additionalPrice += parseFloat(pizza.price) || 0;
            
            // Ingredientlar narxini qo'shish
            if (pizza.ingredients && pizza.ingredients.length > 0) {
                pizza.ingredients.forEach(ingredient => {
                    additionalPrice += parseFloat(ingredient.price) || 0;
                });
            }
        });
    }
    
    // Agar 1+1 aksiya bo'lsa
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
// DOMContentLoaded: run translation then render WITH LOADER
// -----------------------------
// 5. BESHINCHI: DOMContentLoaded qismini yangilash
document.addEventListener('DOMContentLoaded', function() {
    // Show loader at the beginning
    showLoader();
    
    // Use optimized translation function
    translateStorageUsingLibre()
        .catch(err => { 
            console.error('Translation failed:', err);
        })
        .finally(() => {
            try {
                loadAndRenderAllItems();
                
                // Hide loader after everything is done
                setTimeout(() => {
                    hideLoader();
                }, 300); // Reduced delay from 500ms to 300ms
                
            } catch (e) {
                console.error('Rendering failed:', e);
                hideLoader();
            }
        });
});

// -----------------------------
// End of merged code with loader integration
// -----------------------------