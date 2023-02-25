/* 
1: piedra
2: papel
3: tijera

*/ 



let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

let ganados;
let perdidos;
let empates;

let mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random () * 3 ) +1
	console.log(eleccionMaquina)



}//FIN DE LA FUNCIÓN

function piedra()
{
	switch(eleccionMaquina) {
		case 1: 
			mensaje = "empataste";
			ContadorDeEmpates++
			break;
		case 2: 
			mensaje ="Perdiste";
			ContadorDePerdidas++
			break;
		case 3: 
			mensaje = "Ganaste";
			break;

	} 
	alert(mensaje)

	empates = document.getElementById("txtIdEmpatadas");
	empates.value = ContadorDeEmpates 


}//FIN DE LA FUNCIÓN



function papel()
{
	switch(eleccionMaquina) {
		case 1: 
			alert("ganaste")
			break;
		case 2:
			alert("empataste")
			ContadorDeEmpates++
			break;
		case 3: 
			alert("Perdiste")
			break;
	}

	alert(mensaje)
}//FIN DE LA FUNCIÓN




function tijera()
{
	switch(eleccionMaquina) {
		case 1:
			alert("perdiste")
			break;
		case 2: 
			alert("ganaste")
			break;
		case 3:
			alert("empataste")
			ContadorDeEmpates++
			break;
	}
}//FIN DE LA FUNCIÓN



function mostrarResultado()
{
	

	 

	

	
}