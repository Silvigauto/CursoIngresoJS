/*
Switch EJ 4
Nombre: Silvina Gauto

*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	let mensaje; 

	switch (mesDelAño) {

		case "Febrero": 
			mensaje = "Este mes tiene 28 dias"
			break


		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias"
			break
		default : 
			mensaje = "Este mes tiene 31 dias"
		
		
		
	} alert(mensaje)
	
	



}//FIN DE LA FUNCIÓN