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

document.addEventListener('DOMContentLoaded', () => {
    // Select Elements
    const wrapper = document.querySelector('.rooms-wrapper');
    const cards = document.querySelectorAll('.room-card');
    const dots = document.querySelectorAll('.room-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const numSlides = cards.length;
    let currentSlideIndex = 0;

    // Determine how much to slide based on screen size (2 cards wide or 1 card wide)
    const getSlideAmount = () => {
        // Use the CSS media query breakpoint (768px)
        return window.innerWidth <= 768 ? 100 : 50; 
    };

    // --- Core Function to Update the Carousel ---
    const updateCarousel = (index) => {
        currentSlideIndex = index;
        const slidePercent = getSlideAmount();

        // Calculate the total horizontal shift
        const offset = currentSlideIndex * slidePercent;

        // Apply the slide
        wrapper.style.transform = `translateX(-${offset}%)`;

        // Update the Dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlideIndex);
        });
    };

    // --- Arrow Navigation Logic ---
    nextBtn.addEventListener('click', () => {
        let newIndex = (currentSlideIndex + 1);
        if (newIndex >= numSlides) {
             newIndex = 0; // Loop back to the start
        }
        updateCarousel(newIndex);
    });

    prevBtn.addEventListener('click', () => {
        let newIndex = (currentSlideIndex - 1);
        if (newIndex < 0) {
            newIndex = numSlides - 1; // Loop back to the end
        }
        updateCarousel(newIndex);
    });

    // --- Dot Click Logic ---
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    // --- Initialization and Resize Handling ---
    updateCarousel(0);

    // Re-calculate slide amount on window resize
    window.addEventListener('resize', () => {
        // Reset to first slide on resize to prevent awkward view
        updateCarousel(0); 
    });
});