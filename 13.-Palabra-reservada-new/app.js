
function Persona(){
    this.nombre = "Didier";
    this.apellido = "MT";
    this.edad = "22";

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + "(" + this.edad + ")";
    }

    //console.log("Pasando");
}

var juan = new Persona();

console.log(juan);
console.log(juan.nombre);
console.log(juan.imprimirPersona());