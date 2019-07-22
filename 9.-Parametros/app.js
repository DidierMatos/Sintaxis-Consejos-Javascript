/* function imprimir (nombre, apellido){

    apellido = apellido || "xxxx"; //condicion de que si apellido esta vacio utilize el valor xxxx

    console.log(nombre + " " + apellido);

}

//imprimir ("Didier", "MT");

////////////////////////

function imprimir2(persona){
    console.log(persona.nombre + " " + persona.apellido);

}

imprimir2({
    nombre: "Didier",
    apellido: "MT"
});

////////////////////////

function imprimir3(persona){
    console.log(persona.nombre + " " + persona.apellido);
    
    persona.nombre = "Maria";
}

var persona = {
    nombre: "Didier",
    apellido: "MT"
}

imprimir3(persona);
console.log(persona);

////////////////////// */

function imprimir4(fn){
    fn();
}

var persona = {
    nombre: "Didier",
    apellido: "MT"
}

var miFuncion = function() {
    console.log("miFuncion explicita");
}

imprimir4(miFuncion);

/* imprimir4( function(){
    console.log("Funcion anonima");
}) */