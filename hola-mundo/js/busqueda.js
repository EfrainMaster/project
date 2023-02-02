'use strict'
//Transformacion de textos
var numero=555;
var texto1="  Bienvenido al curso de javascript de Efrain Crack  ";
var texto2="buen curso";

var busqueda=texto1.indexOf("curso");
	busqueda=texto1.lastIndexOf("curso");
	busqueda=texto1.search("curso");
	busqueda=texto1.match("curso");
	busqueda=texto1.match(/curso/g);
	busqueda=texto1.substr(14,5);
	busqueda=texto1.charAt(37);
	busqueda=texto1.startsWith("Bien");//true o false del comienzo
	busqueda=texto1.endsWith("robles");//true o false de la terminacion
	busqueda=texto1.includes("javascript");////true o false si encuentra la palabra correcta
	busqueda=texto1.replace("javascript","Programacion");//remplaza palabras
	busqueda=texto1.slice(14,22);//quita las palabras desde la ubicacion que doy
	busqueda=texto1.split(" ");//Le indico un espacio y obtengo un array con todos las palabras separadas
	busqueda=texto1.trim();//Quita los espacios por delante y por detras

console.log(busqueda);