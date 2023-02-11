/* 
SWITCH EJ 1

Nombre: Silvina Gauto
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	let mensaje;
	

	switch (mesDelAño) {
		case 'Enero':
			//alert("que comiences bien el año!!!");
			mensaje = "que comiences bien el año!!!"
			break;
		case 'Marzo' :
			//alert("a clases!!!");
			mensaje = "a clases!!!"
			break;
		case 'Julio': 
			//alert("Felices fiesta!!!")
			mensaje = "Felices fiesta!!!"
			break;
		default : 
			mensaje = "No anda"
		


			
	}alert(mensaje)


}//FIN DE LA FUNCIÓN