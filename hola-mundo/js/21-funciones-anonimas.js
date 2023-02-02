'use strict'

//Función anonima
//Es una funcion que no tiene nombre

/*var pelicula=function(nombre) {

	return "La pelicula se llama: "+nombre;
}*/

function sumame(numero1,numero2,sumaymuestra,sumarpordos){

	var sumar=numero1+numero2;
	sumaymuestra(sumar);
	sumarpordos(sumar);
	return sumar;
}
//Callbacks
//Es una función dentro de otra función
sumame(5,7,function(dato){
	console.log("La suma es: ", dato);
},function(dato){
	console.log("La suma por dos es: ", (dato*2));
});

//FUNCIONES DE FLECHAS

sumame(5,7,dato=>{
	console.log("La suma es: ", dato);
},dato=>{
	console.log("La suma por dos es: ", (dato*2));
});

