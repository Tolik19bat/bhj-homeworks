const tabsArray = Array.from(document.querySelectorAll(".tab"));
const arrayPage = Array.from(document.querySelectorAll(".tab__content"));

for (let tabIndex = 0; tabIndex < tabsArray.length; tabIndex++) {
  tabsArray[tabIndex].addEventListener("click", () => {
    tabsArray.forEach((el) => {
      el.classList.remove("tab_active");
    });
    tabsArray[tabIndex].classList.toggle("tab_active");

    for (let elem = 0; elem < arrayPage.length; elem++) {
      arrayPage.forEach((el) => {
        el.classList.remove("tab__content_active");
      });
      arrayPage[tabIndex].classList.toggle("tab__content_active");
    }
  });
}
