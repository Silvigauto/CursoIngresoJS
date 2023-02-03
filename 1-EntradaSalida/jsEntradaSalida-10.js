/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = document.getElementById("txtIdImporte").value;
	let resultado = document.getElementById("txtIdResultado");
	let resta;

	importe = parseInt(importe);
	resta = importe - importe * .25;

	resultado.value = resta;



}
