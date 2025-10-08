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

const newsletterForm = document.querySelector('.newsletter');
const emailInput = newsletterForm.querySelector('input[type="email"]');
const subscribeButton = newsletterForm.querySelector('button');

// Validate the email input when the user tries to submit
newsletterForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex for email validation
  
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address');
  } else {
    alert('Thank you for subscribing!');
    emailInput.value = '';  // Reset the input field
  }
});

// 2. Currency Selection Change
const currencySelect = document.querySelector('.footer-currency select');
currencySelect.addEventListener('change', function() {
  const selectedCurrency = currencySelect.value;
  console.log('Selected currency:', selectedCurrency); // You can replace this with actual functionality (like changing the price currency)
});

// 3. Scroll Animation (for .scroll-animate elements)
const scrollElements = document.querySelectorAll('.scroll-animate');

function checkScrollAnimation() {
  const windowHeight = window.innerHeight;
  scrollElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('fade-in'); // Add animation class when element is in view
    } else {
      element.classList.remove('fade-in');
    }
  });
}

// Trigger scroll event on page load and when the user scrolls
window.addEventListener('scroll', checkScrollAnimation);
window.addEventListener('load', checkScrollAnimation);  // Check when the page is loaded

// Ensure animations are triggered after page load
checkScrollAnimation();