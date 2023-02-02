let ataqueJugador = document.getElementById("ataque-jugador");
let enemigo = document.getElementById("ataque-enemigo");
let vidaJugador = 3;
let vidaEnemigo = 3;



function inciarJuego(){
    let sectionSelectAtac = document.getElementById("selecAtac");
    sectionSelectAtac.style.display = "none";

    let mascotaBoton = document.getElementById("selectMasc"); // seleccionando el botón mascota
    mascotaBoton.addEventListener('click', selecMascJug);


    let ataqueFuego = document.getElementById("btn-fuego");
    ataqueFuego.addEventListener('click', atacFuego);
   

    let ataqueAgua = document.getElementById("btn-agua");
    ataqueAgua.addEventListener('click', atacAgua);
   

    let ataqueTierra = document.getElementById("btn-tierra"); 
    ataqueTierra.addEventListener('click', atacTierra);
   
    let btnReiniciar = document.getElementById("btn-reset");
    btnReiniciar.addEventListener('click', reiniciar);
    btnReiniciar.style.display = 'none';
    btnReiniciar.disabled = true;
 
}

function selecMascJug(){                        // .checked sirve para ver si el radio esta seleccionado
    let thePetWater = document.getElementById('thepetwater').checked;
    let petFire = document.getElementById('petfire').checked;
    let earthBol = document.getElementById('earthbol').checked;

    let mascotaJugador = document.getElementById('mascota-jugador');
    if(thePetWater){
        alert("Seleccionaste thepetwater");
        mascotaJugador.innerHTML = 'thepetwater'; // manipulación de DOM

    }else if(petFire){
        alert("Seleccionaste petfire");
        mascotaJugador.innerHTML = 'petfire';
    }else if(earthBol){
        alert("Seleccionaste earthbol");
        mascotaJugador.innerHTML = 'earthbol';
    } else {
        alert("No seleccionaste nada");
        mascotaJugador.innerHTML = '';
    }
    selecMascEnemigo();
    
    let mascotaBoton = document.getElementById("selectMasc"); // seleccionando el botón mascota
    mascotaBoton.disabled = true;

    let sectionSelectMasc = document.getElementById("selecMascota");
    sectionSelectMasc.style.display = "none";

    let sectionSelectAtac = document.getElementById("selecAtac");
    sectionSelectAtac.style.display = "flex";

}


function selecMascEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    
    mascotaEnemigo = document.getElementById('mascota-enemigo');
    if(ataqueAleatorio == 1){
        // alert("El enemigo selecciono thepetwater");
        mascotaEnemigo.innerHTML = 'thepetwater'; // manipulación de DOM

    }else if(ataqueAleatorio == 2){
        // alert("El enemigo selecciono petfire");
        mascotaEnemigo.innerHTML = 'petfire';

    }else if(ataqueAleatorio == 3){
        // alert("El enemigo selecciono earthbol");
        mascotaEnemigo.innerHTML = 'earthbol';

    } else {
        return selecMascEnemigo();
     }
}

function atacAgua(){
    ataqueJugador = 'AGUA';
    // alert(ataqueJugador);
    atacEnemigo();
}

function atacFuego(){
    ataqueJugador = 'FUEGO';
    // alert(ataqueJugador);
    atacEnemigo();
}

function atacTierra(){
    ataqueJugador = 'TIERRA';
    // alert(ataqueJugador);
    atacEnemigo();
}



function atacEnemigo(){
    let atacaEne =  aleatorio(1,3);
    // let enemigo = document.getElementById("ataque-enemigo");
    if(atacaEne == 1){
        // alert("ENEMIGO ATACA FUEGO");
        enemigo = 'FUEGO';
        // enemigo.innerHTML = "Fuego";
    }else if(atacaEne == 2){
        // alert("ENEMIGO ATACA AGUA");
        enemigo = 'AGUA';
        // enemigo.innerHTML = "Agua";
    }else if(atacaEne == 3){
        // alert("ENEMIGO ATACA TIERRA");
        enemigo = 'TIERRA';
        // enemigo.innerHTML = "Tierra";
    }
        combat();
}


function combat(){
    let spanvidasJugador = document.getElementById("vidas-jugador");
    let spanvidaEnemigo = document.getElementById("vidas-enemigo");
    if(ataqueJugador == enemigo){
        crearMensaje("Empate");
    }else if(ataqueJugador == 'FUEGO' && enemigo == 'TIERRA'){
        crearMensaje("Ganaste 🎉");
        vidaEnemigo--;
        spanvidaEnemigo.innerHTML = vidaEnemigo;
        // victorias++;
    }else if(ataqueJugador == 'AGUA' && enemigo == 'FUEGO'){
        crearMensaje("Ganaste 🎉");
        vidaEnemigo--;
        spanvidaEnemigo.innerHTML = vidaEnemigo;
        // victorias++;
    }
    else if(ataqueJugador == 'TIERRA' && enemigo == 'AGUA'){
        crearMensaje("Ganaste 🎉");
        vidaEnemigo--;
        spanvidaEnemigo.innerHTML = vidaEnemigo;
        // victorias++;
    }
    else{
        crearMensaje("Perdiste");
        vidaJugador--;
        spanvidasJugador.innerHTML = vidaJugador;
        // derrotas++;
    }


        revisarVidas();

}

function revisarVidas(){
    if(vidaJugador == 0){
        crearMensajeFinal("Perdiste");
    }else if(vidaEnemigo == 0){
        crearMensajeFinal("Felicitaciones! Ganaste🎉");
    }
}

function crearMensaje(resultado){

    let secResultado = document.getElementById("resultado");
    let secAtaqueJugador = document.getElementById("ataques-del-jugador");
    let secAtaqueEnemigo = document.getElementById("ataques-del-enemigo");

    // let notificacion = document.createElement('p');
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');
    
    secResultado.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = enemigo;

    // secResultado.appendChild(notificacion);
    secAtaqueJugador.appendChild(nuevoAtaqueJugador);
    secAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo);

    // let parrafo = document.createElement('p');
     // Nombre de la etiqueta que queremos crear
    // if(vidaJugador >0 || vidaEnemigo >0 ){
    // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - " + resultado;
    // }else if(vidajugador == 0){
    //     alert("Perdiste");
    // }else if (vidaEnemigo == 0){
    //     alert("Ganaste");
    // }
    // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - " + resultado;

    

   
}

function crearMensajeFinal(resultadoFinal){

    let secResultado = document.getElementById("resultado");
    let parrafo = document.createElement('p'); // Nombre de la etiqueta que queremos crear
   
    secResultado.innerHTML = resultadoFinal;
 

    // secMensaj.appendChild(parrafo);

    let ataqueFuego = document.getElementById("btn-fuego");
    ataqueFuego.disabled = true;
   

    let ataqueAgua = document.getElementById("btn-agua");
    ataqueAgua.disabled = true;
   

    let ataqueTierra = document.getElementById("btn-tierra"); 
    ataqueTierra.disabled = true;

    let btnReiniciar = document.getElementById("btn-reset");
    btnReiniciar.addEventListener('click', reiniciar);
    btnReiniciar.style.display = 'block';
    btnReiniciar.disabled = false;
   
}

function reiniciar(){
    location.reload();
}

function aleatorio(min, max){
    return Math.floor((Math.random()) * (max - min + 1) +  min );
}




window.addEventListener('load', inciarJuego); // CARGAR TODO EL HTML PARA
// NO PONER EL SCRIPT AL FINALIZAR EL BODY




// function inciarPelea() {
//     if (ataqueJugador.lenght === 5) {
//         combat();
//     }
// }

// function indexOponente(jugador, enemigo) {
//     let indexAtaqueJugador = ataqueJugador[jugador];
//     let indexAtaqueEnemigo = ataqueEnemigo[enemigo];
// }

// function combat(){

//     for (let index = 0; index < ataqueJugador.length; index++) {
//         if(ataqueJugador[index] === ataqueEnemigo[index]) {
//             indexOponente(index, index);
//             crearMensaje("Empate");
//         }
        
        
//     }

//     if(ataqueJugador == ataqueEnemigo){
//         crearMensaje("Empate");
//     }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
//         crearMensaje("Ganaste 🎉");
//         vidaEnemigo--;
//         spanvidaEnemigo.innerHTML = vidaEnemigo;
//         // victorias++;
//     }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
//         crearMensaje("Ganaste 🎉");
//         vidaEnemigo--;
//         spanvidaEnemigo.innerHTML = vidaEnemigo;
//         // victorias++;
//     }
//     else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
//         crearMensaje("Ganaste 🎉");
//         vidaEnemigo--;
//         spanvidaEnemigo.innerHTML = vidaEnemigo;
//         // victorias++;
//     }
//     else{
//         crearMensaje("Perdiste");
//         vidaJugador--;
//         spanvidasJugador.innerHTML = vidaJugador;
//         // derrotas++;
//     }


//         revisarVidas();

// }




