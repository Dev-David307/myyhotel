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

let currentSection = 0;

function moveToSection(section) {
  const carousels = document.querySelectorAll('.carousel');
  const totalSections = 3;  // 3 sections, each with 2 carousels

  // Update active dot
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active');
  });
  document.querySelectorAll('.dot')[section].classList.add('active');

  // Slide the carousels based on section
  carousels.forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel-item');
    const offset = -section * (items.length / totalSections) * 50 + '%';  // Adjust the offset
    carousel.style.transform = `translateX(${offset})`;
  });

  currentSection = section;
}

