const hole = document.getElementsByClassName("hole");

for (let elementHole of hole) {
  elementHole.onclick = function () {
    if (elementHole.className.includes("hole_has-mole")) {
      const counterDead = document.getElementById("dead");
      counterDead.textContent = +counterDead.textContent + 1;
    } else {
      const counterLost = document.getElementById("lost");
      counterLost.textContent = +counterLost.textContent + 1;
    }
    const counterDead = document.getElementById("dead");
    if (counterDead.textContent === "11") {
      counterDead.textContent = 0;
      const counterLost = document.getElementById("lost");
      counterLost.textContent = 0;
      alert("Победа! Вы отличный охотник!");
    }
    const counterLost = document.getElementById("lost");
    if (counterLost.textContent === "6") {
      counterLost.textContent = "0";
      const counterDead = document.getElementById("dead");
      counterDead.textContent = "0";
      alert("Слишком низкая реакция. Попробуйте ещё разок.");
    }
  };
}
