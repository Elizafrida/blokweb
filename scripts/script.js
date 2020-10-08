// JavaScript Document



var plusbutton = document.querySelector("button");
var plusbuttontekst = '+';
var minbuttontekst = plusbuttontekst.replace('+', '-');
var burgermenu = document.querySelector("#uitklapmenu");

function rechtsNaarLinks() {
	document.body.classList.toggle('active');
	plusbutton.innerHTML = minbuttontekst;
}

plusbutton.addEventListener('click', rechtsNaarLinks);
