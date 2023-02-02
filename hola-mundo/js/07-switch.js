'use strict'

//Switch
//console.log("Switch");

var edad=75;
var imprime="";

switch(edad)
{
	case 18:
	imprime="Eres mayor de edad";
	break;
	case 25:
	imprime="Eres adulto";
	break;
	case 40:
	imprime="Crisis de los cuarenta";
	break;
	case 75:
	imprime="Eres un Anciano";
	break;
	default:
	imprime="No tienes categoria";
	break;


}
console.log(imprime);
