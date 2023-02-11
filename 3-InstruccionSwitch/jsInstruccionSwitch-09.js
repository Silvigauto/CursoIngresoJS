/* 
Switch EJ 9
Nombre: Silvina Gauto
*/ 


function mostrar()
{	

	let estacionIngresada; 
	let destino;
	let precioBase;
	//let mensaje;
	let precioFinal;
	let descuento;


	estacionIngresada =document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precioBase = 15000;

	
	//alert(estacionIngresada);

	

	switch(estacionIngresada) {
		case "Invierno": 
			switch (destino) {
				case "Bariloche":
					descuento = 1.2;
					break

				case "Cataratas":
				case "Cordoba":
					descuento = 0.9;
					break;
				case "Mar del plata":
					descuento = 0.8;
					break;
			}
		break;

		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = 0.8;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 0.9;
					break;
				case "Mar del plata":
					descuento = 1.2;
					break;

			}
		break;

		case "Otoño":
		case "Primavera": 
			switch(destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					descuento = 1.1;
					break;
				case "Cordoba":
					descuento = 1;
			}
		break;
		
	}




	precioFinal = precioBase * descuento;
	alert("Su precio final es de " + precioFinal);

}//FIN DE LA FUNCIÓN