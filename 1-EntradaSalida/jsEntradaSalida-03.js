/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/////////////////////////////////////////////////////////////////////////

/* 
CLASE DE REPASO 

Ejercicio 1

Se debe ingresar por prompt: razón social de la empresa y nombre del titular.
El dni del titular y la fecha de inicio de actividades se ingresarán por id. 
Mostrar por alert todos los datos ingresados y el cuit de la empresa, sabiendo que el mismo está conformado por un código numérico según el tipo de persona 
(30 en el caso de empresas), un guión, el dni del titular, otro guión y un dígito verificador (será un número aleatorio entre 0 y 9).
Por ejemplo: 30-22666548-7

Ejercicio 2 

Se ingresará por id el valor de una compra de productos para el hogar. Se deberá agregar el iva (21%)
y  luego se deberá restar el 5% en concepto de compra mayorista. El programa deberá mostrar por alert importe bruto,
el iva, el importe con iva, el valor del descuento y el total a pagar.

*/


function mostrar()
{
	
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert(nombreIngresado); 



	/* ejercio 1 clase de repaso 
	
	let razonSocial;
	let nombreTitular;
	let dniIngresado;
	let fechaInicio;
	let cuit;
	let mensaje; 

	razonSocial = prompt("Ingrese razon social");
	nombreTitular = prompt("Ingrese nombre del titular");
	fechaInicio = prompt("Ingrese fecha de inicio de actividades")

	dniIngresado = document.getElementById("txtIdNombre").value;

	alert("Razon social: " + razonSocial);
	alert("Nombre del titular: " + nombreTitular );
	alert("Fecha de inicio de actividades " +  fechaInicio);
	alert("dni ingresado " + dniIngresado);
	alert("cuit: 30-" + dniIngresado + " -7" );

	*/ 

	/* Ejercicio 2 clase de repaso*/ 

	/*let valorCompra;
	let iva;
	let descuentoCinco;
	

	valorCompra = document.getElementById("txtIdNombre").value;

	valorCompra = parseInt(valorCompra);

	iva = valorCompra * 1.21;

	descuentoCinco = iva - 0.05; 

	//descuentoCinco = iva - iva  * 0.05;

	alert("Importe bruto " + valorCompra);
	alert("Importe con IVA " + iva )
	alert()
	*/
}

