const items = document.getElementById("items");
const loader = document.getElementById("loader");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {// если у объекта статус 4
    loader.classList.remove("loader_active");//скрываем значёк подгрузки

    let object = JSON.parse(xhr.response).response.Valute; //читаем значение свойства Valute и создаём объект с помощью форматирования JSON

    for (let key in object) {//для каждого индекса в объекте
			//присваеваем html код со значениями объявляя свойства объекта
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
