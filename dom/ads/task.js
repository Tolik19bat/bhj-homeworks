const arrayText = Array.from(document.querySelectorAll(".rotator__case"));
let element = 0;

setInterval(() => {
  arrayText.forEach((el) => {
    el.classList.remove("rotator__case_active");
  });
  arrayText[element].classList.toggle("rotator__case_active");

  element += 1;

  if (element === arrayText.length) {
    element = 0;
  }
	arrayText[element].style.color = arrayText[element].dataset.color;
}, 1000);
