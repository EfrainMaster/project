'use strict'

/*
Calculadora:
1.Pida dos numero por pantalla
2.Si ingresamos mal un numero que lo vuelva a pedir
3.En el cuerpo de la pagina, un alerta y por consola el resultado
 de sumar, restar, multiplicar y dividir

*/

var numero1=parseInt(prompt("Ingrese la primer cifra",0));
var numero2=parseInt(prompt("Ingrese la segunda cifra",0));

while(numero1<0||numero2<0||isNaN(numero1)||isNaN(numero2)){
 	numero1=parseInt(prompt("Ingrese la primer cifra",0));
 	numero2=parseInt(prompt("Ingrese la segunda cifra",0));

}
var resultado="La suma es: "+(numero1+numero2)+"<br/>"+
				"La resta es: "+(numero1-numero2)+"<br/>"+
				"La multiplicacion es: "+(numero1*numero2)+ "<br/>"+
				"La division es: "+(numero1/numero2)+"<br/>";

				var resultado2="La suma es: "+(numero1+numero2)+"\n"+
				"La resta es: "+(numero1-numero2)+"\n"+
				"La multiplicacion es: "+(numero1*numero2)+ "\n"+
				"La division es: "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultado2);
console.log(resultado2);