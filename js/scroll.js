document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fullscreen-section");
    let currentIndex = 0;
  
    function handleScroll() {
      const scrollTop = window.scrollY;
      const screenHeight = window.innerHeight;
  
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= screenHeight / 2 && rect.bottom >= screenHeight / 2) {
          currentIndex = index;
        }
      });
  
      // Desplazamiento automático a la siguiente sección
      if (window.scrollY + screenHeight > document.body.offsetHeight - screenHeight / 2) {
        return;
      }
  
      if (currentIndex < sections.length - 1 && window.scrollY > currentIndex * screenHeight) {
        currentIndex++;
        sections[currentIndex].scrollIntoView({ behavior: "smooth" });
      } else if (currentIndex > 0 && window.scrollY < currentIndex * screenHeight) {
        currentIndex--;
        sections[currentIndex].scrollIntoView({ behavior: "smooth" });
      }
    }
  
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
  });