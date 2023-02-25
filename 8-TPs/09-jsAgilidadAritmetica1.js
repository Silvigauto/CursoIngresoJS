/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

let numeroRandomUno;
let numeroRandomDos;
let operadorRandom;
let operadorTxt;
let operador;

function comenzar() {

    numeroRandomUno = Math.floor(Math.random() * 10) + 1 //5
    numeroRandomDos = Math.floor(Math.random() * 10) + 1 //5
    
    operadorRandom = Math.floor(Math.random() * 4) + 1; //2

    switch(operadorRandom) {
        case 1: 
            operadorTxt = "+"
            operador = numeroRandomUno + numeroRandomDos;
            break;
        case 2: 
            operadorTxt = "-"
            operador = numeroRandomUno - numeroRandomDos;
            break;
        case 3: 
            operadorTxt = "*"
            operador = numeroRandomUno * numeroRandomDos;
            break;
        case 4: 
            operadorTxt = "/"
            operador = numeroRandomUno / numeroRandomDos;
            break;   
    } 

    document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;
    document.getElementById("txtIdOperador").value = operadorTxt;
}//FIN DE LA FUNCIÓN


function Responder() {
    let respuesta;

    respuesta = document.getElementById("txtIdRespuesta").value;
    respuesta = parseInt(respuesta)
    if(isNaN(respuesta)) {
        alert("ingresa un numero")    
    }
    else {
        if (respuesta == operador) {
            alert("correcto")
        } else {
        alert("incorrecto")
        }
    }

   

    
    
}//FIN DE LA FUNCIÓN


/* let numeroRandomUno;
let numeroRandomDos;
let operadorRandom;
let operadorTxt;

let operadorMas;
let operadorMenos;
let operadorMultiplicacion;
let operadorDivision;



function comenzar() {

    numeroRandomUno = Math.floor(Math.random() * 10) + 1 //5
    numeroRandomDos = Math.floor(Math.random() * 10) + 1 //5
    
    operadorRandom = Math.floor(Math.random() * 4) + 1; //2

    switch(operadorRandom) {
        case 1: 
            operadorTxt = "+"
            operadorMas = numeroRandomUno + numeroRandomDos
            break;
        case 2: 
            operadorTxt = "-"
            operadorMenos = numeroRandomUno - numeroRandomDos;
            break;
        case 3: 
            operadorTxt = "*"
            operadorMultiplicacion = numeroRandomUno * numeroRandomDos;
            break;
        case 4: 
            operadorTxt = "/"
            operadorDivision = numeroRandomUno / numeroRandomDos;
            break;   
    } 

    document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;
    document.getElementById("txtIdOperador").value = operadorTxt;
}//FIN DE LA FUNCIÓN


function Responder() {
    let respuesta;

    respuesta = document.getElementById("txtIdRespuesta").value;

    if(respuesta == operadorMas) {
        alert("Tu respuesta esta ok")
    } else {
        if (respuesta == operadorMenos) {
            alert("Tu respuesta esta ok")
        } else {
            if (respuesta == operadorMultiplicacion) {
                alert("Tu respuesta esta ok")
            } else {
                if(respuesta == operadorDivision ) {
                    alert("Tu respuesta esta ok")
                } else {
                    alert("respuesta incorrecta")
                }
            }
        }
     }
    
}//FIN DE LA FUNCIÓN*/ 