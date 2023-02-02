'use strict'

// JSON JavaScript Object Notation (NOTACION DE OBJETOS DE JAVASCRIPT).

var pelicula={
	titulo:'superman',
	year: 2017,
	pais: 'Estado Unidos'
};

var peliculas=[
	{titulo: 'iron man', year: 2017, pais:'Estado Unidos' },
	pelicula
];
var caja_peliculas= document.querySelector("#peliculas");

for ( var index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo+" - "+peliculas[index].year);
	caja_peliculas.append(p);

}



console.log(peliculas);

