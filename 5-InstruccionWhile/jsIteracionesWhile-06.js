/*
WHILE EJ. 6
Nombre: Silvina Gauto;

*/ 


function mostrar()
{
	let numeroIngresado;
	let contador;
	let acumulador; 

	contador = 0;
	acumulador = 0;

	while(contador < 5) {
		contador ++;

		numeroIngresado = prompt('Ingrese un numero')
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)) {
			numeroIngresado = prompt ('Ingrese un numero valido')
			numeroIngresado = parseInt(numeroIngresado)
		}

		acumulador = numeroIngresado + acumulador;


		
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/contador
	

}//FIN DE LA FUNCIÓN

/*let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;


	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado)
	
	while(contador < 5  ) {
		
		acumulador = acumulador + numeroIngresado;
		contador++;
		
		numeroIngresado = prompt("Ingrese otro numero");
		numeroIngresado = parseInt(numeroIngresado)
		
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5; */