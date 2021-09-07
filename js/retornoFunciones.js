// Function que Retorna un Primitivo
function obtenerAleatorio() {
  return Math.random();
}

function obtenerNombre() {
  return 'John';
}

function esMayor05() {
  if (obtenerAleatorio() > 0.5) {
    return true;
  } else {
    return false;
  }
}

// console.log(obtenerAleatorio() + 10);
// console.log(obtenerNombre() + ' Herrera');

// var nombre = obtenerNombre();
// console.log(nombre);

// console.log(esMayor05());
if (esMayor05()) {
  console.log('Es Mayor a 0.5');
} else {
  console.log('Es menor a 0.5');
}

// Function que Retorna un Objeto
function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

// Function que Retorna una Function
var persona = crearPersona('John', 'Herrera');
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

// function crearFuncion() {
//   return function () {
//     console.log('Me crearon!!!');
//   };
// }

// function crearFuncion() {
//   return function (nombre) {
//     console.log('Me creo ' + nombre);
//   };
// }

function crearFuncion() {
  return function (nombre) {
    console.log('Me creo ' + nombre);

    return function () {
      console.log('Segunda funcion');
    };
  };
}

var nuevaFuncion = crearFuncion();
// nuevaFuncion();
// nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();
