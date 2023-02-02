'use strict'

window.addEventListener('load', ()=>{

	//Timers:

	function intervalo(){
			var tiempo= setInterval(()=>{		//setInterval  setTimeout
		console.log("Set Interval Ejecutado");

		var encabezado= document.querySelector("h1");
		if(encabezado.style.fontSize=="50px"){
			encabezado.style.fontSize="30px"


		}else{
		encabezado.style.fontSize= "50px";

		}
		//document.querySelector("h1").style.fontSize= "50px";


	},1000);
			return tiempo;
	}

	var tiempo= intervalo();

	var stop=document.querySelector("#stop");

	stop.addEventListener("click", ()=>{
		alert("Has parado el intevalo en bucle");
		clearInterval(tiempo);
	});

	var start=document.querySelector("#start");
	start.addEventListener("click", ()=>{
	alert("Has Inciado el intervalo en bucle");
	tiempo= intervalo();

	});



});