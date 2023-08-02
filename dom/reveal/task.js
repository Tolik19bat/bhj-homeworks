const messages = Array.from(document.querySelectorAll('.reveal'));// массив элементов
const windowHeight = window.innerHeight;// высота окна

document.addEventListener('scroll', function () {
	messages.forEach((element) => {
		element.classList.remove('reveal_active');

		if (element.getBoundingClientRect().top < windowHeight) {
			element.classList.add('reveal_active');
		}
	});
});
console.log(messages)
console.log(windowHeight)