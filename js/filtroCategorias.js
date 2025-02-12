// Filtrar imágenes según la categoría
function filterImages(category) {
  const allItems = document.querySelectorAll('.galeria img');
  
  allItems.forEach(item => {
    const itemCategory = item.getAttribute('data-category'); // Obtener la categoría de la imagen
    
    if (category === 'all' || itemCategory === category) {
      item.style.display = 'block'; // Mostrar imagen
    } else {
      item.style.display = 'none'; // Ocultar imagen
    }
  });
}

// Agregar eventos a los botones de filtro
document.querySelectorAll('#filters button').forEach(button => {
  button.addEventListener('click', (event) => {
    const category = event.target.getAttribute('data-category');
    filterImages(category);
  });
});
