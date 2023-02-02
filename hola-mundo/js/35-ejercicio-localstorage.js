'use strict'

var formulario= document.querySelector("#formpeliculas");

formulario.addEventListener('submit', ()=>{
	console.log("entrar");
	var titulo= document.querySelector('#addpeliculas').value;
	if(titulo.length >=1){
		localStorage.setItem(titulo, titulo);

	}


});

var ul= document.querySelector('#listpeliculas');

for(var i in localStorage){
	console.log(localStorage[i]);
	if(typeof localStorage[i]== 'string'){
	var li= document.createElement("li");
	li.append(localStorage[i]);
	ul.append(li);

	}
}
var formularioBorrar= document.querySelector("#formBorrarpeliculas");

formularioBorrar.addEventListener('submit', ()=>{
	console.log("entrar");
	var titulo= document.querySelector('#Borrarpeliculas').value;
	if(titulo.length >=1){
		localStorage.removeItem(titulo);

	}


});


