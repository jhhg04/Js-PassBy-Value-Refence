// Los tipos primitivos siempre se pasan por valor
var a = 10;
var b = a;

console.log("a: ", a); // a:  10
console.log("b: ", b); // b:  10

a = 20;

console.log("a: ", a); // a:  20
console.log("b: ", b); // b:  10

// Los objetos siempre se pasan por refenrecia
var c = {
  nombre: "Juan",
};
var d = c;

console.log("c: ", c); // c:  { nombre: 'Juan' }
console.log("d: ", d); // d:  { nombre: 'Juan' }

c.nombre = "Maria";

console.log("c: ", c); // c:  { nombre: 'Maria' }
console.log("d: ", d); // d:  { nombre: 'Maria' }

d.nombre = "Pedro";

console.log("c: ", c); // c:  { nombre: 'Pedro' }
console.log("d: ", d); // d:  { nombre: 'Pedro' }
