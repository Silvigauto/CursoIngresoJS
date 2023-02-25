/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/



function mostrar() {	// declarar variables
	let numeroIngresado;
	let banderaDelPrimero = true
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	do {
		do {
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)
		} while(isNaN(numeroIngresado))

		if (banderaDelPrimero) {
		numeroMaximo = numeroIngresado
		numeroMinimo = numeroIngresado

		banderaDelPrimero = false
		} else {
			if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado
			} else {
				if(numeroIngresado < numeroMinimo) {
					numeroMinimo = numeroIngresado
				}
			}
		}

	respuesta = confirm("Desea continuar?")

	} while (respuesta == true)

	

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN  



/*  RESPUESTA CORRECTA CLASE


function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;



	//iniciar variables
	banderaDelPrimero = true;
	

	do {
		do {
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		} while (isNaN(numeroIngresado))

		if(banderaDelPrimero == true) { //solo la primera vez
			banderaDelPrimero = false;

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		} else {
			//no es la primera vez
			//max y min tinene valor

			if(numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			} else {
				//numeroMinino = numeroIngresado: // NO 10 11 12
				
				  
				
				if(numeroIngresado < numeroMinimo) {
					numeroMinimo = numeroIngresado
				}
			}
		}


		respuesta = confirm("Desea continuar");
	} while (respuesta == true)

	
	txtIdMaximo.value=numeroMaximo;

	txtIdMinimo.value=numeroMinimo;


}//FIN DE LA FUNCIÓN  */





/* while(respuesta=="si")
	{
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)) {
			numeroIngresado = prompt("error, ingrese un numero valido")
			numeroIngresado = parseInt(numeroIngresado);
		}

		while(banderaDelPrimero == 0 ) {
			numeroMaximo = numeroIngresado
			banderaDelPrimero++;
		}

		
		
		respuesta=prompt("desea continuar?");
	} */