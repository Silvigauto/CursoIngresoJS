/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{


	 let dividendo = document.getElementById("txtIdNumeroDividendo").value;
	 let divisor = document.getElementById("txtIdNumeroDivisor").value;

	 dividendo= parseInt(dividendo);
	 divisor = parseInt(divisor);

	 let resultado = dividendo % divisor;

	 alert("El resto es " + resultado);
	
}
