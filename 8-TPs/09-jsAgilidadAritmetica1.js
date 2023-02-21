/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let respuesta;
let cuenta;
let numeroRandomUno;
let numeroRandomDos;
let operador;
let operadorRandom;





function comenzar() {

    
    numeroRandomUno = Math.floor(Math.random() * 10) + 1 
    numeroRandomDos = Math.floor(Math.random() * 10) + 1 
    
    /*operador = ["+", "-", "/" , "x"];

    operadorRandom = operador[Math.floor(Math.random() * operador.length)];*/
    


    document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;
    document.getElementById("txtIdOperador").value = operadorRandom;

    
	

}//FIN DE LA FUNCIÓN


function Responder() {
	respuesta = document.getElementById("txtIdRespuesta").value 

    cuenta = numeroRandomUno + numeroRandomDos
    
    
}//FIN DE LA FUNCIÓN
