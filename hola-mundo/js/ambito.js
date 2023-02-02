'use strict'

var texto="Hola mundo esto es una variable global";
var numero=12;

function hola_mundo(texto){
	var holamundo="Variable dentro de una funcion";

	console.log(texto);
	console.log(/*typeof*/ numero.toString());
	console.log(holamundo);
}

hola_mundo(texto);