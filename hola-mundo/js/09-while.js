'use strict'
//While
var year=2021;
/*
while(year<=2090){

	console.log("Estamos en el año: "+ year);

	year++;
}*/
while(year!=1991){

	console.log("Estamos en el año: "+ year);

	if(year==2003){
		break;
	}

	year--;
}
var years=30;
//Do-while
do{
	alert("Ejecutar solo cuando sea diferente a 20");
	//console.log("Ejecutar solo cuando sea diferente a 20");
	years--;
}while(years>25)