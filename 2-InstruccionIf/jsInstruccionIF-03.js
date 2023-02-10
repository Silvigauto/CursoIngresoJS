/*EJ. 3 
Nombre: Silvina Gauto*/ 
function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 18) {
		alert("Esta persona es mayor de edad");
	}

	else {
		alert("Esta persona es menor de edad")
	} 
		
	

}//FIN DE LA FUNCIÓN