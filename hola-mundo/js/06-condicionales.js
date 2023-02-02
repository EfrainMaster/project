'use strict'


//Condicional If
//Si A es igual a B entonces haz algo
var edad1=30;
var edad2=12;
//Si pasa esto
if(edad1>edad2){
	//Ejecuta esto
	console.log("Edad uno es mayor que edad2");
}else{
	console.log("Edad uno es inferior");
}
/*
//Operadores relacionales
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Menor o igual: <=
	Igual: ==
	Distinto: !=
*/

var edad=19;
var nombre='David Suarez';

if(edad>=18){
	//Es mayor de edad
	console.log(nombre + " tiene " + edad + " años, es mayor de edad");
	if(edad<=33){
		console.log("todavia eres millenial");
	}else if(edad>=70){
		console.log("Eres anciano");
	}
	else{
		console.log("Ya no eres millenial");
	}	

}else{
	//Es menor de edad
	console.log(nombre + " tiene " + edad + " años, es MENOR de edad");
}

/*
Operadores logicos
AND(Y): &&
OR(O): ||
Negacion: !

*/

var year=2032;
//Negacion
if(year!=2017){
	console.log("El año no es 2017 es: " +year);
}

if(year>=2000 && year<=2023 ){
	console.log("Estamos en edad actual");
}else{
	console.log("Estamos en la edad post moderna");
}

if(year==2002 || (year>=2022 && year==2032)){
	console.log("El año acaba en 2");
}else{
	console.log("Año no registrado");
}