let products = Array.from(document.querySelectorAll(".product")); //получаем массив продуктов
let cartProducts = document.querySelector(".cart__products"); //корзина для товаров

function addProducts(event) { //функция создания и добавления товара в корзину
  const element = event.target.closest(".product"); //получаем родителя нажатого элемента
  const elementId = element.dataset.id; //извлекаем из него id
  const img = element.querySelector(".product__image").src; //извлекаем из него путь к img

  let inCart = cartProducts.querySelector( //наличие товара в корзине cartProducts
    `.cart__product[data-id="${elementId}"]`
  );

  if (inCart) {  //если такой товар в корзине есть то...
    const count = inCart.querySelector(".cart__product-count"); //получаем счётчик элемента который в корзине
    const currentCount = parseInt(count.textContent); //извлекаем цыфры количества

    const input = element.querySelector(".product__quantity-value"); //нажатый элемент с количеством добовляемого товара
    const select = parseInt(input.textContent); //количество нажатого товара в цыфрах

    count.textContent = currentCount + select; //увеличиваем счётчик в корзине

  } else { // в остальных случаях создаём новый товар
    const productCart = document.createElement("div"); //создаём новый div
    productCart.classList.add("cart__product"); //присваиваем диву класс
    productCart.dataset.id = elementId; //присваиваем диву атрибут data-id: нажатого элемента

    const productImg = document.createElement("img"); //создаём элемент img
    productImg.classList.add("cart__product-image"); //присваиваем класс
    productImg.src = img; //добавляем атрибут с источником
    productCart.appendChild(productImg); //вставляем img в div последним дочерним элементом

    const countProduct = document.createElement("div"); //новый div для количества
    countProduct.classList.add("cart__product-count"); //новому диву класс

    const input = element.querySelector(".product__quantity-value"); //нажатый элемент с количеством добовляемого товара
    const countInput = parseInt(input.textContent); //извлекаем количество нажатого товара в цыфрах

    countProduct.textContent = countInput; //передача колчества товаров в цифрах

    productCart.appendChild(countProduct); //добавляем в наш новый div последним дочерним элементом новое количество продукта
    cartProducts.appendChild(productCart); //и всё это добавляем в корзину последним дочерним элементом
  }
}

products.forEach((element) => {
  //к каждому элементу массива
  const minus = element.querySelector(".product__quantity-control_dec");
  const plus = element.querySelector(".product__quantity-control_inc");

  minus.addEventListener("click", () => {
    //устанавливаем обработчик на элемент минус
    const input = element.querySelector(".product__quantity-value");

    let quantity = parseInt(input.textContent);

    if (quantity > 1) {
      quantity--;
      input.textContent = quantity;
    }
  });

  plus.addEventListener("click", () => {
    //и обработчик на плюс
    const input = element.querySelector(".product__quantity-value");

    let quantity = parseInt(input.textContent);
    quantity++;
    input.textContent = quantity;
  });

  const button = element.querySelector(".product__add");
  button.addEventListener("click", addProducts); //при нажатии на элемент вызывается коллбэк функция!
});
