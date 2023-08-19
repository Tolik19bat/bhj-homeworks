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
    const count = inCart.querySelector(".cart__product-count");//получаем элемент счётчика
    // console.log(`count : ${count}`);

    const currentCount = parseInt(count.textContent);//извлекаем цыфры счётчика
    // console.log(`currentCount : ${currentCount}`)

    const input = element.querySelector(".product__quantity-value");
    // console.log(`input : ${input}`)

    const select = parseInt(input.textContent);
    // console.log(`select : ${select}`);

    count.textContent = currentCount + select;
  } else {
    const productCart = document.createElement("div");
    // console.log(`productCart : ${productCart}`)

    productCart.classList.add("cart__product");
    productCart.dataset.id = elementId;

    const productImg = document.createElement("img");
    // console.log(`productImg : ${productImg}`)

    productImg.classList.add("cart__product-image");
    productImg.src = img;
    productCart.appendChild(productImg);

    const countProduct = document.createElement("div");
    // console.log(`countProduct : ${countProduct}`)

    countProduct.classList.add("cart__product-count");

    const input = element.querySelector(".product__quantity-value");
    console.log(`input : ${input}`)

    const select = parseInt(input.textContent);
    // console.log(`select : ${select}`)

    countProduct.textContent = select;

    productCart.appendChild(countProduct);
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
