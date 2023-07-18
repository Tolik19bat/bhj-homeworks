const elementImg = document.getElementById("cookie");

function size() {
	const counter = document.getElementById("clicker__counter");
  elementImg.width = "250";
	setTimeout(function() {
		counter.textContent = counter.textContent + 1;
	 elementImg.width = '200'
	}, 1000);
}
elementImg.onclick = size;
