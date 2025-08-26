document.addEventListener('DOMContentLoaded', function () {
  // нарисовать старые цены
  document.querySelectorAll(".product-price").forEach(el => {
    el.style = "color: rgb(0,0,0); font-size: 12px; font-weight: 500; text-decoration: line-through;";
  });

  // процент доли (например, localStorage: for_share = 65 -> 65%)
  const discount = Number(localStorage.getItem("for_aksiya")) || 100;
  const k = discount / 100;

  // Если есть один продукт:
  const productEl = document.querySelector(".product");
  if (productEl) {
    const price = Number(productEl.dataset.price || 0);
    const aksiyaPrice = (price * k).toFixed(2);

    // здесь мы записываем в набор данных
    productEl.dataset.aksiyaPrice = aksiyaPrice;
  }

  // Если вы хотите обновить несколько цен:
  const aksiyaPrices = document.querySelectorAll(".for_aksiyaPrice");
  const forPrices = document.querySelectorAll(".for_price");

  aksiyaPrices.forEach((el, i) => {
    const originalPrice = parseFloat(el.textContent.replace(/[^\d.]/g, "")) || 0; // "12.50₾" -> 12.50
    const newPrice = (originalPrice * k).toFixed(2);

    if (forPrices[i]) {
      forPrices[i].textContent = newPrice + "₾";
    }

    // мы также записываем его в соответствующий элемент .product
    const product = el.closest(".product");
    if (product) {
      product.dataset.aksiyaPrice = newPrice;
    }
  });
});

