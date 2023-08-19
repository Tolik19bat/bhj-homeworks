let products = Array.from(document.querySelectorAll(".product")); //получаем массив продуктов
let cartProducts = document.querySelector(".cart__products"); //корзина для товаров
console.log(products)
function addProducts(event) {
  const element = event.target.closest(".product");//получаем нажатый элемент
  console.log(element);

  const elementId = element.dataset.id;//извлекаем из него id
  // console.log(`elementId : ${elementId}`);

  const img = element.querySelector(".product__image").src;//извлекаем из него путь к img
  // console.log(`img : ${img}`);

  let inCart = cartProducts.querySelector(//проверяем наличие товара в корзине
    `.cart__product[data-id="${elementId}"]`
  );
  // console.log(`inCart : ${inCart}`);

  if (inCart) {//если товар в корзине есть то...
    const count = inCart.querySelector(".cart__product-count");//получаем счётчик элемента в корзине

    const currentCount = parseInt(count.textContent);//извлекаем цыфры счётчика

    const input = element.querySelector(".product__quantity-value");//нажатый элемент с количеством добовляемого товара
    // console.log(`input : ${input}`)

    const select = parseInt(input.textContent);//количество нажатого товара в цыфрах

    count.textContent = currentCount + select;//увеличиваем счётчик в корзине

  } else {
    const productCart = document.createElement("div");//создаём новый div

    productCart.classList.add("cart__product");//присваиваем диву класс
    productCart.dataset.id = elementId;//ставим диву data-id: нажатого элемента

    const productImg = document.createElement("img");//создаём элемент img

    productImg.classList.add("cart__product-image");//присваиваем класс
    productImg.src = img;//добавляем атрибут с источником
    productCart.appendChild(productImg);//img в div последним дочерним элементом

    const countProduct = document.createElement("div");//новый div для количества
    countProduct.classList.add("cart__product-count");//новому диву класс

    const input = element.querySelector(".product__quantity-value");//нажатый элемент с количеством добовляемого товара

    const select = parseInt(input.textContent);//количество нажатого товара в цыфрах

    countProduct.textContent = select;//передача колчества товаров в цифрах

    productCart.appendChild(countProduct);//собираем в наш новый div
    cartProducts.appendChild(productCart);
  }
}

products.forEach((element) => {
  const minus = element.querySelector(".product__quantity-control_dec");
  // console.log(`minus : ${minus}`)

  const plus = element.querySelector(".product__quantity-control_inc");
  // console.log(`plus : ${plus}`)

  minus.addEventListener("click", () => {
    const input = element.querySelector(".product__quantity-value");
    // console.log(`input : ${input}`)

    let quantity = parseInt(input.textContent);
    // console.log(`quantity : ${quantity}`)

    if (quantity > 1) {
      quantity--;
      input.textContent = quantity;
    }
  });

  plus.addEventListener("click", () => {
    const input = element.querySelector(".product__quantity-value");
    // console.log(`input : ${input}`)

    let quantity = parseInt(input.textContent);
    // console.log(`quantity : ${quantity}`)

    quantity++;
    input.textContent = quantity;
  });

  const button = element.querySelector(".product__add");
  // console.log(`button : ${button}`)

  button.addEventListener("click", addProducts);
});
