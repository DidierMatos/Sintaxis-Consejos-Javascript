//Javascript es asincrono
/*Los lenguajes de programación asíncronos se basan en llamadas que pueden ser cumplidas ahora o en un futuro.
 Es decir, las variables pueden ser llenadas o asignadas en cualquier momento de la ejecución del programa.*/

function imprimir(){
    for(var i =0; i<8000; i++){

        console.log("Imprimio");

    }
}

function presionoClick(){

    console.log("Click en boton");

}

imprimir(); // JS ejecuta primero este metodo y hasta que termine ejecutara tu funcion al presionar el boton

// Para mas informaciòn visita: https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono