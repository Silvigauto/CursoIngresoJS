	/*
	Debemos lograr tomar el importe por ID ,
	transformarlo a entero (parseInt), luego
	mostrar el importe con un aumento del 10 %
	en el cuadro de texto "RESULTADO".*/
	function mostrarAumento()
	{
		let sueldo = document.getElementById("txtIdSueldo").value;

		let resultado = document.getElementById("txtIdResultado")

		
		sueldo = parseInt(sueldo);

		let sueldoAumento = sueldo + sueldo * 10/100;

		
		resultado.value = sueldoAumento;
	}
