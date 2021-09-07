// guardarLocalStorage();
obtenerLocalStorage();

function obtenerLocalStorage() {
  if (localStorage.getItem('nombre')) {
    let nombre = localStorage.getItem('nombre');
    let persona = JSON.parse(localStorage.getItem('persona'));
    console.log(nombre);
    console.log(persona);
  } else {
    console.log('No hay entradas en localStorage');
  }
  // let nombre = localStorage.getItem('nombre');
  // let persona = localStorage.getItem('persona');
  // let persona = JSON.parse(localStorage.getItem('persona'));
  // console.log(nombre);
  // console.log(persona);
}

function guardarLocalStorage() {
  let persona = {
    nombre: 'John',
    edad: 31,
    correo: 'john@gmail.com',
    coords: {
      lat: 10,
      lng: -10,
    },
  };
  let nombre = 'Edwin';
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('persona', JSON.stringify(persona));
}
