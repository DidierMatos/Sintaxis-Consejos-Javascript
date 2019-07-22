

var a = 10; // por valor asignado
var b = a

console.log("a: ", a) //10
console.log("b: ", b)   //10

a = 20

console.log("a: ", a) //20
console.log("b: ", b) //20

var c = {
    nombre: "Juana"
}

var d = c; // por referencia -- es decir ambas son afectas simultaneamente -- es como una regla

console.log("c: ", c) //Juana
console.log("d: ", d)   //Juana

c.nombre = "Maria"

console.log("c: ", c) //Maria
console.log("d: ", d) //Maria

d.nombre = "Pedro"

console.log("c: ", c) //Pedro
console.log("d: ", d) //Pedro