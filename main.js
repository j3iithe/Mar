let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
  showSlide(currentSlide + 1);
}

setInterval(autoSlide, 3000); // Cambia cada 3 segundos

function respuestaSi() {
  alert("¡Siiii! 🥰 Te amo mucho muchito hermosa, te prometo que vamos a ser muy felices los dos.");
}

function respuestaNo() {
  alert("¿Estás segura? 💔 Sin embargo, siempre estaré aquí para ti.");
}

// Mostrar la primera imagen al cargar
showSlide(currentSlide);



