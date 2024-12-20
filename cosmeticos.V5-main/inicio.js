// Asegurarse de que el DOM esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      window.location.href = "productos.html";
    });
  }


  // Manejo del evento del botón Start
  const startBtn = document.getElementById('start-btn');

  startBtn.addEventListener('click', () => {
    alert('¡Comenzaste tu experiencia con YAMID!');
    window.location.href = "productos.html";
  });
});

