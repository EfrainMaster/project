'use strict'


var fecha= new Date();
var year= fecha.getFullYear();
var mes=fecha.getMonth();
var dia=fecha.getDate();
var hora=fecha.getHours();
var minutos= fecha.getMinutes();
var segundos= fecha.getSeconds();

console.log(fecha);
var textohora=`
	El año es: ${year}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es: ${hora}
	Los minutos son: ${minutos}
	Los segundos son: ${segundos}
`;

console.log(textohora);
console.log(Math.ceil(Math.random()*10));
