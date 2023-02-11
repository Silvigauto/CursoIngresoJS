function mostrar()
{
	//var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);

	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada) {
		case "Invierno":
			switch(destinoIngresado) {
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default : 
					mensaje = "No se viaja";

			}
		break;
		case "Verano" :
			switch(destinoIngresado) {
				case "Mar del plata":
				case "Cataratas":
					mensaje
			}
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN