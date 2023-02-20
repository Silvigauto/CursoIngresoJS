/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */


function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;

	let sumaPositivos = 0;
	let sumaNegativos=0;
	let contadorNegativos= 0;
	let contadorPositivos = 0;
	let contadorPares = 0;
	let contadorCero = 0

	

	do {
		do {
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		} while (isNaN(numeroIngresado));

		if (numeroIngresado < 0) {
			sumaNegativos = numeroIngresado + sumaNegativos;
			contadorNegativos++;
			
		} else {
			if (numeroIngresado > 0) {
				sumaPositivos = numeroIngresado + sumaPositivos;
				contadorPositivos++;
			} else {
				if (numeroIngresado == 0) {
					contadorCero++
				}
			}
		}

		if(numeroIngresado % 2 === 0) {
				contadorPares++
			}


		respuesta = confirm("Desea continuar ingresando numeros?")

	} while (respuesta == true)

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferenciaNegativosPositivos = sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es :"+sumaNegativos );
	document.write("<br> La suma de los positivos es " + sumaPositivos);
	document.write("<br> La cantidad de positivos es " + contadorPositivos);
	document.write("<br> La cantidad de los negativos es " + contadorNegativos);
	document.write("<br> La cantidad de ceros es " + contadorCero);
	document.write("<br> El promedio de los postivos es " + promedioPositivos);
	document.write("<br> El promedio de los negativos es " + promedioNegativos);
	document.write("<br> La diferencia entre positivos y negativos es " + diferenciaNegativosPositivos);
	document.write("<br> La cantidad de numeros pares es " + contadorPares )
}//FIN DE LA FUNCIÓN