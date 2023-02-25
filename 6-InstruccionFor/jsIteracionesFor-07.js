function mostrar() {
	let numeroIngresado;
	let condatorDivisores = 0;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado)
	
	for (let i = 1; i <= numeroIngresado; i++ ) {
		if( numeroIngresado % i == 0) {
			document.write( i + "-" )
			condatorDivisores++;
			
		}
			
		
	}
	document.write("La cantidad de divisores es: " + condatorDivisores)


}//FIN DE LA FUNCIÓN