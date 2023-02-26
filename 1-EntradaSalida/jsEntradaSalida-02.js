/* ejercio e/s 2 original

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
function mostrar() {	
	let nombre;
	nombre = prompt ('Ingrese un nombre');
	alert(nombre);
}*/



//variables
let respuesta;

	do {
		respuesta = confirm("desea continuar?");
	} while (respuesta == true);

let nombre; 

let maximo;

let minimo;

let nombreMaximo;

let nombreMinimo;

let contador;

let bandera;

let bandera2;

let acumulador;

contador = 0;

acumulador = 0;

bandera = true;
bandera2 = true;

//////validaciones


//validacion nombre


		do {
			nombre = prompt ("Ingrese el nombre");
		} while(nombre == ""|| !isNaN(nombre) );


// validacion de opciones de strings

		do {
			tipo = prompt("Ingrese su tipo");
		} while (tipo != "gato" && tipo != "perro" && tipo != "hamster" );

		do {
			tipo = prompt("Ingrese su tipo");
		} while (tipo != "gato" && tipo != "perro" && tipo != "hamster" && tipo != "hamster" );

		do {
			tipo = prompt("Ingrese su tipo");
		} while (tipo != "gato" && tipo != "perro" && tipo != "hamster" && tipo != "hamster" && tipo != "hamster"  );

//Validacion respuesta si o no

		do {
			vacuna = prompt ("Ingrese vacuna si o no");
		} while (vacuna != "si" && vacuna != "no");




//validacion rango numeros


		do {
			edad = prompt("Ingrese la edad ")
			edad = parseInt(edad)

		} while (edad < 1 || edad > 20);



//validacion numero mayor positivo
		do {
			peso = prompt ("Ingrese el peso")
			peso = parseInt(peso)
		}  while (isNaN(peso) || peso < 0);

//maximo

if(bandera == true) {
	bandera = false;

} else {
	if(algo > algo) {

	}
}

//minimo 

if (bandera == true) {
	bandera = false;
} else {
	if(algo < algo) {

	}
}

//maximo y minimo 

if(bandera == true) {
	bandera = false; 
	maximo = ingresado
	minimo = ingresado;
	

} else {
	if(ingresado > maximo) {
		maximo = ingresado
	} else {
		if(ingresado < minimo) {
			minimo = ingresado
		}
	}
}

//mensaje
		let mensaje;

		mensaje = "\n  " + variable;
		mensaje += "\n"
		alert(mensaje)

		mensaje = "<br>" + variable;
		mensaje += "<br>" + variable;
		document.write(mensaje)

		

































