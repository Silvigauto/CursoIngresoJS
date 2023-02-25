/*
WHILE EJ. 6
Nombre: Silvina Gauto;

*/ 


function mostrar()
{
	let contador;
	let suma;
	let numeroIngresado;

	contador = 0;
	suma = 0

	do {
		do{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado)
		} while (isNaN(numeroIngresado))

		contador++;
		suma += numeroIngresado
	} while(contador < 5)

	txtIdSuma.value = suma
	txtIdPromedio.value = suma/contador
	
	

}//FIN DE LA FUNCIÓN


/* Clase respuesta correcta

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


*/ 



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