const arrayText = Array.from(document.querySelectorAll(".rotator__case"));
console.log(arrayText);

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
}, 1000);
