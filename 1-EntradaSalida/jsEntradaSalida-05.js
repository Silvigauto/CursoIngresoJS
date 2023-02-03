/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/


function mostrar()
{	
	let edad = document.getElementById("txtIdEdad").value;
	let nombre = document.getElementById("txtIdNombre").value;
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

