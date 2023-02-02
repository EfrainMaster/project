'use strict'

//Mostrar tabla de multiplicar de un numero ingresado por pantalla

var numero=parseInt(prompt("Que tabla quieres saber: ",1));
document.write("<h1>Tabla del "+ numero+ "<h1>");
for(var i=1;i<=10;i++){
	document.write(i+ " x " +numero+" = "+(i*numero)+"<br/>");

}

//Tabla de todos los numeros
for(var c=1;c<=10;c++){
document.write("<h1>Tabla del "+ c+ "<h1>");
for(var i=1;i<=10;i++){
	document.write(i+ " x " +c+" = "+(i*c)+"<br/>");

}
}