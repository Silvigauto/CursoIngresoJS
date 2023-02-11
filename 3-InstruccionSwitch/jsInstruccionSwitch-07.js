/* 
Switch EJ 7 
Nombre: Silvina Gauto
*/ 


function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	let mensaje;

	switch(destinoIngresado) {
		case "Bariloche":
			mensaje = "Oeste"
			break;
		case "Cataratas":
			mensaje = "Norte";
			break;
		case "Mar del plata":
			mensaje = "Este";
			break;
		case "Ushuaia" :
			mensaje = "Sur";
			break;
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN