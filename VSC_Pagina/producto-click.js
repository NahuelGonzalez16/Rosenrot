


// producto-click.js
document.addEventListener('DOMContentLoaded', () => {
  // detectar todos los links a pagos.html
  const enlaces = document.querySelectorAll('a[href^="pagos.html"]');

  enlaces.forEach(link => {
    // obtener el nombre del producto desde el texto interno
    const nombre = link.querySelector('.card__heading')?.textContent.trim() ||
                   link.getAttribute('data-nombre') || '';

    if (nombre) {
      // interceptar el clic
      link.addEventListener('click', e => {
        e.preventDefault();
        localStorage.setItem('productoSeleccionado', nombre);
        window.location.href = `pagos.html?producto=${encodeURIComponent(nombre)}`;
      });
    }
  });
});

$("input[name='expiry-data']").mask("00 / 00");
