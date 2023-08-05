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

// const dead = document.getElementById('dead');
// const lost = document.getElementById('lost');

// const getHole = (index) => document.getElementById(`hole${index}`);

// const resetScore = (message) => {
//   dead.textContent = 0;
//   lost.textContent = 0;
//   alert(message);
// };

// for (let index = 1; index <= 9; index++) {
//   let hole = getHole(index);
//   hole.onclick = function() {
//     if (hole.className.includes('hole_has-mole')) {
//        dead.textContent++;  
//     } else {
//        lost.textContent++;
//     }
//     if (dead.textContent == 10) {
//       resetScore("Победа!");
//     }
//     if (lost.textContent == 5) {
//       resetScore("Вы проиграли!");
//     }
//   }
// }