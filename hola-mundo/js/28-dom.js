'use strict'


//DOM- DOCUMENT OBJECT MODEL
function cambiaColor(color){
	caja.style.background=color;
}
//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja"); //SELECCIONA ID
var caja= document.querySelector("#micaja"); //SELECCIONA ID CON "#micaja", CLASSES CON ( ".micaja" )
//ELEMENTOS SIN NADA "#micaja".
caja.innerHTML="¡Texto en la caja desde JS!";//Modifico HTML
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="White";
caja.className="Hola Hola2";

//Conseguir elementos por su etiqueta
var todosLosDivs= document.getElementsByTagName('div');
//console.log(todosLosDivs);

//todosLosDivs.forEach((valor,indice)=>{
	var seccion= document.querySelector("#MiSelección");
	var hr=document.createElement("hr");
	//seccion.append("hr");

	var valor;

for(valor in todosLosDivs){
	console.log(todosLosDivs[valor]);
	if(typeof todosLosDivs[valor].textContent=='string'){
	var parrafo= document.createElement("p");
	var texto= document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.append(texto);
	seccion.append(parrafo);
	//document.querySelector("#MiSelección").prepend(parrafo);

	}
	/*var parrafo= document.createElement("p");
	var texto= document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.appendChild(texto);
	document.querySelector("#MiSelección").appendChild(parrafo);*/

}
seccion.append(hr);

//SELECCION DE ELEMENTOS
var div;
var div2;
var divRojos=document.getElementsByClassName('rojo');
var divAmarillos=document.getElementsByClassName('amarillo');
divAmarillos[0].style.background="yellow";
//console.log(divAmarillos);

for(div in divRojos){
	if(divRojos[div].className=="rojo"){
	divRojos[div].style.background="red";
}}

var id=document.querySelector("#encabezado");
console.log(id);


//	QUERYSELECTORALL SELECCIONA TODO LOS ELEMENTOS EN ESTE CASO DIV
var selecAll = document.querySelectorAll('div.rojo, div.amarillo');
console.log(selecAll);

/*
for(div2 in divAmarillos){
	if(divAmarillos[div2].className=="amarillo"){
	divAmarillos[div2].style.background="yellow";
}}
*/

//divRojos[0].style.background="red";
//console.log(divRojos);





//});

/*
var contenidoEnTexto= todosLosDivs[2];//.textContent;//Puedo usar el innerHTML pero
//con esta funcion puedo cambiarlo.
contenidoEnTexto.innerHTML="Cambio de texto";
contenidoEnTexto.style.background="red";*/

//console.log(contenidoEnTexto);


//Conseguir elementos por su clase CSS

//console.log(caja);