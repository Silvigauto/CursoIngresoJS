/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let legajo;
	let nacionalidad;


	//A
	edadIngresada = prompt("Ingrese su edad");
		
	while (edadIngresada > 90 || edadIngresada < 18) {
		edadIngresada = prompt("Ingrese una edad de 18 a 90 años")
	}

	document.getElementById("txtIdEdad").value = "Edad: " + edadIngresada

	//B
	sexoIngresado = prompt("Ingrese su sexo F o M")	
	
	while (sexoIngresado != "F" && sexoIngresado != "M") {
		sexoIngresado = prompt("Ingrese un sexo valido")
	}

	document.getElementById("txtIdSexo").value = "Sexo: " + sexoIngresado 

	//C
	estadoCivilIngresado = prompt("Ingrese su estado civil 1. SOLTERO 2. CASADO 3. DIVORCIADO 4. VIUDO")
	estadoCivilValidado = document.getElementById("txtIdEstadoCivil")

	while (estadoCivilIngresado != "1" && estadoCivilIngresado != "2" && estadoCivilIngresado != "3" && estadoCivilIngresado != "4") {
		estadoCivilIngresado = prompt("Error, ingrese una opcion valida:  1. SOLTERO 2. CASADO 3. DIVORCIADO 4. VIUDO ")
	}

	switch(estadoCivilIngresado) {
		case "1": 
			estadoCivilValidado.value = "Estado civil: Soltero/a";
			break;
		case "2":
			estadoCivilValidado.value = "Estado civil: Casado/a";
			break;
		case "3":
			estadoCivilValidado.value = "Estado civil: Divorciado/a";
			break;
		case "4":
			estadoCivilValidado.value = "Estado civil: Viudo/a";
			break;
			
	}

	
	//D
	sueldoBruto = prompt("Ingrese su sueldo bruto");

	while (sueldoBruto < 8000) {
		sueldoBruto = prompt("Ingrese un sueldo bruto valido (mayor a 8000)");
	}

	document.getElementById("txtIdSueldo").value = "Sueldo bruto: " + sueldoBruto; 

	//E

	legajo = prompt("Ingrese su numero de legajo") 
				 	
	while (legajo.length != 4 || legajo <1000) {
		legajo = prompt("ingrese un numero de 4 cifras, sin ceros a la izquierda")
	}

	document.getElementById("txtIdLegajo").value = legajo

	//F

	nacionalidad = prompt("Ingrese su nacionalidad A. ARGENTINOS E. EXTRANJEROS N. NACIONALIZADOS");

	while(nacionalidad != "A" || nacionalidad != "E" || nacionalidad != "N") {
		nacionalidad = prompt("Error, ingrese nacionalidad valida: A. ARGENTINOS E. EXTRANJEROS N. NACIONALIZADOS ")
	}


	/*do {
		nacionalidad = prompt("Ingrese nacionalidad valida: A. ARGENTINOS E. EXTRANJEROS N. NACIONALIZADOS ")
	} while (nacionalidad != "A" || nacionalidad != "E" || nacionalidad != "N") */




}

