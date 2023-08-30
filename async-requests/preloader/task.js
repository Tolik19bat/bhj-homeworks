const items = document.getElementById("items");
const loader = document.getElementById("loader");

const xhr = new XMLHttpRequest();//создаём экземпляр объекта с http запросом
console.log(xhr)
xhr.open(       //создаём запрос асинхронно на открытие соединения
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();     //открываем соединение и отправляем запрос

xhr.onreadystatechange = function () { // вешаем на объект событие
  if (xhr.readyState === 4) {          // если объект готов

    loader.classList.remove("loader_active"); //скрываем значок подгрузки

    let object = JSON.parse(xhr.response).response.Valute; //читаем значение свойства Valute в свойстве response и создаём объект с помощью форматирования JSON

    for (let key in object) {          //для каждого индекса в объекте
      //присваеваем html код со значениями объявляя нужные свойства объекта
      items.innerHTML += `<div class="item">
      <div class = "item__code">
        ${object[key].CharCode}
      </div>
      <div class = "item__value">
        ${object[key].Value}
      </div>
      <div class = "item__currency">
        руб.
      </div>
    </div>`;
    }
  }
};
