'use strict'

/*
Utilizando un bucle mostrar la suma y la media de los numeros ingresados
hasta introducir un numero negativo y mostrar el resultado
*/

var suma=0;
var contador=0;

do{
	var numero= parseInt(prompt('Introduce un numero hasta ingresar un negativo',0));
	if(isNaN(numero)){
		numero=0;

	}else if(numero>=0){
		//suma=suma+numero;
		suma+=numero;

		contador++;
	}

	console.log(suma);
	console.log(contador);

}while(numero>=0)

alert("La suma de todos los numeros: "+ suma);
alert("La media de los numeros ingresados es: "+(suma/contador));