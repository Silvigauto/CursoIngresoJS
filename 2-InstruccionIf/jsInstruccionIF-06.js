/* 
IF EJ. 6 
NOMBRE: Silvina Gauto
*/ 

function mostrar()
{

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) {
		alert("Esta persona es mayor de edad");
	}

	else {
		if (edad > 12 && edad < 18) {
			alert("Esta persona es adolescente");
		}

		else {
			alert ("Esta persona es un niño");
		}
	}




}//FIN DE LA FUNCIÓN