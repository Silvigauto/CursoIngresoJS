function mostrar() {
	condatorDivisores = 0;
	let numeroIngresado;
	numeroIngresado = prompt("Ingrese un numero"); 
	numeroIngresado = parseInt(numeroIngresado);

	for (let i = 1; i <= numeroIngresado; i++ ) {
		if( numeroIngresado % i == 0) {
			condatorDivisores++;
		} 

		
	}
if(condatorDivisores == 2) {
			console.log("Es numero primo")
		} else {
			console.log("no es primo")
		}
		

}//FIN DE LA FUNCIÓN