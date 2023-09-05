const progress = document.getElementById("progress");
const form = document.getElementById("form");
const sendFile = new FormData(form);//конструктор

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(sendFile);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };
  xhr.send(sendFile);
});