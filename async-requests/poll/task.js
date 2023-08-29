const pollTitle = document.querySelector(".poll__title");
const pollAnswer = document.querySelector(".poll__answers");
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let object = JSON.parse(xhr.responseText);
    pollTitle.innerHTML = object.data.title;
    for (let answer in object.data.answers) {
      pollAnswer.innerHTML += `<button class="poll__answer">
            ${object.data.answers[answer]}
            </button>`;
    }
		console.log(xhr);

    const button = document.querySelectorAll(".poll__answer");
    for (let btn of button) {
      btn.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан");
      });
    }
  }
};
