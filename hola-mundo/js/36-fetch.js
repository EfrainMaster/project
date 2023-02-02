'use strict'
// Fetch (ajax) y peticiones a servicios /apis rest
//       Peticiones asincronas a un servidor
var div_usuarios = document.querySelector("#usuarios");
var div_janet= document.querySelector("#janet");
var div_profesor= document.querySelector("#profesor");


get_usuarios()
.then(data => data.json())
.then(users => {
	listado_usuarios(users.data);
	return get_info();
})
.then(data=> {
	div_profesor.innerHTML= data;
	return get_Janet();
})
.then(data=>data.json())
.then(user=>{
	buscar_janet(user.data);
})
.catch(error=>{
	alert("Error en las peticiones");
	console.log(error+" error");
});



function get_usuarios(){
	return fetch('https://reqres.in/api/users')
}

function get_Janet(){
	return fetch('https://reqres.in/api/users/2')
}

function get_info(){
	var profesor= {
		nombre: 'Efrain',
		apellidos: 'sanchez',
		url: 'https://efrain.es'
	};
	return new Promise((resolve, reject)=>{
		var profesor_string= "";
		setTimeout(function(){
			var profesor_string= JSON.stringify(profesor);
			if(typeof profesor_string != 'string' || profesor_string=='')return reject('Error');
		return resolve(profesor_string);
		},3000);
	});
}

function listado_usuarios(usuarios){
	usuarios.map((user,i)=>{
		let nombre= document.createElement("h2");

		nombre.innerHTML = i + " "+user.first_name + " "+ user.last_name;

		div_usuarios.appendChild(nombre);

		document.querySelector(".loading").style.display= "none";
	});
};

function buscar_janet(user){
	
		let nombre= document.createElement("h4");
		let avatar= document.createElement("img");

		nombre.innerHTML =  " "+user.first_name + " "+ user.last_name;
		avatar.src =user.avatar;
		avatar.width="100";

		div_janet.appendChild(nombre);
		div_janet.appendChild(avatar);

		document.querySelector(".loading1").style.display= "none";
	};


