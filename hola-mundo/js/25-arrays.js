'use stric'

//Arrays- son arreglos-Matrices
//Conexion de datos agrupados
var nombre="Efrain Sanchez";
var nombres=["efrain sanchez", "manolo lamas","bunnybunny","pedro lopez", 50, true];
//    empieza        0       ,         1     ,         2  ,      3      ,  4, 5
var lenguajes=new Array("PHP","GO","C++","JAVA","C#","C","PASCAL");

//console.log(nombres[2]);
console.log(nombres.length);
console.log(lenguajes);
/*
var elemento= parseInt(prompt("Que elementos quieres: ",0));
if(elemento>=nombres.length){

	alert("Introduce el numero correcto menor que : "+nombres.length);
}else{

	alert("El usuario seleccionado es: "+nombres[elemento]);
}

//alert(nombres[elemento]);*/

document.write("<h1>Los lenguajes de programación son: </h1>");
document.write("<ul>");
/*

for(var i=0;i<lenguajes.length;i++){
	document.write("<li>"+lenguajes[i]+"<li/>");
}
*//*
lenguajes.forEach((elemento,index,arrays)=>{
	console.log(arrays);
	document.write("<li>"+index+ " " +elemento+"<li/>");
});
*/
for(let lenguaje in lenguajes){ ///FOR IN RECORRER UN ARRAY

	document.write("<li>"+lenguajes[lenguaje]+"<li/>");
}

document.write("</ul>");

/*var busqueda=lenguajes.find(function(lenguaje){
	return lenguaje=="PHP7";
});*/
var precios=[10, 20, 50, 80, 12];

//var busqueda=lenguajes.find(lenguaje =>lenguaje=="PHP");
//var busqueda=lenguajes.findIndex(lenguaje =>lenguaje=="C++");
var	busqueda=precios.some(precio=>precio>=83);//SOME SIRVE PARA BUSCAR SI
//CUMPLEN UNA CONDICION CONCRETA

console.log(busqueda);
