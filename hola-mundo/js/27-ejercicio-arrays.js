'use strict'

/*
Hacer un Programa que pida:
1.pida 6 numeros por pantalla y los meta en un array.
2.Mostrar el array completo(todo los elementos) en el cuerpo de la pagina
y en la consola.
3.Ordenarlo y mostrarlo.
4.Invertir su orden y mostrarlo.
5.Mostrar cuantos elementos tiene el array.
6.Busqueda de un valor introducido por el usuario, que no diga si lo encuentra y 
su indice.
(Se valorada el uso de funciones).

*/

//Funcion Mostrar Array
function mostrar_array(elementos, textoCustom= ""){
	//Mostrar Array dentro del cuerpo de la página
document.write("<h1>Contenido del Array: "+ textoCustom +"</h1>");
document.write("<ul>");
elementos.forEach((elemento, index)=>{
document.write("<li>"+elemento+"</li>");

});
document.write("</ul>");
}

//var numeros= new Array(6);
//Pedir los numeros por pantalla:
var numeros=[];

for(var i=0;i<=5;i++){
	//numeros[i]=parseInt(prompt("Ingrese un Número: ", 0));
	numeros.push(parseInt(prompt("Ingrese un Número: ", 0)));

}
mostrar_array(numeros);

/*
//Mostrar Array dentro del cuerpo de la página
document.write("<h1>Contenido del Array: </h1>");
numeros.forEach((numero, index)=>{
document.write("<strong>"+numero+"</strong></br>");

});*/

//Mostrar el Array por la consola:
console.log(numeros);

//Ordenar y Mostrar:

numeros.sort(function(a,b){return a-b;});//Orden Ascendente
//numeros.sort(function(a,b){return b-a;});//Orden Descendente
mostrar_array(numeros,"Ordenado");

//Mostrar numeros invertidos:
//numeros.reverse();
//mostrar_array(numeros,"Reverso");

//Contar Elementos:
document.write("<h1>El Array tiene: "+numeros.length+" elementos</h1>");

//Busqueda:
var busqueda= parseInt(prompt("Busca un Número", 0));
var posicion =numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1){

	document.write("<hr/><h1>Encontrado</h1>");
	document.write("<h1>El Número Encontrado es: "+posicion+"</h1>");
}else{
	document.write("<h1>No fue encontrado:</h1></hr>");
}
/*document.write("<h1>Encontado:</h1>");
document.write("<h1>El Número Encontrado es: "+posicion+"</h1>");*/
