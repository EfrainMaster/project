let ataqueJugador = document.getElementById("ataque-jugador");
let enemigo = document.getElementById("ataque-enemigo");



function inciarJuego(){
    let mascotaBoton = document.getElementById("selectMasc"); // seleccionando el botón mascota
    mascotaBoton.addEventListener('click', selecMascJug);
    // let ataqueJugador = document.getElementById("ataque-jugador");
    // ataqueJugador.addEventListener('click', selecAtaque);

    let ataqueFuego = document.getElementById("btn-fuego");
    ataqueFuego.addEventListener('click', atacFuego);
    // atacEnemigo();

    let ataqueAgua = document.getElementById("btn-agua");
    ataqueAgua.addEventListener('click', atacAgua);
    // atacEnemigo();

    let ataqueTierra = document.getElementById("btn-tierra"); 
    ataqueTierra.addEventListener('click', atacTierra);
    // atacEnemigo();

 
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

    // alert("Seleccionaste tu Mascota");
}
// alert("funciona");
                // document es el html y getElementById es para seleccionar el id
// let mascotaBoton = document.getElementById("selectMasc");
// mascotaBoton.addEventListener('click', selecMascJug);
    // let min = 1;
    // let max = 3;

function selecMascEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    // let min = 1;
    // let max = 3;  Seleccionando <span id="mascota-enemigo"> 
    mascotaEnemigo = document.getElementById('mascota-enemigo');
    if(ataqueAleatorio == 1){
        alert("El enemigo selecciono thepetwater");
        mascotaEnemigo.innerHTML = 'thepetwater'; // manipulación de DOM

    }else if(ataqueAleatorio == 2){
        alert("El enemigo selecciono petfire");
        mascotaEnemigo.innerHTML = 'petfire';

    }else if(ataqueAleatorio == 3){
        alert("El enemigo selecciono earthbol");
        mascotaEnemigo.innerHTML = 'earthbol';

    } else {
        return selecMascEnemigo();
        //  alert("No seleccionaste nada");
        //  mascotaEnemigo.innerHTML = '';
     }
}

function atacAgua(){
    // let ataqueJugador = document.getElementById("ataque-jugador");
    ataqueJugador = 'AGUA';
    alert(ataqueJugador);
    atacEnemigo();
    // ataqueJugador.innerHTML = "Agua";
}

function atacFuego(){
    // let ataqueJugador = document.getElementById("ataque-jugador");
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
    atacEnemigo();
    // ataqueJugador.innerHTML = "Fuego";
}

function atacTierra(){
    // let ataqueJugador = document.getElementById("ataque-jugador");
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador);
    atacEnemigo();
    // ataqueJugador.innerHTML = "Tierra";
}

function atacEnemigo(){
    let atacaEne =  aleatorio(1,3);
    // let enemigo = document.getElementById("ataque-enemigo");
    if(atacaEne == 1){
        alert("ENEMIGO ATACA FUEGO");
        enemigo = 'FUEGO';
        // enemigo.innerHTML = "Fuego";
    }else if(atacaEne == 2){
        alert("ENEMIGO ATACA AGUA");
        enemigo = 'AGUA';
        // enemigo.innerHTML = "Agua";
    }else if(atacaEne == 3){
        alert("ENEMIGO ATACA TIERRA");
        enemigo = 'TIERRA';
        // enemigo.innerHTML = "Tierra";
    }
        combat();
}

// function crearMensaje(resultado){

//     let secMensaj = document.getElementById("mensajes");
//     let parrafo = document.createElement('p'); // Nombre de la etiqueta que queremos crear
//     parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - " + resultado;

//     secMensaj.appendChild(parrafo);
   
// }

function combat(){
    // let secMensaj = document.getElementById("mensajes");
    // let parrafo = document.createElement('p'); // Nombre de la etiqueta que queremos crear
    // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - GANASTE 🎉";

    if(ataqueJugador == enemigo){
        // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - EMPATE ";
        crearMensaje("Empate");
    }else if(ataqueJugador == 'FUEGO' && enemigo == 'TIERRA'){
        // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - GANASTE 🎉";
        crearMensaje("Ganaste 🎉");
        // victorias++;
    }else if(ataqueJugador == 'AGUA' && enemigo == 'FUEGO'){
        // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - GANASTE 🎉";
        crearMensaje("Ganaste 🎉");
        // victorias++;
    }
    else if(ataqueJugador == 'TIERRA' && enemigo == 'AGUA'){
        // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - GANASTE 🎉";
        crearMensaje("Ganaste 🎉");
        // victorias++;
    }
    else{
        // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - PERDISTE ";
        crearMensaje("Perdiste");
        // derrotas++;
    }
    // secMensaj.appendChild(parrafo);
}

function crearMensaje(resultado){

    let secMensaj = document.getElementById("mensajes");
    let parrafo = document.createElement('p'); // Nombre de la etiqueta que queremos crear
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + enemigo + " - " + resultado;

    secMensaj.appendChild(parrafo);
   
}

function aleatorio(min, max){
    return Math.floor((Math.random()) * (max - min + 1) +  min );
}




window.addEventListener('load', inciarJuego); // CARGAR TODO EL HTML PARA
// NO PONER EL SCRIPT AL FINALIZAR EL BODY







// function selecAtaque(){
//     let ataqueFuego = document.getElementById("btn-fuego");
//     let ataqueAgua = document.getElementById("btn-agua");
//     let ataqueTierra = document.getElementById("btn-tierra"); 

//     ataqueJugador = document.getElementById("ataque-jugador");

//     if(ataqueFuego){
//         ataqueJugador.innerHTML("Fuego");
//     }else if(ataqueAgua){
//         ataqueJugador.innerHTML("Agua");
//     }else if(ataqueTierra){
//         ataqueJugador.innerHTML("Tierra");
//     }

// }



    // if(ataqueFuego){
    //     ataquejugador.innerHTML("Fuego");
    // }else if(ataqueAgua){
    //     ataquejugador.innerHTML("Agua");
    // }else if(ataqueTierra){
    //     ataquejugador.innerHTML("Tierra");
    // }

    // ataquejugador.addEventListener('click', selecAtaque);
    // mascotaBoton.addEventListener('click', selecMascEnemigo);


    // ataquejugador.addEventListener('click', selecAtaque);

// function selecAtaque(){
//     let ataqueFuego = document.getElementById("btn-fuego");
//     let ataqueAgua = document.getElementById("btn-agua");
//     let ataqueTierra = document.getElementById("btn-tierra"); 

//     if(ataqueFuego){
//         ataquejugador.innerHTML("Fuego");
//     }else if(ataqueAgua){
//         ataquejugador.innerHTML("Agua");
//     }else{
//         ataquejugador.innerHTML("Tierra");
//     }

// }