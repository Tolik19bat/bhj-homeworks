const tabsArray = Array.from(document.querySelectorAll(".font-size"));
const contentText = document.querySelector(".book__content");

// переключатель размеров шрифта контента
for (let indexTab = 0; indexTab < tabsArray.length; indexTab++) {
  tabsArray[indexTab].addEventListener("click", (event) => {
    event.preventDefault(); // запрещаем переход по ссылке с кнопки
    tabsArray.forEach((el) => el.classList.remove("font-size_active")); //отключаем предыдущие нажатия
    tabsArray[indexTab].classList.add("font-size_active");

    if (indexTab === 0) {
      contentText.classList.remove("font-size_big");
      contentText.classList.add("font-size_small");
    }
    if (indexTab === 1) {
      contentText.classList.remove("font-size_small");
      contentText.classList.remove("font-size_big");
    }
    if (indexTab === 2) {
      contentText.classList.remove("font-size_small");
      contentText.classList.add("font-size_big");
    }
  });
}
// кнопки цвета текста
const parentObjectText = document.querySelector(".book__control_color"); //родительский элемент
const buttonColorText = Array.from(parentObjectText.getElementsByTagName("a")); // объект с тегами <a>

for (let indexButton = 0; indexButton < buttonColorText.length; indexButton++) {
  buttonColorText[indexButton].addEventListener("click", (event) => {
    event.preventDefault(); // запрещаем переход по ссылке с кнопки
    buttonColorText.forEach((el) => el.classList.remove("color_active")); //отключаем предыдущие нажатия
    buttonColorText[indexButton].classList.add("color_active");

    if (indexButton === 0) {
      contentText.classList.remove("book_color-gray");
      contentText.classList.remove("book_color-whitesmoke");
      contentText.classList.add("book_color-black");
    }
    if (indexButton === 1) {
      contentText.classList.remove("book_color-whitesmoke");
      contentText.classList.remove("book_color-black");
      contentText.classList.add("book_color-gray");
    }
    if (indexButton === 2) {
      contentText.classList.remove("book_color-black");
      contentText.classList.remove("book_color-gray");
      contentText.classList.add("book_color-whitesmoke");
    }
  });
}
// кнопки цвета фона
const page = document.querySelector('.book');// доступ к фону страницы
const parentObjectBackground = document.querySelector(".book__control_background"); //родительский элемент
const buttonBackground = Array.from(parentObjectBackground.getElementsByTagName("a")); // объект с тегами <a>

for(let indexButton = 0; indexButton < buttonBackground.length; indexButton++) {
	buttonBackground[indexButton].addEventListener("click", (event) => {
    event.preventDefault(); // запрещаем переход по ссылке с кнопки
    console.log(indexButton);
		buttonBackground.forEach((el) => el.classList.remove("color_active"));//отключаем предыдущие нажатия
    buttonBackground[indexButton].classList.add("color_active");

		if(indexButton === 0) {
			page.classList.remove('book_bg-gray');
			page.classList.remove('book_bg-white');
			page.classList.add("book_bg-black");
		}
		if(indexButton === 1) {
			page.classList.remove('book_bg-white');
			page.classList.remove('book_bg-black');
			page.classList.add('book_bg-gray');
		}
		if(indexButton === 2) {
			page.classList.remove('book_bg-black');
			page.classList.remove('book_bg-gray');
			page.classList.add('book_bg-white');
		}
})
}