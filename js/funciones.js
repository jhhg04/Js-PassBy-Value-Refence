var a = 40;
// var a = 30; // Error si no encuantra a

function primeraFuncion() {
  // var a = 20; // Error si no encuantra a
  // console.log(a);
  console.log('Invocada');
}

// primeraFuncion()
// console.log(primeraFuncion()); // undefined si no tiene return

// var a = 40; // undefined si esta despues de la envocacion

// var miFuncion = primeraFuncion();
var miFuncion = primeraFuncion;
console.log(miFuncion);
