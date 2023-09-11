const subsModal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

if (document.cookie.includes("modalclose") === false) {
  //если файл cookie отсутствует на странице
  subsModal.classList.add("modal_active"); //показываем всплывающее окно
}

modalClose.onclick = () => {
  //при клике на крестик
  subsModal.classList.remove("modal_active"); //скрываем всплывающее окно
  document.cookie = "modalclose = true"; //записываем в cookie ключ/значение
};
