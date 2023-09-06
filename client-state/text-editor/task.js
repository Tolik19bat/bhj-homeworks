const editor = document.getElementById("editor");

const button = document.querySelector(".button");

editor.value = localStorage.getItem("key");//присваеваем сохранённые данные по ключу в окно при перезагрузке

editor.addEventListener("input", () => {//событие input для textarea
  localStorage.setItem("key", editor.value);//записываем в localStorage ключ/значение
});

button.addEventListener("click", function () {//событие click на кнопку button
  localStorage.removeItem("key");//при нажатии удаляем значение по ключу
  editor.value = "";//очищаем поле ввода
});
