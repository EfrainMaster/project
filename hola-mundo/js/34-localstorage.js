'use strict'

//	LOCAL STORAGE:  Memoria en nuestro navegador guardada

// Comprobar disponibilidad del localstorage
if(typeof (Storage) !=='undefined'){
	console.log("Local storage disponible");
}else{
	console.log("Local storage no disponible");
}

// Guardar datos
localStorage.setItem("Título", "Curso de javascript de Efrain");

// Recuperar Elemento
console.log(localStorage.getItem("Título"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("Título");

// Guardar Objetos
var usuario={
	nombre: "Efrain Sanchez",
	email: "efrain@efrain.com",
	web: "efrain.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));
								// FORMA PARA CONVERTIR JSON STRING

// Recuperar objeto
var user_js= JSON.parse(localStorage.getItem("usuario"));


console.log(user_js);
document.querySelector("#datos").append(" "+user_js.nombre+" - "+user_js.email+" - "+user_js.web);

// Borrar Elemento en localStorage:

localStorage.removeItem("usuario");
localStorage.clear();



