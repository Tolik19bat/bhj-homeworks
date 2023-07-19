const hole = document.getElementsByClassName("hole");
const element = document.getElementsByClassName("hole_has-mole");

function getHole() {}

  for (let i of hole) {
    if (i) {
      console.log(hole[i]);
    }
  }


hole.onclick = getHole;
// alert(element)
// function click() {
// 	alert('Клик');
// }

// tap.onclick = click;

// function getHole( index ) {
// 	const element = document.getElementsByClassName('hole_has-mole');
// 	alert(element)

// }
// alert(getHole());
