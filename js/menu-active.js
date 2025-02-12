    // Función para activar el enlace correspondiente según la página actual
    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual
        const menuLinks = document.querySelectorAll('.menu a'); // Selecciona todos los enlaces del menú

        menuLinks.forEach(link => {
            const href = link.getAttribute('href'); // Obtiene el atributo 'href' del enlace
            if (href === currentPath || (currentPath === 'index.html' && href === '')) { // Comprueba si coincide con la página actual
                link.classList.add('active'); // Agrega la clase 'active'
            } else {
                link.classList.remove('active'); // Elimina la clase 'active'
            }
        });
    }

    // Llama a la función cuando la página se carga
    window.addEventListener('load', setActiveLink);