function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("Ingrese un numero") 
	numeroIngresado = parseInt(numeroIngresado); 

	for (let i = 1; i <= numeroIngresado; i++) {
		if(i % 2 == 0 ) {
			document.write(i + "-")
		}
	}


}//FIN DE LA FUNCIÓN