/*
While ej. 5
Nombre: Silvina Gauto 


Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let txtIdSexo;

	txtIdSexo = document.getElementById("txtIdSexo");


	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("Error, ingrese f ó m .");
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN