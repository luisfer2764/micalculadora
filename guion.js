// Obtenemos los elementos del DOM
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('button');
const limpiar = document.getElementById('limpiar');
const igual = document.getElementById('igual');

// Iteramos por todos los botones y les asignamos un evento click
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Si el botón es C, borramos el contenido del input
    if (this.id === 'limpiar') {
      resultado.value = '';
    }
    // Si el botón es =, evaluamos la expresión matemática en el input
    else if (this.id === 'igual') {
      resultado.value = eval(resultado.value);
    }
    // En otro caso, agregamos el valor del botón al input
    else {
      resultado.value += this.value;
    }
  });
});