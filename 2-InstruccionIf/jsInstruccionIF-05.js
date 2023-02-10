/**
IF EJ. 5
Nombre: Silvina Gauto
 */

function mostrar()
{
	//tomo la edad  
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad < 13 || edad  > 17) {
		alert('esta persona no es adolescente')
	}

}//FIN DE LA FUNCIÓN