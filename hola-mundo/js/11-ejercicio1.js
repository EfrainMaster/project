'use strict'

/*
Programa que nos pida dos número para ver cual es mayor, menor o si son iguales
PLUS: Si los numeros son menores o iguales que 0 o letras que nos vuelva a pedir los 
datos
*/

var numero1=parseInt(prompt('Introducir el primer numero',0));
var numero2=parseInt(prompt('Introducir el segundo numero',0));

while(numero1<=0||numero2<=0||isNaN(numero1)||isNaN(numero2)){
	numero1=parseInt(prompt('Introducir el primer numero',0));
    numero2=parseInt(prompt('Introducir el segundo numero',0));
}

//console.log(numero1,numero2);

if(numero1==numero2){
	alert("Los numeros ingresados son iguales");
}else if(numero1>numero2){
	alert("El primer numero es mayor: " + numero1);
	alert("El Segundo numero es menor: " + numero2);
}else if(numero1<numero2){
	alert("El primer numero es menor: " + numero1);
	alert("El Segundo numero es mayor: " + numero2);
}else{
	alert("Introduce numero correctos");
}