const sectionSelectAtac = document.getElementById("selecAtac");
const mascotaBoton = document.getElementById("selectMasc"); // seleccionando el botón mascota
const btnReiniciar = document.getElementById("btn-reset");
const mascotaJugador = document.getElementById('mascota-jugador');
const sectionSelectMasc = document.getElementById("selecMascota");
const mascotaEnemigo = document.getElementById('mascota-enemigo');
const spanvidasJugador = document.getElementById("vidas-jugador");
const spanvidaEnemigo = document.getElementById("vidas-enemigo");
const secResultado = document.getElementById("resultado");
const secAtaqueJugador = document.getElementById("ataques-del-jugador");
const secAtaqueEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = []; // ATAQUE ENEMIGO
let opcionesDeMokepones;
let thePetWater;
let petFire;
let earthBol;
let mascotaJuga;
let ataqueMokepon;
let ataquesMokeponEnemigo;
let ataqueFuego;
let ataqueAgua;
let ataqueTierra; 
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
// let ataqueJ = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidaJugador = 3;
let vidaEnemigo = 3;

class Mokepon { // EL NOMBRE DE LA CLASE SE EMPIEZA CON MAYÚSCULA
    constructor(nombre, foto, vida) {

        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];

    }
}
 // ACA CAPAZ QUE TENGO QUE DEJAR ../assets/ DE ESTA MANERA ./assets/
 // OBJETOS INSTACIA QUE VIENEN DE MI CLASE
let thepetwater = new Mokepon('Thepetwater', '../assets/mokepons_mokepon_hipodoge_attack.png', 5);

let petfire = new Mokepon('Petfire', '../assets/mokepons_mokepon_ratigueya_attack.png', 5);

let earthbol = new Mokepon('Earthbol', '../assets/mokepons_mokepon_capipepo_attack.png', 5);

//    EMPUJA O INJECTA TAL VALOR ESTA VARIABLE COMO mokepones .push()
thepetwater.ataques.push(
    {nombre: '💧', id: 'btn-agua' },
    {nombre: '💧', id: 'btn-agua' },
    {nombre: '💧', id: 'btn-agua' },
    {nombre: '🔥', id: 'btn-fuego' },
    {nombre: '🌻', id: 'btn-tierra' },
)

petfire.ataques.push(
    {nombre: '🔥', id: 'btn-fuego' },
    {nombre: '🔥', id: 'btn-fuego' },
    {nombre: '🔥', id: 'btn-fuego' },
    {nombre: '💧', id: 'btn-agua' },
    {nombre: '🌻', id: 'btn-tierra' },
)

earthbol.ataques.push(
    {nombre: '🌻', id: 'btn-tierra' },
    {nombre: '🌻', id: 'btn-tierra' },
    {nombre: '🌻', id: 'btn-tierra' },
    {nombre: '💧', id: 'btn-agua' },
    {nombre: '🔥', id: 'btn-fuego' },
)

mokepones.push(thepetwater, petfire, earthbol);

// mokepones.push(thepetwater, petfire, earthbol);   //    EMPUJA O INJECTA TAL VALOR ESTA VARIABLE COMO mokepones

// console.log(mokepones);

function inciarJuego(){
    sectionSelectAtac.style.display = "none";
    // ITERANDO POR CADA UNO DE LOS ELEMENTOS QUE EXISTEN
    mokepones.forEach((mokepon) => {
        // Se debe dejar espacio entre el corchete del input ejemplo: 
        // <input type="radio" name="mascota" id=${mokepon.nombre} />
        opcionesDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} /> <!-- name es para encapsular -->
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
           <P>${mokepon.nombre} -> ${mokepon.ataque}</P>
           <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>   
        `
            //   PARA QUE SE AGREGUE TODOS HAY QUE PONER +=
        contenedorTarjetas.innerHTML += opcionesDeMokepones;

        thePetWater = document.getElementById('Thepetwater');
        petFire = document.getElementById('Petfire');
        earthBol = document.getElementById('Earthbol');

        // console.log(mokepon.nombre);
    })

    mascotaBoton.addEventListener('click', selecMascJug);
    btnReiniciar.addEventListener('click', reiniciar);
    btnReiniciar.style.display = 'none';
    btnReiniciar.disabled = true;
 
}

function selecMascJug(){                        // .checked sirve para ver si el radio esta seleccionado  
    if(thePetWater.checked){
        alert("Seleccionaste thepetwater"); // A ESTO SE LLAMA UN FUENTE DE VERDAD
        mascotaJugador.innerHTML = thePetWater.id; // manipulación de DOM
        mascotaJuga = thePetWater.id; // GUARDAR EL NOMBRE EN ESTA LÍNEA PARA PODER
    }else if(petFire.checked){          // EXTRAER Y GUARDAR PARA PODER BUSCAR ESE NOMBRE EN NUESTRO OBJETOS
        alert("Seleccionaste petfire");
        mascotaJugador.innerHTML = petFire.id;
        mascotaJuga = petFire.id;
    }else if(earthBol.checked){
        alert("Seleccionaste earthbol");
        mascotaJugador.innerHTML = earthBol.id;
        mascotaJuga = earthBol.id;
    } else {
        alert("No seleccionaste nada");
        mascotaJugador.innerHTML = '';
    }

    extraerAtaques(mascotaJuga);
    selecMascEnemigo();
    
    mascotaBoton.disabled = true;
    sectionSelectMasc.style.display = "none";
    sectionSelectAtac.style.display = "flex";

}
//              RECIBIENDO PARAMETRO. ES COMO VARIABLE INTERNA DE LA FUNCIÓN.
function extraerAtaques(mascotaJuga) {
    let ataques;
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJuga === mokepones[i].nombre) { // SOLO QUEREMOS EL NOMBRE
            ataques = mokepones[i].ataques;
        }       
    }
    console.log(ataques);
    mostrarAtaque(ataques);

}

function mostrarAtaque(ataques) {
    ataques.forEach((ataque) => {
        ataqueMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataqueMokepon;
    })
     ataqueFuego = document.getElementById("btn-fuego");
     ataqueAgua = document.getElementById("btn-agua");
     ataqueTierra = document.getElementById("btn-tierra"); 
    // ES BUENO REPETIR CLASES PERO NO ID
     botones = document.querySelectorAll('.BAtaque');

}

function secuenciaAtaque() {
    botones.forEach((boton) => {    // la (e) hace referencia al evento mismo
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO');
                boton.style.background = '#112f58';
                console.log(ataqueJugador);
                boton.disabled = true;
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA');
                boton.style.background = '#112f58';
                console.log(ataqueJugador);
                boton.disabled = true;
            } else {
                ataqueJugador.push('TIERRA');
                boton.style.background = '#112f58';
                console.log(ataqueJugador);
                boton.disabled = true;
            } 
            atacEnemigo();
        })
    })
   // atacEnemigo();
}

function selecMascEnemigo(){
    // ACA CAMBIAMOS EL VALOR MÁXIMO POR mokepones.length Y LE RESTAMOS 1, EL MINIMO ES 0 
    let ataqueAleatorio = aleatorio(0, mokepones.length - 1);
    // OBSERVAR BIEN ESTE CÓDIGO
    mascotaEnemigo.innerHTML += mokepones[ataqueAleatorio].nombre;

    ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques;
    secuenciaAtaque()
   
}

function atacEnemigo(){
    let atacaEne =  aleatorio(0, ataquesMokeponEnemigo.length - 1);
    // let ataqueEnemigo = document.getElementById("ataque-ataqueEnemigo");
    if(atacaEne == 0 || atacaEne == 1){
        // alert("ENEMIGO ATACA FUEGO");
        ataqueEnemigo.push('FUEGO'); // .push SOLO SIRVE PARA ARREGLOS
        // ataqueEnemigo.innerHTML = "Fuego";
    }else if(atacaEne == 3 || atacaEne == 4){
        // alert("ENEMIGO ATACA AGUA");
        ataqueEnemigo.push('AGUA');
        // ataqueEnemigo.innerHTML = "Agua";
    }else {
        // alert("ENEMIGO ATACA TIERRA");
        ataqueEnemigo.push('TIERRA');
        // ataqueEnemigo.innerHTML = "Tierra";
    }
        console.log(ataqueEnemigo);
        inciarPelea();
        // combat();
}

function inciarPelea() {
    if (ataqueJugador.length === 5) {
        combat();
    }
}

function indexOponente(jugador, enemigo) {
     indexAtaqueJugador = ataqueJugador[jugador];
     indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combat(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexOponente(index, index);
            crearMensaje("Empate");
        }else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexOponente(index, index);
            crearMensaje("Ganaste 🎉");
            // vidaEnemigo--;
            // spanvidaEnemigo.innerHTML = vidaEnemigo;
            victoriasJugador++;
            spanvidasJugador.innerHTML = victoriasJugador;
           // victorias++;
        }else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexOponente(index, index);
            crearMensaje("Ganaste 🎉");
            victoriasJugador++;
            spanvidasJugador.innerHTML = victoriasJugador;           
        }else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexOponente(index, index);
            crearMensaje("Ganaste 🎉");
            victoriasJugador++;
            spanvidasJugador.innerHTML = victoriasJugador;          
        }
        else{
            indexOponente(index, index);
            crearMensaje("Perdiste");
            victoriasEnemigo++;
            spanvidaEnemigo.innerHTML = victoriasEnemigo;
            // derrotas++;
        }       
    }
        revisarVidas(); // REVISAR VICTORIAS
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Empate");
    } else if (victoriasJugador < victoriasEnemigo) { 
        crearMensajeFinal("Perdiste");
    }else {
        crearMensajeFinal("Felicitaciones! Ganaste🎉");
    }
}

function crearMensaje(resultado){

    // let notificacion = document.createElement('p');
    // ESTAS VARIABLES NO SE PUEDEN SACAR POR QUE SON ESPECIFICAS PARA NUESTRA FUNCIÓN
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');
    
    secResultado.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

    secAtaqueJugador.appendChild(nuevoAtaqueJugador);
    secAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo);
   
}

function crearMensajeFinal(resultadoFinal){
 
    // let parrafo = document.createElement('p'); // Nombre de la etiqueta que queremos crear
    secResultado.innerHTML = resultadoFinal;

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


