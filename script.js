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
    // 1. Select Elements
    const wrapper = document.querySelector('.rooms-wrapper');
    const cards = document.querySelectorAll('.room-card');
    const dots = document.querySelectorAll('.room-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const numSlides = cards.length; 
    let currentSlideIndex = 0; // Tracks which card is currently at the far left

    // Determine slide amount (100% for mobile, 50% for desktop showing 2 cards)
    const getSlideAmount = () => {
        // If screen is mobile size (based on your CSS breakpoint of 768px)
        return window.innerWidth <= 768 ? 100 : 50; 
    };

    // --- Core Function to Update the Carousel ---
    const updateCarousel = (index) => {
        currentSlideIndex = index;
        const slidePercent = getSlideAmount();

        // Calculate the total horizontal shift needed
        // Since we show 2 cards on desktop, a single "slide" is 50%
        const offset = currentSlideIndex * slidePercent;

        // Apply the slide transform
        wrapper.style.transform = `translateX(-${offset}%)`;

        // Update the Dots (Highlight the active dot)
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlideIndex);
        });
    };

    // --- Arrow Navigation Logic ---
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Move to the next index, looping back to 0 if we hit the end
            let newIndex = (currentSlideIndex + 1);
            if (newIndex >= numSlides) {
                 newIndex = 0; 
            }
            updateCarousel(newIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            // Move to the previous index, looping to the last card if we hit the beginning
            let newIndex = (currentSlideIndex - 1);
            if (newIndex < 0) {
                newIndex = numSlides - 1; 
            }
            updateCarousel(newIndex);
        });
    }

    // --- Dot Click Logic ---
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    // --- Initialization and Resize Handling ---
    updateCarousel(0); // Start at the first slide

    // Recalculate and reset the position if the window size changes 
    // (e.g., rotating a tablet or resizing a browser window)
    window.addEventListener('resize', () => {
        // Reset to first slide on resize to correctly re-align 
        updateCarousel(0); 
    });
});