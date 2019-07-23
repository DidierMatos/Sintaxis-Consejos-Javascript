 function Persona(){
    this.nombre = "Didier";
    this.apellido = "MT";
    this.edad = 30;

    this.imprimirInfo = function(){
        console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
    }
 }

Persona.prototype.pais = "Costa Rica";

Persona.prototype.imprimirInfo2 = function(){
    console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
}

 var didi = new Persona();
 console.log(didi);
 console.log(didi.pais);
 console.log(didi.imprimirInfo());
 console.log(didi.imprimirInfo2());
 //fer.imprimirInfo();

 Number.prototype.esPositivo = function(){ //no se recomienda poner prototipos en las variables primitivas
     if(this > 0){
         return true;
     }else{
         return false;
     }
 }  // a = 1     a.esPositivo()