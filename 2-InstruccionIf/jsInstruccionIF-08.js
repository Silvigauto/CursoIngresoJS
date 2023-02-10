function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;


	if (estadoCivil == "Soltero" && edad > 17) {
		alert("Es soltero y no es menor")
	}

}//FIN DE LA FUNCIÓN