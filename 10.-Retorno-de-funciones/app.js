

function obtenerAleatorio(){

    return Math.random();

}

function obtenerNombre(){
    return "Didier";
}

//console.log(obtenerNombre + "MT");

function esMayor05(){
    if(obtenerAleatorio()>0.5){
        return true;
    }else{
        return false;
    }
}

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else {
    console.log(esMayor05("Es menor a 0.5"));
}


function crearPersona (nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    };
}

var persona = crearPersona("MARIA", "PAZ");
//console.log(persona.nombre);
//console.log(persona.apellido);


function crearFuncion(){

    return function(nombre){
        console.log("Funcion creada por: " + nombre);

        return function(){
            console.log("Segunda funcion");
        }
    }

}

var nuevaFuncion = crearFuncion();
//nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();