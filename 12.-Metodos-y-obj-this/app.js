
var persona = {

    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    },
    direccion:{
        pais: "Costa Rica",
        obtenerPais: function(){
            console.log("La direccion es en " + this.pais);
            
            var self = this;

            var nuevaDireccion = function(){
                console.log("La nueva direccion es en " + self.pais);
            }

            nuevaDireccion();

        }

    }

};

persona.nombre = "Andres";

persona.imprimirNombre();

persona.direccion.obtenerPais();