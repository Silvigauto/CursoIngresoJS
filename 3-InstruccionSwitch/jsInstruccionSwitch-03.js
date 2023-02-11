/*
Switch EJ. 3
Nombre: Silvina Gauto

*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	let mensaje;

	switch (mesDelAño) {
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias";
			break
		default : 
			mensaje = "Este mes tiene 30 dias o mas";
	}

	alert(mensaje)
	
	


}//FIN DE LA FUNCIÓN