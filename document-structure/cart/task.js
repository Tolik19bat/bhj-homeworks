let product = document.querySelectorAll('.product');
let cart = document.querySelector('.cart__products');

function addProducts(event) {
	const element = event.target.closest('.product');
	const elementId = element.dataset.id;
	const img = element.querySelector('.product__image').src;

	let inCart = cart.querySelector(`.cart__product[data-id="${elementId}"]`);
