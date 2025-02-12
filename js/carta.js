$(document).ready(function () {
    const $card = $(".card");
    const $invitationContainer = $("#invitation-container");

    // Función para crear corazones animados
    function createHeart() {
        const heart = $("<div class='heart'>❤️</div>");
        $(".hearts-container").append(heart);

        // Posición aleatoria en la pantalla
        const startPosX = Math.random() * $(window).width();
        heart.css({
            left: startPosX,
            top: "-10px",
            fontSize: Math.random() * 50 + 50 + "px", // Tamaño variable
            animationDuration: Math.random() * 2 + 2 + "s", // Variación en caída
        });

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    setTimeout(() => {
        $card.addClass("open"); // Agregar clase para activar animación

        setTimeout(() => {
            $invitationContainer.fadeOut(500);
            $("body").css("overflow", "auto");
        }, 5000);
    }, 2000);

    // Iniciar la lluvia de corazones justo antes del fadeOut
    setTimeout(() => {
        $("body").append("<div class='hearts-container'></div>");

        // Generar corazones cada 10ms
        const heartInterval = setInterval(createHeart, 10);

        // FadeOut de la página
        $("body").fadeOut(8000, function () {
            clearInterval(heartInterval); // Detener generación de corazones
            $(".hearts-container").remove(); // Limpiar corazones antes de cambiar de página
            setTimeout(function () {
                window.location.href = "promociones.html"; // Redirección con pequeño retraso
            }, 1000); // Retraso de 1 segundo antes de la redirección
        });
    }, 6000); // Inicia la animación un poco antes del fadeOut
});

