'use strict'

//alert("Hola");
//Operadores
var numero1=7;
var numero2=12;
var operacion=numero1 * numero2;

// El resto es para ver si es par o impar %

alert("El resultado de la operación es: " + operacion);

//Tipos de datos
var numero_entero=44;
var cadena_texto="Hola que tal";
var verdadero_o_falso= true; //false

var numero_falso="33.5";

console.log(Number(numero_falso)+7);
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7);
console.log(String(numero_entero)+7);//Numero concatenado
//Number convierte el numero_falso en string
//parseInt convierte en numero entero
//parseFloat convierte en flotante
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);
//Con el typeof nos devuelve el tipo de datos