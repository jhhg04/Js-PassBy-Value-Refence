// var juan = {};
// console.log(juan);

// function Persona() {
//   this.nombre = 'John';
//   this.apellido = 'Herrera';
//   this.edad = 30;
//   // console.log('paso por aqui');
//   this.imprimirPersona = function () {
//     return this.nombre + ' ' + this.apellido + '(' + this.edad + ')';
//   };
// }

// var juan = new Persona();
// console.log(juan);

// var juan = Persona();
// console.log(juan);

// var juan = new Persona();
// console.log(juan);
// console.log(juan.nombre);
// console.log(juan.imprimirPersona());

// Paso por parametros
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 30;
  this.imprimirPersona = function () {
    return this.nombre + ' ' + this.apellido + '(' + this.edad + ')';
  };
}

var juan = new Persona('John', 'Herrera');
console.log(juan);
console.log(juan.nombre);
console.log(juan.imprimirPersona());
