'use strict'

// Eventos de Ratón
											//(que es lo mas recomendable)
//Evento 'load' sirva para cargar el script en cualquier parte del head
// para evitar cargarlo al final del HTML
window.addEventListener('load',()=>{
function cambiarColor(){
		console.log("Me has dado Click");
		var bg= boton.style.background;
		if(bg=="green"){
		boton.style.background="red";

	}else{
		boton.style.background="green";
	}
		boton.style.padding="10px";
		boton.style.border="1px solid #ccc";

		return true;
	}

	var boton=document.querySelector("#boton");
							//Funcion de Callback

	//Click:						
	boton.addEventListener('click',function(){
		cambiarColor();
		console.log(this);
		this.style.border= "10px solid black";  // this. es lo mismo que 
	//	utilizar el objeto
	})

	//Mouse over:
	boton.addEventListener('mouseover', function(){

		boton.style.background="yellow";
	})

	//Mouse Out
	boton.addEventListener('mouseout',function(){
		boton.style.background="#ccc";
	})

	// Focus
	var input= document.querySelector("#campo_nombre");

	input.addEventListener('focus', function(){
		console.log("[Focus] Texto dentro de input");  //Click dentro del imput
	})


	// Blur
	input.addEventListener('blur', function(){
		console.log("[blur] Texto fuera de imput");  //Click fuera del input
	})

	// Keydown
	input.addEventListener('keydown', function(event){
		console.log("[Keydown] Pusando una tecla", String.fromCharCode(event.keyCode));
		//Cuando escribo con el teclado muestra la tecla que escribo
		// String.fromCharCode(event.keyCode)
	})

	// Keypress
	input.addEventListener('keypress', function(event){
		console.log("[keypress] Tecla presionada ",String.fromCharCode(event.keyCode));
	//Muestra la tecla presionada	
	})

	// Keyup
	input.addEventListener('keyup', function(event){
		console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
	//Cuando Levanto el dedo de la tecla presionada	
})

}); //End load

