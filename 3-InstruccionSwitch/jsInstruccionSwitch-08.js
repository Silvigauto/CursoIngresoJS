/* 
Switch EJ 8
Nombre: Silvina Gauto
*/ 


function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	let mensaje;

	switch(destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "En este destino hace frio";
			break;
		default:
			mensaje = "En este destino hace calor";
	} alert(mensaje);

}//FIN DE LA FUNCIÓN