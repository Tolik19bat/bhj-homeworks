const hole = document.getElementsByClassName("hole");
const element = document.getElementsByClassName("hole_has-mole");

function getHole() {}

  for (let i of hole) {
		[i].onclick = function() {
			alert('клик')

		}

      console.log([i]);
    
  }


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
