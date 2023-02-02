    // función de aleatorio
    function aleatorio(min, max){
        return Math.floor((Math.random()) * (max - min + 1) +  min );
    }
    
    function elegir(jugada){
        let resultado = "";
        if(jugada == 1){
            resultado = "Piedra👊";
        }else if(jugada == 2){   // else if, es un if en cascada
            resultado= "Papel🖐";
        }else if(jugada == 3){
            resultado = "Tijera✌";
        }else{
           resultado = "No elegiste Nada";
        } 
        return resultado;
    }


    // function elegir(jugada){

    // }

    function combat(){
        if(jugador == computadora){
        alert("Empate");
        }else if(jugador == 1 && computadora == 3){
            alert("Ganaste");
            victorias++;
        }else if(jugador == 2 && computadora == 1){
            alert("Ganaste");
            victorias++;
        }
        else if(jugador == 3 && computadora == 2){
            alert("Ganaste");
            victorias++;
        }
        else{
            alert("Perdiste");
            derrotas++;
        }
    }
    // piedra= 1, papel= 2, tijera=3
    let jugador = 0; // Arranca en 0
    let min = 1;
    let max = 3;
    let victorias = 0;
    let derrotas = 0;
    let computadora = 0;
    while(victorias < 3 && derrotas < 3){
        computadora = aleatorio(1,3)
        jugador = prompt("Elige: 1.Piedra, 2.Papel, 3.Tijera");
        alert("PC elige: " + elegir(computadora));
        alert("Tu eliges: " + elegir(jugador));
        combat();
    }
    alert("Ganaste: " + victorias + " veces. Perdiste: " + derrotas + " veces");