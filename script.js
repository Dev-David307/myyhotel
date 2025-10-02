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

let currentRoom = 0;
const roomCards = document.querySelectorAll('.rooms-wrapper .room-card');
const roomDots = document.querySelectorAll('.room-dots .dot');
const totalRooms = roomCards.length;
const intervalTime = 4000; // autoplay every 4s
let roomInterval;

function showRoom(index) {
  roomCards.forEach((room, i) => {
    room.style.display = (i === index) ? 'block' : 'none';
    roomDots[i].classList.toggle('active', i === index);
  });
}

function nextRoom() {
  currentRoom = (currentRoom + 1) % totalRooms;
  showRoom(currentRoom);
}

function startRoomAutoplay() {
  roomInterval = setInterval(nextRoom, intervalTime);
}

function stopRoomAutoplay() {
  clearInterval(roomInterval);
}

// Init
showRoom(currentRoom);
startRoomAutoplay();

// Pause on hover
document.querySelector('.rooms-section')
  .addEventListener('mouseenter', stopRoomAutoplay);
document.querySelector('.rooms-section')
  .addEventListener('mouseleave', startRoomAutoplay);

// Dots click
roomDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentRoom = index;
    showRoom(currentRoom);
  });
});