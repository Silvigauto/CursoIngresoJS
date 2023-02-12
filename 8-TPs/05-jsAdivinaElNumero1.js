/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


let numeroSecreto; 
let contadorIntentos;
let numeroIngresado;

 

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	
  numeroSecreto = Math.floor(Math.random() * 101);
  //alert(numeroSecreto)
  
    
}

function verificar()
{
	numeroIngresado = document.getElementById(txtIdNumero).value;
	//alert(numeroIngresado)

  contadorIntentos = document.getElementById("txtIdIntentos").value
  contadorIntentos = parseInt(contadorIntentos);

  let contador;

  contador = 0;
  if (numeroIngresado == numeroSecreto) {
    alert("usted es ganador")
    contador++;
    // contador = contador + 1;
  } 

  else {
    if (numeroIngresado > numeroSecreto) {
      alert("Te falto para ")
    } 
  }
}

//Math.floor(Math.random() * 101);
