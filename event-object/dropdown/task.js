const value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const arrayItems = Array.from(document.querySelectorAll(".dropdown__item"));

function funcUp() {
  list.classList.add("dropdown__list_active");
}
value.addEventListener("click", funcUp);

for (let element of arrayItems) {
  element.onclick = function () {
    let text = element.textContent;
    value.textContent = text;
    list.classList.remove("dropdown__list_active");
    return false;
  };
}
