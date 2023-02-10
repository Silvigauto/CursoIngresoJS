/* IF EJ 4
Nombre:Silvina Gauto
 */

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 13 && edad < 18) {
		alert("Esta persona es adolescente")
	}
	
	else {
		alert("Esta persona no es adolescente")
	}



}//FIN DE LA FUNCIÓN
