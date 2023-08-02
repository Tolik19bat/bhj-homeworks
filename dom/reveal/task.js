const message = document.querySelector(".reveal");

function isVisible(element) {
	const { top, bottom } = element.getBoundingClientRect()
	if (bottom < 0) {
		message.classList.remove('reveal_active')
	} else if (top > innerHeight) {
		message.classList.remove('reveal_active')
	} else {
		message.classList.add('reveal_active')
	}
}

setInterval(() => {
	isVisible(message)
}, 1000);