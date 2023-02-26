/* Practica parcial  Ejercicio 1
La Premier League de Inglaterra necesita un sistema 
capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos,
 no se deben pueden ingresar números negativos. 
 


function mostrar () {

	//declaracion de variables
	let respuesta;
	let nombre; 
	let nacionalidad;
	let posicion;
	let cantidadRojas;
	let goles;
	let goleadorMaximo;
	let nombreGoleadorMaximo;
	let minimoRojas;
	let nombreMinimoRojas;
	let porcentaje;
	
	//bandera
	let bandera = true;
	let banderaRoja = true

	//contadores

	let contadorRojas = 0;
	let contadorIngleses = 0;
	let contadorJugadores = 0;
	

	do {

		//pedido y validacion de datos
		do {
			nombre = prompt("Ingrese su nombre")
		} while (nombre == "")

		do {
			nacionalidad = prompt("Ingrese su nacionalidad")
		} while (nacionalidad == "")

		
		do {
			posicion = prompt("Ingrese su poscicion Arquero Defensor Mediocampista Delantero")
		} while(posicion != "arquero" && posicion != "defensor" && posicion != "mediocampista" && posicion != "delantero" )

		do {
			cantidadRojas = prompt("Ingrese la cantidad de tarjetas de rojas recibidas")
			cantidadRojas = parseInt(cantidadRojas)
		} while (isNaN(cantidadRojas) || cantidadRojas < 0)

		

		do {
			goles = prompt("Ingrese la cantidad de goles hechos")
			goles = parseInt(goles)
		} while (isNaN(goles) || goles < 0)

		

		//condiciones

		if(bandera == true ) {
			bandera = false
			goleadorMaximo = goles;
			nombreGoleadorMaximo = nombre
			
		} else {
			if(goles > goleadorMaximo) {
				goleadorMaximo = goles;
				nombreGoleadorMaximo = nombre
			} 
			
		}

		if (nacionalidad  == "argentino") {
			if(banderaRoja == true) {
				minimoRojas = cantidadRojas
				nombreMinimoRojas = nombre
				banderaRoja = false;
			} else {
				if (cantidadRojas < minimoRojas) {
					minimoRojas = cantidadRojas
					nombreMinimoRojas = nombre
				}
			}
		}

		if (nacionalidad == "ingles") {
			contadorIngleses++;
			contadorJugadores++;
		} else {
			contadorJugadores++;
		}
		
		
		respuesta = confirm("Desea agregar mas jugadores?")

		
	} while (respuesta == true)

	//Goleador del torneo

	console.log(nombreGoleadorMaximo)

	//jugador con minimo de tarjetas
	console.log(nombreMinimoRojas)

	//porcentaje ingleses

	porcentaje = contadorIngleses / contadorJugadores * 100 ;
	
	console.log(porcentaje)

} */

/* Ejercicio 1 intento 1 
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.

function mostrar () {
	
	let respuesta;
	let nombreJugador;	
	let nacionalidad;
	let posicion;
	let cantidadTarjetasRojas;
	let cantidadGoles;

	let maximoGoleador;
	let nombreMaximoGoleador;

	let minimoTarjetasRojas;
	let nombreMinimoTarjetasRojas;

	let bandera1;
	let bandera2;

	let porcentaje;
	let mensaje;

	let contadorIngles ;
	let contadorTotal ;

	bandera1 = true;
	bandera2 = true;

	contadorIngles = 0;
	contadorTotal = 0;

	do {
		
		do {
			nombreJugador = prompt ("Ingrese el nombre del Jugador");
		} while(nombreJugador == ""|| !isNaN(nombreJugador) );

		do {
			nacionalidad = prompt ("Ingrese la nacionalidad");
		} while(nacionalidad == ""|| !isNaN(nacionalidad) );
		
		do {
			posicion = prompt("Ingrese su posicion");
		} while (posicion != "arquero" && posicion != "defensor" && posicion != "mediocampista" && posicion != "delantero" );

		do {
			cantidadTarjetasRojas = prompt("Ingrese la  cantidad de Tarjetas Rojas");
			cantidadTarjetasRojas = parseInt(cantidadTarjetasRojas);
		}  while (isNaN(cantidadTarjetasRojas) || cantidadTarjetasRojas < 0);

		

		do {
			cantidadGoles = prompt("Ingrese la  cantidad de Goles");
			cantidadGoles = parseInt(cantidadGoles);
		}  while (isNaN(cantidadGoles) || cantidadGoles < 0);


		if(bandera1 == true) {
			bandera1 = false;

			maximoGoleador = cantidadGoles;
			nombreMaximoGoleador = nombreJugador;
		} else {
			if(cantidadGoles > maximoGoleador) {
				maximoGoleador = cantidadGoles;
				nombreMaximoGoleador = nombreJugador;
			}
		}

		switch (nacionalidad) {
			case "argentino":
				if(bandera2 == true) {
					bandera2 = false;
					minimoTarjetasRojas = cantidadTarjetasRojas;
					nombreMinimoTarjetasRojas = nombreJugador;
				} else {
					if(cantidadTarjetasRojas < minimoTarjetasRojas) {
						minimoTarjetasRojas = cantidadTarjetasRojas;
						nombreMinimoTarjetasRojas = nombreJugador;
					}
				}
			break;
			case "ingles":
				contadorIngles++
			break;
		}

		contadorTotal++; 


		respuesta = confirm("Desea continuar agregando jugadores?")
	} while (respuesta == true)

	porcentaje = contadorIngles / contadorTotal * 100;



	mensaje = "\n El goleador del torneo es " + nombreMaximoGoleador;
	mensaje += "\n El jugador argentino con menos rojas recibidas es " + nombreMinimoTarjetasRojas;
	mensaje += "\n El porcentaje de jugadores ingleses de la liga es de " + porcentaje + "%";
	
	alert(mensaje)

} */


/* Practica Parcial Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



function mostrar( ) {

	let respuesta;
	let nombre;
	let edad;
	let tipo;
	let peso;
	let diagnostico;
	let vacuna;

	let bandera;
	let banderaMascotaMasJoven;

	let contSinVacuna;
	let contGatos;
	let contPerros;
	let contHamster;
	let contadorPerrosOtitis;

	let nombreVieja;
	let edadVieja;

	let tipoProblemasDigestivo;

	let mascotaMasJoven;
	let nombreMascotaMasJoven;
	let edadMascotaMasJoven;
	let diagnosticoMascotaMasJoven;

	//bandera

	bandera = true;
	banderaMascotaMasJoven = true;

	//contadores
	contSinVacuna = 0;
	contGatos = 0;
	contPerros = 0;
 	contHamster = 0;
	contadorPerrosOtitis = 0;

	do {	

		do {
			nombre = prompt ("Ingrese el nombre")
		} while(nombre == ""|| !isNaN(nombre) );


		do {
			edad = prompt("Ingrese la edad de su mascota 1-20")
			edad = parseInt(edad)

		} while (edad < 1 || edad > 20);


		do {
			tipo = prompt("Ingrese su tipo de mascota gato perro o hamster")
		} while (tipo != "gato" && tipo != "perro" && tipo != "hamster" );

		do {
			peso = prompt ("Ingrese el peso de su mascota")
			peso = parseInt(peso)
		}  while (peso < 0);

		do {
			diagnostico = prompt ("Ingrese el diagnostico de su mascota  problemas digestivos, otitis, alergias en la piel, parasitos, picazon de abeja")
		} while (diagnostico != "problemas digestivos", diagnostico != "otitis", diagnostico != "alergias de la piel", diagnostico != "parasitos", diagnostico != "picazon de abeja")

		do {
			vacuna = prompt ("Ingrese si tiene vacuna si o no")
		} while (vacuna != "si" && vacuna != "no");

		//a) Nombre de la mascota más vieja con la vacuna antirrábica
		//b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
		if (vacuna == "si") {
			if(bandera == true) {
				edadVieja = edad
				nombreVieja = nombre
				bandera = false
			} else {
				if(edad > edadVieja) {
					edadVieja = edad
					nombreVieja = nombre
				}
			}
		} else {
			if(diagnostico == "parasitos")  {
				contSinVacuna++;
			}
		}


		//c) El tipo de mascota con más ingresos por problemas digestivos.
		
		if(diagnostico ==  "problemas digestivos") {
			switch(tipo) {
				case "gato":
					contGatos++
					break;
				case "perro":
					contPerros++;
					break;
				case "hamster":
					contHamster++;
					break;
			}
		}

		//d) Nombre, edad y diagnóstico de la mascota más joven ingresada.

		if (banderaMascotaMasJoven == true) {
			mascotaMasJoven = edad;

			nombreMascotaMasJoven = nombre;
			edadMascotaMasJoven = edad;
			diagnosticoMascotaMasJoven = diagnostico;

			banderaMascotaMasJoven = false;
		} else {
			if(edad < mascotaMasJoven) {
				mascotaMasJoven = edad
				nombreMascotaMasJoven = nombre;
				edadMascotaMasJoven = edad;
				diagnosticoMascotaMasJoven = diagnostico;
			} 
			
		}

		// c y  e
		switch(diagnostico) {
			case "otitis": 
				if(tipo == "perro") {
					contadorPerrosOtitis++;
				}
				break;
			case "problemas digestivos":
				switch(tipo) {
					case "gato":
						contGatos++
						break;
					case "perro":
						contPerros++;
						break;
					case "hamster":
						contHamster++;
						break;
				}
				break;

		}


		respuesta = confirm("Desea ingresar el registro de otra mascota?")

	} while (respuesta == true); //FIN PEDIDO DE DATOS

	//a) Nombre de la mascota más vieja con la vacuna antirrábica
	console.log(edadVieja)

	//b) Cantidad de mascotas sin vacuna antirrábica y con parásitos 
	console.log(contSinVacuna)

	//c) El tipo de mascota con más ingresos por problemas digestivos.
	if(contGatos > contPerros && contGatos > contHamster) {
		tipoProblemasDigestivo = "gato";
	} else {
		if(contPerros > contGatos && contPerros > contHamster) {
			tipoProblemasDigestivo = "perro"
		} else {
			if(contHamster > contGatos && contHamster > contPerros) {
				tipoProblemasDigestivo = "Hamster"
			}
		}
	}

	// d) Nombre, edad y diagnóstico de la mascota más joven ingresada.

	console.log(nombreMascotaMasJoven + edadMascotaMasJoven + diagnosticoMascotaMasJoven )

	////e) Cantidad de perros ingresados por otitis. 
	console.log(contadorPerrosOtitis)

} //fin funcion */


/*ejercio 2 intento 1
	
Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica -- si vacuna antirabica y maximo
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos -- no vacuna antirabica 
c) El tipo de mascota con más ingresos por problemas digestivos.  --switch diagnostico case problemas dig
d) Nombre, edad y diagnóstico de la mascota más joven ingresada. --caso minimo
e) Cantidad de perros ingresados por otitis. --switch diagnostico case otitis




function mostrar () {
	let respuesta;
	let mensaje;

	let edad;
	let tipo;
	let peso;
	let diagnostico;
	let vacuna;

	let banderaMasVieja;
	let edadMasVieja;
	let nombreMasVieja;

	 
	let banderaMasJoven;
	let edadMascotaMasJoven;
	let nombreMascotaMasJoven;
	let diagnosticoMascotaMasJoven;

	let contadorMascotasSinVacunaConParasitos;
	let contadorGatos;
	let contadorPerros;
	let contadorHamster;

	let contadorPerrosOtitis;

	let nombreMascotaMasProblemasDigestivos;




	contadorMascotasSinVacunaConParasitos = 0;
	contadorGatos = 0;
	contadorPerros  = 0;
	contadorHamster = 0;
	contadorPerrosOtitis = 0;

	banderaMasVieja = true;
	banderaMasJoven = true;

	do {
		do {
			nombre = prompt ("Ingrese el nombre");
		} while(nombre == ""|| !isNaN(nombre) );

		do {
			edad = prompt("Ingrese la edad ")
			edad = parseInt(edad)

		} while (edad < 1 || edad > 20);

		do {
			tipo = prompt("Ingrese su tipo");
		} while (tipo != "gato" && tipo != "perro" && tipo != "hamster" );

		do {
			peso = prompt ("Ingrese el peso")
			peso = parseInt(peso)
		}  while (isNaN(peso) || peso < 0);


		do {
			diagnostico = prompt("Ingrese su diagnostico");
		} while (diagnostico != "problemas digestivos" && diagnostico != "otitis" && diagnostico != "alergias en la piel" && diagnostico != "parasitos");

		do {
			vacuna = prompt ("Ingrese vacuna si o no");
		} while (vacuna != "si" && vacuna != "no");

		switch (vacuna) {
			case "si":
				if(banderaMasVieja == true) {
					banderaMasVieja = false;
					edadMasVieja = edad
					nombreMasVieja = nombre;

				
				} else {
					if(edad > edadMasVieja) {
						edadMasVieja = edad
						nombreMasVieja = nombre;
					}	
				}
			break;
			case "no": 
				switch(diagnostico){
					case "parasitos":
						contadorMascotasSinVacunaConParasitos++;
					break;
					

				}
			break;
		}

		switch(diagnostico) {
			case "problemas digestivos":
				switch(tipo) {
					case "gato":
					contadorGatos++;
					break;
				case "perro":
					contadorPerros++;
					break;
				case "hamster":
					contadorHamster++;
					break;
				}
			break;
			case "otitis":
				switch(tipo) {
					case "perro":
						contadorPerrosOtitis++;
						break;
					
				}

			break;
		}
		
		if (banderaMasJoven == true) {
			banderaMasJoven = false;

			edadMascotaMasJoven = edad;
			nombreMascotaMasJoven = nombre;
			diagnosticoMascotaMasJoven = diagnostico;
		} else {
			if(edad < edadMascotaMasJoven) {
				edadMascotaMasJoven = edad;
				nombreMascotaMasJoven = nombre;
				diagnosticoMascotaMasJoven = diagnostico;
			}
		}
		
		respuesta = confirm("desea continuar?");
	} while (respuesta == true);


	//calcular el tipo de mascota con mas ingresos por problemas digestivos

	if (contadorGatos > contadorPerros && contadorGatos > contadorHamster) {
		nombreMascotaMasProblemasDigestivos = "Gatos"
	} else {
		if(contadorPerros > contadorGatos && contadorPerros > contadorGatos) {
			nombreMascotaMasProblemasDigestivos = "Perros"
		} else {
			if (contadorHamster > contadorPerros && contadorHamster > contadorGatos) {
				nombreMascotaMasProblemasDigestivos = "Hamster"
			}
		}
	}

	

	mensaje = "\n nombre de la mascota mas vieja con la vacuna antirrabica  " + nombreMasVieja;
	mensaje += "\n cantidad de mascotas sin vacuna antirrabica y con parasitos" + contadorMascotasSinVacunaConParasitos;
	mensaje += "\n tipo de mascota con mas ingresos por problemas digestivos" +  nombreMascotaMasProblemasDigestivos;
	mensaje += "\n Nombre, edad y diagnóstico de la mascota más joven ingresada " + nombreMascotaMasJoven + edadMascotaMasJoven + diagnosticoMascotaMasJoven;
	mensaje += "\n Cantidad de perros ingresados por otitis " + contadorPerrosOtitis;

	alert(mensaje)

} */


/* Practica Parcial Ejercicio 3 corregido?

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido 
b)Cantidad total de muebles de madera x 
c)El mueble de metal más alto --maximo altura NOMBREx 
d)El mueble más liviano -- minimo peso x 
e)Porcentaje de muebles de cada tipo de material x
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos) acumulador madera, acumnulador vidrio, acmetal x
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos) accmadera + 15 %x 

NOTA: Los precios no podran ser cero ni negativo.


function mostrar () {
	let respuesta;
	let mensaje;
	let nombreMueble;
	let materialMueble;
	let pesoMueble;
	let alturaMueble;
	let anchoMueble;
	let precioMueble;

	let contadorTotal;
	let contadorMadera;
	let contadorVidrio;
	let contadorMetal;

	let acumuladorMadera;
	let acumuladorVidrio;
	let acumuladorMetal;

	let banderaMetalMasAlto;
	let nombreMetalMasAlto;
	let metalAlto;
	

	let banderaMuebleMasLiviano;
	let nombreMasLiviano;
	let pesoMasLiviano;

	let porcentajeMadera;
	let porcentajeVidrio;
	let porcentajeMetal;
	
	
	let montoTotalRecaudado;
	let montoTotalRecaudadoMadera;
	let montoTotalRecaudadoMetal;
	let montoTotalRecaudadoVidrio;

	let montoTotalRecaudadoImpuestosDescuentos;

	let precioPromedio;
	let sumaContadores;

	//inicializacion de banderas;

	banderaMetalMasAlto = true;
	banderaMuebleMasLiviano = true;

	//inicializacion de contadores y acumuladores
	
	acumuladorMadera = 0;
 	acumuladorVidrio = 0;
	acumuladorMetal  = 0;

	contadorTotal = 0;
	contadorMadera = 0;
	contadorVidrio = 0;
	contadorMetal = 0;


	do {
		do {
			nombreMueble = prompt ("Ingrese el nombreMueble");
		} while(nombreMueble == ""|| !isNaN(nombreMueble) );

		do {
			materialMueble = prompt("Ingrese su materialMueble");
		} while (materialMueble != "madera" && materialMueble != "metal" && materialMueble != "vidrio" );

		do {
			pesoMueble = prompt ("Ingrese el pesoMueble")
			pesoMueble = parseInt(pesoMueble)
		}  while (isNaN(pesoMueble) || pesoMueble < 0);

		do {
			alturaMueble = prompt ("Ingrese el alturaMueble")
			alturaMueble = parseInt(alturaMueble)
		}  while (isNaN(alturaMueble) || alturaMueble < 0);

		do {
			anchoMueble = prompt ("Ingrese el anchoMueble")
			anchoMueble = parseInt(anchoMueble)
		}  while (isNaN(anchoMueble) || anchoMueble < 0);

		do {
			precioMueble = prompt ("Ingrese el precioMueble")
			precioMueble = parseInt(precioMueble)
		}  while (isNaN(precioMueble) || precioMueble < 0);

		switch(materialMueble) {
			case "madera":
				contadorMadera++;
				acumuladorMadera += precioMueble;
			break;
			case "vidrio":
				contadorVidrio++;
				acumuladorVidrio += precioMueble;
			break;
			case "metal":
				contadorMetal++;
				acumuladorMetal += precioMueble;
				if(banderaMetalMasAlto == true) {
					banderaMetalMasAlto = false;
					metalAlto = alturaMueble 

					nombreMetalMasAlto = nombreMueble;


				
				} else {
					if(alturaMueble > metalAlto) {
						metalAlto = alturaMueble 

						nombreMetalMasAlto = nombreMueble;
					}
				}
			break;

		}

		//minimo todos muebles

		if (banderaMuebleMasLiviano == true) {
			banderaMuebleMasLiviano = false;
			nombreMasLiviano = nombreMueble;
			pesoMasLiviano = pesoMueble;
		} else {
			if(pesoMueble < pesoMasLiviano) {
				nombreMasLiviano = nombreMueble;
				pesoMasLiviano = pesoMueble;
			}
		}



		respuesta = confirm("desea continuar?");
	} while (respuesta == true);

	//cuentas correspondientes a partir de contador y acumuladores


	montoTotalRecaudado = acumuladorMadera + acumuladorMetal + acumuladorVidrio;
	
	montoTotalRecaudadoMadera = acumuladorMadera * 1.15;
	montoTotalRecaudadoMetal = acumuladorMetal * 0.90;
	montoTotalRecaudadoVidrio = acumuladorVidrio * 0.90;

	montoTotalRecaudadoImpuestosDescuentos = montoTotalRecaudadoMadera + montoTotalRecaudadoMetal + montoTotalRecaudadoVidrio;

	sumaContadores = contadorMadera + contadorVidrio + contadorMetal;

	porcentajeMadera = contadorMadera / sumaContadores * 100 ;
	porcentajeVidrio = contadorVidrio / sumaContadores * 100;
	porcentajeMetal = contadorMetal / sumaContadores * 100;

	
	precioPromedio = montoTotalRecaudado / sumaContadores;

	//Desarrollo del mensaje final en base a resultadoss
	mensaje = "<br> El promedio de precio por mueble vendido es de " + precioPromedio; 
	mensaje += "<br> La cantidad total de muebles de madera es de " + contadorMadera;
	mensaje += "<br> El mueble de metal mas alto es el " + nombreMetalMasAlto;
	mensaje += "<br>  El mueble mas liviano es el" + nombreMasLiviano;
	mensaje += "<br> el porcentaje de cada mueble vendido sobre la cantidad total es de " + "<br> madera: " + porcentajeMadera + "<br> vidrio: "  +  porcentajeVidrio + "<br> metal: " + porcentajeMetal;
	mensaje += "<br> El monto total recaudo es de " + montoTotalRecaudado;
	mensaje += "<br> El monto total recaudado de los muebles de madera es de " + montoTotalRecaudadoMadera;
	mensaje += "<br> El monto total recaudado incluido impuestos y descuentos es de  " + montoTotalRecaudadoImpuestosDescuentos;
	
	


	document.write(mensaje);
} */ 


/*Practica Parcial Ejercicio 3 intento 1 sin correciones 
function mostrar () {
	let respuesta;
	let mensaje;
	let nombreMueble;
	let materialMueble;
	let pesoMueble;
	let alturaMueble;
	let anchoMueble;
	let precioMueble;

	let contadorTotal;
	let contadorMadera;
	let contadorVidrio;
	let contadorMetal;

	let acumuladorMadera;
	let acumuladorVidrio;
	let acumuladorMetal;

	let banderaMetalMasAlto;
	let nombreMetalMasAlto;
	let metalAlto;
	

	let banderaMuebleMasLiviano;
	let nombreMasLiviano;
	let pesoMasLiviano;

	let porcentajeMadera;
	let porcentajeVidrio;
	let porcentajeMetal;
	
	
	let montoTotalRecaudado;
	let montoTotalRecaudadoMadera;

	let precioPromedio;
	let sumaContadores;

	//inicializacion de banderas;

	banderaMetalMasAlto = true;
	banderaMuebleMasLiviano = true;

	//inicializacion de contadores y acumuladores
	
	acumuladorMadera = 0;
 	acumuladorVidrio = 0;
	acumuladorMetal  = 0;

	contadorTotal = 0;
	contadorMadera = 0;
	contadorVidrio = 0;
	contadorMetal = 0;


	do {
		do {
			nombreMueble = prompt ("Ingrese el nombreMueble");
		} while(nombreMueble == ""|| !isNaN(nombreMueble) );

		do {
			materialMueble = prompt("Ingrese su materialMueble");
		} while (materialMueble != "madera" && materialMueble != "metal" && materialMueble != "vidrio" );

		do {
			pesoMueble = prompt ("Ingrese el pesoMueble")
			pesoMueble = parseInt(pesoMueble)
		}  while (isNaN(pesoMueble) || pesoMueble < 0);

		do {
			alturaMueble = prompt ("Ingrese el alturaMueble")
			alturaMueble = parseInt(alturaMueble)
		}  while (isNaN(alturaMueble) || alturaMueble < 0);

		do {
			anchoMueble = prompt ("Ingrese el anchoMueble")
			anchoMueble = parseInt(anchoMueble)
		}  while (isNaN(anchoMueble) || anchoMueble < 0);

		do {
			precioMueble = prompt ("Ingrese el precioMueble")
			precioMueble = parseInt(precioMueble)
		}  while (isNaN(precioMueble) || precioMueble < 0);

		switch(materialMueble) {
			case "madera":
				contadorMadera++;
				acumuladorMadera += precioMueble;
			break;
			case "vidrio":
				contadorVidrio++;
				acumuladorVidrio += precioMueble;
			break;
			case "metal":
				contadorMetal++;
				acumuladorMetal += precioMueble;
				if(banderaMetalMasAlto == true) {
					banderaMetalMasAlto = false;
					metalAlto = alturaMueble 

					nombreMetalMasAlto = nombreMueble;


				
				} else {
					if(alturaMueble > metalAlto) {
						metalAlto = alturaMueble 

						nombreMetalMasAlto = nombreMueble;
					}
				}
			break;

		}

		//minimo todos muebles

		if (banderaMuebleMasLiviano == true) {
			banderaMuebleMasLiviano = false;
			nombreMasLiviano = nombreMueble;
			pesoMasLiviano = pesoMueble;
		} else {
			if(pesoMueble < pesoMasLiviano) {
				nombreMasLiviano = nombreMueble;
				pesoMasLiviano = pesoMueble;
			}
		}



		respuesta = confirm("desea continuar?");
	} while (respuesta == true);

	//cuentas correspondientes a partir de contador y acumuladores


	montoTotalRecaudado = acumuladorMadera + acumuladorMetal + acumuladorVidrio;
	montoTotalRecaudadoMadera = acumuladorMadera * 1.15;

	porcentajeMadera = contadorMadera / contadorTotal * 100 ;
	porcentajeVidrio = contadorVidrio / contadorTotal * 100;
	porcentajeMetal = contadorMetal / contadorTotal * 100;

	sumaContadores = contadorMadera + contadorVidrio + contadorMetal;

	precioPromedio = montoTotalRecaudado / sumaContadores;

	//Desarrollo del mensaje final en base a resultadoss

	mensaje = "\n La cantidad total de muebles de madera es de " + contadorMadera;
	mensaje += "\n El monto total recaudo es de " + montoTotalRecaudado;
	mensaje += "\n El monto total recaudado de los muebles de madera es de " + montoTotalRecaudadoMadera;
	mensaje += "\n el porcentaje de cada mueble vendido sobre la cantidad total es de " + porcentajeMadera + "" +  porcentajeVidrio + "" + porcentajeMetal;
	mensaje += "\n El promedio de precio por mueble vendido es de " + precioPromedio; 


	alert(mensaje)

}*/




/* Practica parcial ejercicio Octavio Classroom
A)Nos ingresan una cantidad indeterminada 
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
-paga con mercado , tarjeta o efectivo 



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
	let pesoMaximo;
	let pesoMinimo;
	let nombreMaximo;
	let nombreMinimo;

	// f

	let lugarMayorImporte;
	let lugarMinimoImorte;
	let maximoImporte;
	let minimoImporte;
	//Inicializacion de contadores

	let contadorAlta = 0;
	let contadorBaja = 0; 
	let acumuladorPeso = 0;
	let acumuladorImporte = 0;

	
	

	do {

		//Pedido y validacion  de datos

		/*do {
			nombre = prompt("Ingrese su nombre");
		} while (nombre == "" )
		
		
		
		do {
			lugar = prompt("Ingrese lugar de estadia 1. Puerto Madryn 2.Villa Gesell 3. Cordoba");
			lugar = parseInt(lugar)
		} while (lugar != 1 && lugar != 2 && lugar != 3)  

		
		do {
			temporada = prompt("En que temporada viaja? 1. ALTA 2. BAJA") 
			temporada = parseInt(temporada)
		} while(temporada != 1 && temporada != 2) 

		
		

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

		//f-el lugar donde se pagó el mayor importe

		do {
			lugar = prompt("Ingrese lugar de estadia 1. Puerto Madryn 2.Villa Gesell 3. Cordoba");
			lugar = parseInt(lugar)
		}  while (lugar != 1 && lugar != 2 && lugar != 3) 
		//while (lugar != 1 && lugar != 2 && lugar != 3) 
	
		do {
			importe = prompt("Ingrese importe del viaje") 
			importe = parseInt(importe)
		} while (isNaN(importe))

		if(banderaPrimero == true) {
			maximoImporte = importe
			minimoImporte = importe
			lugarMayorImporte = lugar
		} else {
			if (importe > maximoImporte) {
				maximoImporte = importe
				lugarMayorImporte = lugar
			} else {
				if(importe < maximoImporte) {
					minimoImporte = importe
					
				}
			}
		}

		
		
		do {
			altura = prompt("Ingrese su altura en cm")
			altura = parseInt(altura) 
		} while (isNaN(altura))

		

		do {
			peso = prompt("Ingrese su peso en kg")
			peso = parseInt(peso)
		} while (isNaN(peso)) 

		if(banderaPrimero == true) {
			pesoMaximo = peso;
			pesoMinimo = peso;

			nombreMaximo = nombre
			nombreMinimo = nombre; 
			banderaPrimero = false;
		} else {
			if(peso > pesoMaximo) {
				pesoMaximo  = peso;
				nombreMaximo = nombre
			} else {
				if(peso < pesoMinimo) {
					pesoMinimo = peso;
					nombreMinimo = nombre;
				}
			}

		}




		do {
			sexo = prompt("Ingrese su sexo 1. F 2. M 3. NB") 
			sexo = parseInt(sexo)
		} while (sexo != 1 && sexo != 2 && sexo != 3)

		
		do {
			equipajeMano = prompt("Viaja con equipaje de mano 1. SI O 2. NO") 
			parseInt(equipajeMano)
		} while (equipajeMano != 1 && equipajeMano != 2)

		
		do {
			medioPago = prompt("Ingrese su medio de pago 1. Mercado Pago 2. Tarjeta 3.Efectivo")
			medioPago = parseInt(medioPago)
		} while (medioPago != 1 && medioPago != 2 && medioPago != 3 )

		//switches

		switch(temporada) {
			case 1: 
				contadorAlta++;
				break;
			case 2: 
				contadorBaja++;
				break;
		}

		//!!!!!!!!!!!!!!!!!!!!!!!!COMBINAR LOS DOS SWITCH DE LUGAR!!!!!!!!!!!!!!!!

		/*switch(lugar) {
			case 2: 
				acumuladorPeso = peso + acumuladorPeso;
				break;
		} 

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

	//e

	console.log("El nombre de la persona con el peso maximo es " + nombreMaximo)
	console.log("El nombre de la persona con el peso minimo es " + nombreMinimo)
	 

	//f
	console.log("El lugar donde se pago el mayor importe es " + lugarMayorImporte)
	

} */




/* EJ 1 E/S ORIGINAL
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"

function mostrar(){
	
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


function mostrar()
{
	//alert("Esto funciona de maravilla");
	let nombre1;
	let nombre2;

	nombre1 = prompt("Ingrese nombre 1")
	nombre2 = prompt("Ingrese nombre 2")

	
}*/



























