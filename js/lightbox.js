(function($) {
  $.fn.zoomImagen = function() {
    var zoom = 1.5;

    $(this).on('mouseover', function() {
      $(".galeria img").each(function() {
        $(this).css({
          'transform': 'scale(1)',  
          'z-index': '1',  
        });
      });

      $(this).css({
        'transform': 'scale(' + zoom + ')',  
        'z-index': '10', 
      });
    });

    $(this).on('mouseout', function(event) {
      if (event.relatedTarget === null || !$(event.relatedTarget).is($(this))) {
        var imagen = $(this);

        imagen.css({
          'transform': 'scale(1)',  
        });

        setTimeout(function() {
          imagen.css('z-index', '1');
        }, 100); 
      }
    });
  };
})(jQuery);

$(document).ready(function() {
  $(".galeria img").zoomImagen();

  const galleryImages = $(".galeria img");
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox-img");
  const closeBtn = $(".close");
  let currentIndex = 0;

  // Función para obtener solo las imágenes visibles después del filtro
  function getVisibleImages() {
      return galleryImages.filter(function() {
          return $(this).is(":visible"); // Solo considera imágenes visibles
      });
  }

  // Función para mostrar una imagen específica
  function showImage(index) {
      const visibleImages = getVisibleImages(); // Obtiene solo las imágenes visibles
      if (index >= 0 && index < visibleImages.length) {
          currentIndex = index;
          lightboxImg.attr("src", visibleImages.eq(currentIndex).attr("src"));
          lightbox.fadeIn(300);
      }
  }

  // Evento clic para abrir la imagen en el lightbox
  galleryImages.click(function() {
      const visibleImages = getVisibleImages(); // Obtiene solo las imágenes visibles
      const index = visibleImages.index(this); // Encuentra el índice de la imagen clicada
      showImage(index);
  });

  // Evento clic para cerrar el lightbox
  closeBtn.click(function() {
      lightbox.fadeOut(300);
  });

  // Evento clic fuera del lightbox para cerrarlo
  lightbox.click(function(e) {
      if ($(e.target).is(lightbox)) {
          lightbox.fadeOut(300);
      }
  });

  // Navegación con teclado
  $(document).keydown(function(e) {
      if (lightbox.is(":visible")) {
          const visibleImages = getVisibleImages(); // Obtiene solo las imágenes visibles

          if (e.key === "ArrowRight") {
              currentIndex = (currentIndex + 1) % visibleImages.length; // Avanza a la siguiente imagen
              showImage(currentIndex);
          } else if (e.key === "ArrowLeft") {
              currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length; // Retrocede a la anterior
              showImage(currentIndex);
          } else if (e.key === "Escape") {
              lightbox.fadeOut(300); // Cierra el lightbox con Escape
          }
      }
  });
});