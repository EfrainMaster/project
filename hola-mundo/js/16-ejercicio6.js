'use strict'

/*
Ingresar un numero y mostrar si es par o impar
1.Ventana prompt
2.Si no es valido lo ingresado que nos vuelva a pedir un numero
*/

var numero= parseInt(prompt("Ingrese un numero",0));

while(isNaN(numero)){

	numero= parseInt(prompt("Ingrese un numero",0));
}
if(numero%2==0){

	alert("El " + numero + " es Par");
}else{
	alert("El "+numero+" es impar");
}