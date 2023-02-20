/*

While ej 3
Nombre: Silvina Gauto
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let claveIngresada;

	clave = "utn750";
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != clave) {
		claveIngresada = prompt("error, ingrese el número clave.")
	}

	alert("Clave ingresada correcta")
	
}//FIN DE LA FUNCIÓN
