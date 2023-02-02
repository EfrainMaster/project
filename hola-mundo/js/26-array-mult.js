'use strict'


var categoria=["Acción","Comedia","Terror"];
var peliculas=["Doble de accion","scary movie","la parodia"];

//peliculas.sort();//Orden alfabetico de la array
peliculas.reverse();//Da vuelta el Orden de la array
console.log(peliculas);

var cine=[categoria, peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][1]);*/
/*
var elemento="";
do{
	elemento=prompt("Intruduce el nombre de una pelicula: ");
	peliculas.push(elemento);
}
while(elemento!="ACABAR");

peliculas.pop();//QUITA EL ULTIMO ELEMENTO DEL ARRAY

//peliculas.push("superman");*/

var indice= peliculas.indexOf('scary movie');
//console.log(indice);

if(indice>-1){
	peliculas.splice(indice,1);
}


var peli_string= peliculas.join();

console.log(peli_string);

var cadena="texto1, texto2, texto3";
var cadena_array=cadena.split(", ");

console.log(cadena_array);