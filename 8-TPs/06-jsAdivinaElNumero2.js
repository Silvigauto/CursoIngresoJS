/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroIngresado;
let numeroSecreto; 
let contadorIntentos;
let intentos;
let mensaje;

contadorIntentos = 0; 

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	numeroSecreto = Math.floor(Math.random()* (11-1) -1);
	alert("Se ha generado un numero secreto del 1 al 5");
	console.log(numeroSecreto)

}

function verificar()
{
	numeroIngresado = document.getElementById("txtIdNumero").value;

	numeroIngresado = parseInt(numeroIngresado);

	//alert(numeroIngresado)
	
	intentos = document.getElementById("txtIdIntentos");
	
	contadorIntentos++;
	intentos.value = contadorIntentos;

	if(numeroIngresado == numeroSecreto) {
		switch(contadorIntentos) {
			case 1:
				mensaje = "Lo hiciste a la primera!";
				break;
			case 2:
				mensaje = "Lo hiciste a la segunda";
				break;
			case 3:
				mensaje = "Lo hiciste a la tercera";
				break;
			case 4:
				mensaje = "Lo hiciste a la cuarta";
				break;
			case 5: 
				mensaje = "Lo hiciste a la quinta";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje = "Sos malisimo, le pegaste a la " + contadorIntentos + "° vez.";
				break;
			default: 
				mensaje= "Retirate por favor"

		}
		
	}

	else {
		if(numeroIngresado != numeroSecreto) {
			mensaje = "No le pegaste"
		}
	}
	alert(mensaje);
	
	

	

}