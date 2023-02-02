'use strict'

//Parametros de REST y SPREAD

function listadoFrutas(fruta1,fruta2,...resto_frutas){
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2);
	console.log(resto_frutas);

}

listadoFrutas("Naranja","Manzana","Sandia","Melon","Coco","Pera");

var frutas= ['Naranja','Manzana'];
listadoFrutas(...frutas,"Sandia","Melon","Coco","Pera");

