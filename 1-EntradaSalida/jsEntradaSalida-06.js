/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let txtNumeroUno = document.getElementById("txtIdNumeroUno").value;
	let txtNumeroDos = document.getElementById("txtIdNumeroDos").value;

	let numeroUno = parseInt(txtNumeroUno);
	let numeroDos = parseInt(txtNumeroDos);

	alert("El total de la suma es " + (numeroUno + numeroDos)  );
	
}

