'use strict'

//Plantillas de textos

var nombre=prompt("Dime tu nombre:");
var apellido=prompt("Dime tu apellido");

//var texto= "Mi nombre es: "+nombre+" <br/>Mi apellido es: "+ apellido;

var texto=`
	<h1>Hola que tal</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mi apellido es: ${apellido}</h3>

`;

document.write(texto);