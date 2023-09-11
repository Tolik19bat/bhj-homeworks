const card = document.querySelector(".signin");//доступ к карточке
const signinForm = document.getElementById("signin__form");//доступ к форме
const signinBtn = document.getElementById("signin__btn");//кнопка войти
const logoutBtn = document.getElementById("logout__btn");//кнопка выйти
const welcome = document.querySelector(".welcome");//приветствие
const userId = document.getElementById("user_id");//имя пользователя

const signIn = () => {//функция отображения входа
  card.classList.remove("signin_active");//скрываем карточку
  welcome.classList.add("welcome_active");//показываем приветствие
};

window.onload = () => {//событие при загрузке страницы
  if (localStorage.loginId) {//если в локальном хранилище данные есть
    signIn();//минуем регистрацию
    userId.textContent = localStorage.loginId;//присваеваем сохранённое имя
  }
};

signinForm.addEventListener("submit", (event) => {//событие отправки формы
  event.preventDefault();//отменяем перезагрузку
  let user = new FormData(signinForm);//создаём конструктор данных из формы
  let xhr = new XMLHttpRequest();//создаём объект для запроса на сервер
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");//инициализируем запрос
  xhr.responseType = "json";//присваиваем типу объекта текстовый формат

  xhr.send(user);//отправляем запрос на сервер
  console.log(xhr)

  xhr.onload = () => {//слушаем событие на объекте
    let data = xhr.response;
    console.log(data);
    if (data.success) {
      signIn();
      userId.textContent = data.user_id;
      localStorage.loginId = data.user_id;
    } else {
      alert("неверный логин/пароль!");
      signinForm.reset();
    }
  };
});

logoutBtn.onclick = () => {//выйти 
  localStorage.clear();
  welcome.classList.remove("welcome_active");
  card.classList.add("signin_active");
  signinForm.reset();
};
