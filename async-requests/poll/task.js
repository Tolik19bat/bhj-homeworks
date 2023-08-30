const pollTitle = document.querySelector(".poll__title");
const pollAnswer = document.querySelector(".poll__answers");
const xhr = new XMLHttpRequest(); //создаём экземпляр объекта с http запросом

xhr.open(                  //создаём запрос асинхронно на открытие соединения
	"GET",
  "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();                //открываем соединение и отправляем запрос

xhr.onreadystatechange = function () { // вешаем на объект событие
  if (xhr.readyState === 4) {          // если объект готов
    let object = JSON.parse(xhr.responseText);// читаем значение responseText и создаём объект с помощью форматирования JSON
		console.log(object)

    pollTitle.innerHTML = object.data.title;//устанавливаем в html заголовок данных

    for (let answer of object.data.answers) {//перебераем объект данных с ответами
			//устанавливаем в html разметку для каждого элемента с ответами
      pollAnswer.innerHTML += `<button class="poll__answer">
            ${answer}
            </button>`;
			console.log(answer)
    }

    const button = document.querySelectorAll(".poll__answer");//получаем коллекцию узлов
		console.log(button)
    for (let btn in button) {                //при переборе коллекции узлов
     button[btn].addEventListener("click", () => {  //устанавливаем прослушиватель на каждый узел
        alert("Спасибо, ваш голос засчитан");//и добавляем поведение
      });
    }
  }
};
