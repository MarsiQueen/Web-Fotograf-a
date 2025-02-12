//Rápido "Volver arriba"

document.addEventListener('DOMContentLoaded', () => {
  // Crear botón de "Volver Arriba"
  const volverArribaBtn = document.createElement('button');
  volverArribaBtn.innerText = '↑';
  volverArribaBtn.id = 'volver-arriba';
  volverArribaBtn.style.position = 'fixed';
  volverArribaBtn.style.bottom = '20px';
  volverArribaBtn.style.right = '20px';
  volverArribaBtn.style.padding = '10px';
  volverArribaBtn.style.display = 'none'; // Oculto por defecto
  volverArribaBtn.style.fontSize = '20px';
  volverArribaBtn.style.cursor = 'pointer';
  document.body.appendChild(volverArribaBtn);

  // Mostrar/Ocultar botón según el scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      volverArribaBtn.style.display = 'block';
    } else {
      volverArribaBtn.style.display = 'none';
    }
  });

  // Volver al inicio al hacer clic en el botón
  volverArribaBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
