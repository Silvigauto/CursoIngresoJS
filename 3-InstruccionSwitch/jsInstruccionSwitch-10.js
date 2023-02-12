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
					mensaje = "Se viaja"
					break
				default : 
				mensaje = "No se viaja"
			}
		break;
		case "Otoño" :
			switch(destinoIngresado) {
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje = "Se viaja"
					break
			}
		break;
		case "Primavera":
			switch(destinoIngresado) {
				case "Bariloche":
					mensaje = "No se viaja"
					break
				default:
					mensaje = "Se viaja;"
			}
		break
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN