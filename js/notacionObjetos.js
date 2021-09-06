var persona = {
  nombre: 'John',
  apellido: 'Herrera',
  edad: 30,
  direccion: {
    pais: 'Colombia',
    ciudad: 'Bogota',
    edificio: {
      nombre: 'Edificio Principal',
      telefono: '555-232323',
    },
  },
};

// Notacion Punto
console.log(persona.direccion.pais);

persona.direccion.zipCode = 11101;
console.log(persona.direccion);
console.log(persona.direccion.zipCode);

console.log(persona.direccion.edificio.telefono);
var edificio = persona.direccion.edificio;
edificio.nopiso = '8vo piso';
console.log(persona);

// Notacion Corchete
console.log(persona['nombre']);
console.log(persona['direccion']['pais']);
console.log(persona['direccion']['edificio']['nombre']);

var campo = 'edad';
console.log(persona[campo]);

var campo2 = 'edad2';
console.log(persona[campo2]);
