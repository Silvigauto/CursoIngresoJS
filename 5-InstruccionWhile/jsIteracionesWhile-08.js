/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/


function mostrar() {
		let numeroIngresado;
		let respuesta;
		let sumaPositivos = 0;
		let multiplicacionNegativos = 1;
		let banderaNegativos = false
		let banderaPositivos = false
		

		do {
			do {
				numeroIngresado = prompt("Ingrese numero")
				numeroIngresado = parseInt(numeroIngresado)
			} while (isNaN(numeroIngresado))

			if(numeroIngresado >= 0) {
				sumaPositivos += numeroIngresado;
				banderaPositivos = true
			}

			
			else {
				//if(numeroIngresado < 0) {
					multiplicacionNegativos *= numeroIngresado 
					banderaNegativos = true
				//}
			}

		respuesta = confirm("Desea continuar?")
			
		} while (respuesta == true)

	
	if(banderaPositivos) {
		txtIdSuma.value = sumaPositivos;
	} else {
		txtIdSuma.value = "No se ingresaron numeros positivos"
		
	} 

	if (banderaNegativos) {
		txtIdProducto.value = multiplicacionNegativos
	} else {
		txtIdProducto.value = "No se ingresaron numeros negativos"
	}
	
	


}//FIN DE LA FUNCIÓN 



/* RESPUSTA CORRECTA 
function mostrar()
{
	let existenNegativos;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	existenNegativos = false;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	

	do {
		do {
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		} while (isNaN(numeroIngresado));

		if(numeroIngresado >= 0) {
			sumaPositivos += numeroIngresado;
		} else {
			multiplicacionNegativos *= numeroIngresado;
			existenNegativos = true;
		}


		respuesta = confirm("Desea continuar");
	} while(respuesta == true);

	
	txtIdSuma.value = sumaPositivos;
	

	if (existenNegativos ) {

		txtIdProducto.value = multiplicacionNegativos;
	} else {
		txtIdProducto.value = "No ingreso numeros negativos";

	}

	


}//FIN DE LA FUNCIÓN */






/* while (respuesta) {

		//numeroIngresado = prompt("Ingrese un numero");
		//numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}



		respuesta = confirm("Desea continuar");
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos; */


/* var existenNegativos;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;


	existenNegativos=0;
	sumaPositivos=0;
	multiplicacionNegativos = 0;
	respuesta='si';

	

	while (respuesta == "si" ) {
		respuesta = prompt("Ingrese un numero");
		respuesta = parseInt(respuesta);

		while(isNaN(respuesta)) {
			respuesta = prompt("Error, ingrese otro numero");
			respuesta = parseInt(respuesta);
		}

		while(respuesta > 0) {
			sumaPositivos = respuesta + sumaPositivos;
			respuesta = prompt("Desea continuar?")
		}

		while(respuesta < 0) {
			multiplicacionNegativos = 1
			multiplicacionNegativos = respuesta * multiplicacionNegativos
			respuesta = prompt("Desea continuar")
		}

	
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos; */