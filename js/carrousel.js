let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function updateCarousel() {
    const container = document.querySelector('.carousel-container');
    container.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateCarousel();
}

// Cambiar automáticamente cada 5 segundos
setInterval(nextSlide, 5000);