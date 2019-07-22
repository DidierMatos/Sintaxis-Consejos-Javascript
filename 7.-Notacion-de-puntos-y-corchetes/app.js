
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Brazil",
        ciudad: "asd",
        edificio: {
            nombre: "Edificio principal",
            telefono: "4444-2222"
        }
    }
};

console.log(persona.nombre);
console.log(persona.direccion.pais);

persona.direccion.zipcode = 11101;
console.log(persona.direccion);
console.log(persona.direccion.zipcode);

console.log(persona.direccion.edificio.telefono);

var edificio = persona.direccion.edificio
edificio.nopiso = "8vo piso";
console.log(persona);

var campo = "";


//NOTACION DE CORCHETE
console.log(persona["direccion"]["pais"]);