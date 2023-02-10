/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */




function CalcularPrecio () {
 	
    let cantidadLamparas;
    let marca;
    let precioDescuento;

    let precio; 
    let descuento;
    let precioFinal;
    let impuesto;
    let total;
    

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    precioDescuento = document.getElementById("txtIdprecioDescuento");

    cantidadLamparas = parseInt(cantidadLamparas);

    precio = 35;

    if (cantidadLamparas >= 6) {
        descuento = 0.5;
    } //a

    else {
        if (cantidadLamparas == 5) {
            if (marca == "ArgentinaLuz") {
                descuento = 0.6;
            }

            else {
                descuento = 0.7;
                
            }
        
        } else {
                if (cantidadLamparas == 4) {
                    if (marca ==  "ArgentinaLuz" || marca == "FelipeLamparas") {
                        descuento = 0.75;
                    }

                    else {
                        descuento = 0.8;
                    }
                }

                else {
                    if (cantidadLamparas == 3) {
                        if(marca == "ArgentinaLuz") {
                            descuento = 0.85;
                        }

                        else {
                            if (marca == "FelipeLamparas") {
                                descuento = 0.9;
                            }
                            
                            else {
                                descuento = 0.95;
                            }

                        }
                        
                    }
                    
                }

            }
        
    
    }

    
    
    precioFinal = cantidadLamparas * precio * descuento;
    precioDescuento.value = precioFinal; 
    


    if (precioFinal >= 120) {
        impuesto = precioFinal * 10/100;
        total = precioFinal + impuesto;
        alert(" Usted pago " + total + " siendo " + impuesto + " el impuesto que se pago" );
    } 

}










/* let cantidadLamparas;
    let marca;
    let calculo;
    let precioDescuento;
    
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    precioDescuento = document.getElementById("txtIdprecioDescuento");

    cantidadLamparas = parseInt(cantidadLamparas);
    
    

    if (cantidadLamparas >= 6 ) {
        calculo = cantidadLamparas * 35 * 0.5;
        precioDescuento.value = calculo;
    }

    else {
       

       calculo = cantidadLamparas * 35;
       precioDescuento.value = calculo;
    }  
    
    
    
    if ( marca == "ArgentinaLuz")  {
        if(cantidadLamparas == 5) {
            calculo = cantidadLamparas * 35 * 0.6;
        }

        else {
          calculo = cantidadLamparas * 35   
        }

    } */



/* let cantidadLamparas;
    let marca;
    let precioDescuento;

    let precio; 
    let descuento;
    let precioFinal;
    

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    precioDescuento = document.getElementById("txtIdprecioDescuento");

    cantidadLamparas = parseInt(cantidadLamparas);

    precio = 35;

    if (cantidadLamparas >= 6) {
        descuento = 0.5
    } 

    else {
        descuento = 1

        if (marca == "ArgentinaLuz") {
            if (cantidadLamparas == 5) {
                descuento = 0.6;
            }
        } 

        else {
            descuento = 0.7
        }

    }
    
    precioFinal = cantidadLamparas * precio * descuento;
    precioDescuento.value = precioFinal; */




/* let cantidadLamparas;
    let descuento;
    let precioSinDescuento;
    let precioFinal;
    let marca;
    let porcentaje;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;
    precioSinDescuento = 35 * cantidadLamparas;

    if(cantidadLamparas >= 6){
    //regla de tres simple para sacar el porcentaje de un valor
    porcentaje = 50;
}
else
{
    if(cantidadLamparas == 5){
        if(marca == "ArgentinaLuz"){

            porcentaje = 40;
        }
        else{
            porcentaje = 30;
        }
    }
    else{
        //si compro menos cantidad de 6, no tengo descuento, es igual a numero 0
        porcentaje = 0;
    }
   
}
descuento = precioSinDescuento * porcentaje/100;
precioFinal = precioSinDescuento - descuento;

document.getElementById("txtIdprecioDescuento").value = precioFinal;
*/