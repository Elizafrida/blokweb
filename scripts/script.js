// JavaScript Document



var plusbutton = document.querySelector("button");
var burgermenu = document.querySelector("#uitklapmenu");

//initiële toestand
hasBeenClicked = true;

function rechtsNaarLinks() {
	document.body.classList.toggle('active');

	if (hasBeenClicked) {
		plusbutton.innerHTML = '-'
		hasBeenClicked = false;
	} else {
		plusbutton.innerHTML = '+'
		hasBeenClicked = true;
	}
}

plusbutton.addEventListener('click', rechtsNaarLinks);
