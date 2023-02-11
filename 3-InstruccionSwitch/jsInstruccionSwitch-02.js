/*
Switch ej. 2
Nombre: Silvina Gauto
*/


function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

	let mensaje;
	

	switch (mesDelAño) {

		case "Marzo": 
		case "Abril":
		case "Mayo":
		case "Junio":
			
			mensaje = "Falta para el inviero"
			break;


		case "Julio" :
		case "Agosto":
			
			mensaje = "abrigate que hace frio"
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			
			mensaje = "Ya pasamos el frio, ahora el calor"
			break;

		
			
	}
	alert(mensaje)




}//FIN DE LA FUNCIÓN