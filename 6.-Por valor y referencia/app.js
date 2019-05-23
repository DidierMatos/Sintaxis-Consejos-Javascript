

var a = 10; // por valor asignado
var b = a

console.log("a: ", a)
console.log("b: ", b)

a = 20

console.log("a: ", a)
console.log("b: ", b)

var c = {
    nombre: "Juana"
}

var d = c; // por referencia -- es decir ambas son afectas simultaneamente -- es como una regla

console.log("c: ", c)
console.log("d: ", d)

c.nombre = "Maria"

console.log("c: ", c)
console.log("d: ", d)

d.nombre = "Pedro"

console.log("c: ", c)
console.log("d: ", d)