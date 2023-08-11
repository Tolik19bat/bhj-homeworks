const arrayElemTexts = Array.from(document.querySelectorAll(".has-tooltip"));//массив элементов
// console.log(arrayElemTexts);
let flag = false;//флаг для вкл/выкл подсказки

function clickFn(array) {
  for (let idx = 0; idx < array.length; idx++) {
    array[idx].addEventListener("click", (event) => {
      event.preventDefault();//отключаем переход по ссылке
			

      if (flag) {//если флаг поднят
        document.querySelector(".tooltip_active").remove();//удаляем элемент html
        flag = false;//снимаем флаг

      } else {
        let div = document.createElement("div"); //создаём пустой div
        div.className = "tooltip tooltip_active"; //добавляем класс
        let message = array[idx].title; //извлекаем сообщение/значение из title нажатого элемента
        div.innerHTML = message; //добавляем сообщение в div

				let { left, bottom } = array[idx].getBoundingClientRect();// координаты нажатого

        left = Math.round(left);// округляем данные
        bottom = Math.round(bottom);

        div.setAttribute("style", `left: ${left}px; top: ${bottom}px`);//добавляем атрибут style
        // console.log(div.getAttribute("style"));

        array[idx].insertAdjacentElement("afterEnd", div);//вставка готового div 

				window.addEventListener('scroll', function() {//снимаем подсказочку при скролле
					div.classList.remove("tooltip_active");//удаляем класс элемента html
					flag = false;//опускаем флаг для дальнейшего функционирования
				});
        flag = true;//поднимаем флаг
      }
    });
  }
}
clickFn(arrayElemTexts);//вызываем основную функцию
