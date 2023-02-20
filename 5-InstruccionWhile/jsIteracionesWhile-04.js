/*
WHILE EJ 4
Nombre: Silvina Gauto
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let numeroTxt;


	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);
	numeroTxt = document.getElementById("txtIdNumero");

	while (numeroIngresado < 0 || numeroIngresado > 9) {
		numeroIngresado = prompt("Se ha ingresado un numero fuera del rango: ingrese un número entre 0 y 10.");
	}
	
	numeroTxt.value = numeroIngresado;
}//FIN DE LA FUNCIÓN