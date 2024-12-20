document.addEventListener("DOMContentLoaded", () => {
    console.log("Page fully loaded and scripts ready!");
  });
  
  document.querySelector('.subscribe-btn').addEventListener('click', function () {
    const email = document.querySelector('.email-input').value;
    if (email === '') {
      alert('Por favor, ingresa tu correo electrónico.');
    } else {
      alert('¡Gracias por suscribirte!');
    }
  });
  

  // Redireccionar al enlace de WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  const phoneNumber = '3123304140';  // Número WhatsApp Business en formato internacional
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank');  // Abre en una nueva pestaña
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn-right");
  const prevButton = document.querySelector(".carousel-btn-left");
  const navIndicators = document.querySelectorAll(".carousel-indicator");

  let currentIndex = 0;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    navIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  };

  const moveToNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  };

  const moveToPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  };

  const setSlide = (index) => {
    currentIndex = index;
    updateCarousel();
  };

  nextButton.addEventListener("click", moveToNextSlide);
  prevButton.addEventListener("click", moveToPrevSlide);

  navIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => setSlide(index));
  });

  // Auto-slide every 5 seconds
  setInterval(moveToNextSlide, 5000);
});





