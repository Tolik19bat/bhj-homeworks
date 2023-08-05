const elementImg = document.getElementById("cookie");

function sizeAndCount() {
  const counter = document.getElementById("clicker__counter");
  counter.textContent = +counter.textContent + 1;
  elementImg.width = "250";
  setTimeout(function () {
    elementImg.width = "200";
  }, 500);
}
elementImg.onclick = sizeAndCount;
