/* Practica parcial*/ 


/* A)Nos ingresan una cantidad indeterminada 
de estadías de  vacaciones,
validando los datos ingresados:

-nombre del titular ,
-lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
-temporada(“alta”, “baja”),
-cantidad de días que durará el viaje.
-importe del viaje
-altura del pasajero
-peso del pasajero
-sexo pasajero (F o M o NB)
-Viaja con equipaje de mano?
-paga con mercado , tarjeta o efectivo*/ 


/* 
1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes


2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo



*/ 
function mostrar(){

	//Declaracion de variables
	let nombre; 
	let lugar;
	let temporada;
	let diasViaje;
	let importe;
	let altura;
	let peso;
	let sexo;
	let equipajeMano;
	let medioPago;
	let respuesta; 

	let lugarMaxDias;
	//let nombreLugarMaxDias
	//let flagMaxDias = true
	let acumuladorPM = 0;
	let acumuladorVG = 0;
	let acumuladorC = 0;


	let banderaPrimero = true
	//Inicializacion de contadores

	let contadorAlta = 0;
	let contadorBaja = 0; 
	let acumuladorPeso = 0;
	let acumuladorImporte = 0;

	

	do {

		//Pedido y validacion  de datos

		/*do {
			nombre = prompt("Ingrese su nombre");
		} while (nombre == "" )*/
		

		
		do {
			lugar = prompt("Ingrese lugar de estadia 1. Puerto Madryn 2.Villa Gesell 3. Cordoba");
			lugar = parseInt(lugar)
		} while (lugar != 1 && lugar != 2 && lugar != 3)  

		
		/*do {
			temporada = prompt("En que temporada viaja? 1. ALTA 2. BAJA") 
			temporada = parseInt(temporada)
		} while(temporada != 1 && temporada != 2) */

		
		

		do {
			diasViaje = prompt("Ingrese la cantidad de dias (en numero) que durara el viaje");
			diasViaje = parseInt(diasViaje)
		} while(isNaN(diasViaje)) 

		switch (lugar) {
			case 1: 
				acumuladorPM += diasViaje // 30
				break;
			case 2: 
				acumuladorVG += diasViaje //12 
				break
			case 3: 
				acumuladorC += diasViaje //15
				break;
		}

		

	
		/*do {
			importe = prompt("Ingrese importe del viaje") 
			importe = parseInt(importe)
		} while (isNaN(importe))*/


		
		
		/*do {
			altura = prompt("Ingrese su altura en cm")
			altura = parseInt(altura) 
		} while (isNaN(altura))*/

		

		/*do {
			peso = prompt("Ingrese su peso en kg")
			peso = parseInt(peso)
		} while (isNaN(peso)) */




		/*do {
			sexo = prompt("Ingrese su sexo 1. F 2. M 3. NB") 
			sexo = parseInt(sexo)
		} while (sexo != 1 && sexo != 2 && sexo != 3)*/

		
		/*do {
			equipajeMano = prompt("Viaja con equipaje de mano 1. SI O 2. NO") 
			parseInt(equipajeMano)
		} while (equipajeMano != 1 && equipajeMano != 2)

		
		do {
			medioPago = prompt("Ingrese su medio de pago 1. Mercado Pago 2. Tarjeta 3.Efectivo")
			medioPago = parseInt(medioPago)
		} while (medioPago != 1 && medioPago != 2 && medioPago != 3 )*/

		//switches

		/*switch(temporada) {
			case 1: 
				contadorAlta++;
				break;
			case 2: 
				contadorBaja++;
				break;
		}*/

		/*switch(lugar) {
			case 2: 
				acumuladorPeso = peso + acumuladorPeso;
				break;
		} */

		//acumuladores

		//acumuladorImporte += importe

		respuesta = confirm("Desea ingresar otra estadia de vacaciones") 
	} while(respuesta == true)


	//Mostrar contadores

	//console.log(contadorAlta) 
	//console.log(contadorBaja)
	//console.log(acumuladorPeso)
	//console.log(acumuladorImporte)

	//console.log(acumuladorPM)
	//console.log(acumuladorVG)
	//console.log(acumuladorC)

	if(acumuladorPM > acumuladorVG && acumuladorPM > acumuladorC) {
		lugarMaxDias = "Puerto Madryn";
	} else {
		if(acumuladorVG > acumuladorPM && acumuladorVG > acumuladorC) {
			lugarMaxDias="villa gesell"
		} else {
			if(acumuladorC > acumuladorPM && acumuladorC > acumuladorVG) {
				lugarMaxDias = "Cordoba"
			}
		}
	}

	console.log(lugarMaxDias)
	


}



























/* EJ 1 E/S
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"

unction mostrar()
{
	
alert("Esto funciona de maravilla")
	
}

*/


/* Clase de repaso
A -realizar un algoritmo para ingresar los datos por prompt de una pareja de viajero espaciales, 
necesitamos pedir los nombre s de los dos pasajeros y los pesos corporales de cada uno ,
al final deberemos mostrar un mensaje que diga 
“bienvenidos a Space x JOSE y MARIA , sus pesos son de 60 y 80 kilos cada uno ,y sumados con 150 kilos”
 al algoritmo anterior se le debe agregar el siguiente mensaje si los kilos superan los 250 kilos entre los dos pasajeros
 “ con el peso actual de 280 kilos , ustedes no pueden viajar”
*/ 
/*function mostrar()
{
	//alert("Esto funciona de maravilla");
	let nombre1;
	let nombre2;

	nombre1 = prompt("Ingrese nombre 1")
	nombre2 = prompt("Ingrese nombre 2")

	
}*/



























