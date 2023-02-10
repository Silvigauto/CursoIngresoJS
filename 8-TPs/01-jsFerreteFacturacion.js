/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

TP E/S 01
Nombre: Silvina Gauto
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    

    suma = precioUno + precioDos + precioTres;

    alert(suma);
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3 ;

    alert(promedio);

}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let resultadoFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    resultadoFinal = suma + suma * .21;

    alert(resultadoFinal);
	
}