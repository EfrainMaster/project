'use strict'

//BOM - Browser Object Model

function getBom(){

console.log(window.innerWidth);// ANCHURA DE LA VENTANA
console.log(window.innerHeight);// ALTURA DE LA VENTANA
console.log(screen.width);
console.log(screen.height);
console.log(window.location);
console.log(window.location.href);
}

function redirect(url){
	window.location.href= url;

}

function abrirVentana(url){
	window.open(url,"","height=400, width=300");
}
//redirect(url);

getBom();