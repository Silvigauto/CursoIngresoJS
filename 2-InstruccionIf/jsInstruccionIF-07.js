/* 
IF EJ. 7
Nombre: Silvina Gauto
*/ 

function mostrar()
{	
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	

	if (edad < 18 && estadoCivil != "Soltero" ) {
		alert("Es muy pequeño para NO ser soltero.");

	}

}//FIN DE LA FUNCIÓN