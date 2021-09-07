// var persona = {
//   nombre: 'John',
//   apellido: 'Herrera',
//   imprimirNombre: function () {
//     console.log('Nombre Completo');
//   },
// };

// var nombre = 'John Harold';

// var persona = {
//   nombre: 'John',
//   apellido: 'Herrera',
//   imprimirNombre: function () {
//     console.log(nombre);
//   },
//   direccion: {
//     pais: 'Colombia',
//     obtenerPais: function () {
//       console.log(this);
//     },
//   },
// };

// persona.imprimirNombre();
// persona.direccion.obtenerPais();

// var persona = {
//   nombre: 'John',
//   apellido: 'Herrera',
//   imprimirNombre: function () {
//     console.log(this.nombre);
//   },
//   direccion: {
//     pais: 'Colombia',
//     obtenerPais: function () {
//       var nuevaDireccion = function () {
//         console.log('La direccion es en ' + this.pais);
//       };
//       nuevaDireccion();
//     },
//   },
// };

// persona.direccion.obtenerPais();

var persona = {
  nombre: 'John',
  apellido: 'Herrera',
  imprimirNombre: function () {
    console.log(this.nombre);
  },
  direccion: {
    pais: 'Colombia',
    obtenerPais: function () {
      var self = this;
      var nuevaDireccion = function () {
        console.log(self);
        console.log('La direccion es en ' + self.pais);
      };
      nuevaDireccion();
    },
  },
};

persona.direccion.obtenerPais();
