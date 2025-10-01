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

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".rooms-wrapper");
  const dots = document.querySelectorAll(".carousel-dots .dot");

  let currentIndex = 0;

  function updateCarousel(index) {
    const card = document.querySelector(".room-card");
    const cardWidth = card.offsetWidth + 25; // card width + gap
    wrapper.style.transform = `translateX(-${index * cardWidth}px)`;

    // update dots
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  // dot click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
  });

  // auto slide (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel(currentIndex);
  }, 5000); // every 5s
});