let currentIndex = 0;
const hero = document.getElementById("hero");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateBackground() {
  hero.style.background = `url('${images[currentIndex]}') center/cover no-repeat`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
});

updateBackground();

let currentSlide = 0;
const slides = document.querySelectorAll('.rooms-wrapper .room-slide');
const dots = document.querySelectorAll('.room-dots .dot');
const totalSlides = slides.length;
const intervalTime = 4000;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'flex' : 'none'; // 2 per slide
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function startAutoplay() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoplay() {
  clearInterval(slideInterval);
}

// Init
showSlide(currentSlide);
startAutoplay();

// Pause on hover
document.querySelector('.rooms-section')
  .addEventListener('mouseenter', stopAutoplay);
document.querySelector('.rooms-section')
  .addEventListener('mouseleave', startAutoplay);

// Dots click
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});