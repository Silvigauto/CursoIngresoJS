/*

EJ 7
Nombre: Silvina Gauto


Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let suma  = 0;
	let contador = 0
	let numero;
	let respuesta; 

	do{
		
		do {
			numero = prompt("ingrese numero")
			numero = parseInt(numero);
			
		} while (isNaN(numero))

		contador++;
		suma += numero ;

		respuesta = confirm("Desea continuar")

	} while (respuesta == true)

	
	txtIdSuma.value = suma;
	txtIdPromedio.value = suma/contador

}//FIN DE LA FUNCIÓN










/* function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta == "si") {
		respuesta = prompt("Ingrese un numero");
		respuesta = parseInt(respuesta);

		while(isNaN(respuesta)) {
			respuesta = prompt("Ingrese otro numero");
			respuesta = parseInt(respuesta);
		}

		acumulador = respuesta + acumulador;

		contador++;
		
		respuesta = prompt("Desea continuar?")

	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN*/ 