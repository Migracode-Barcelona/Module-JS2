const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

const imageElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

let currentIndex = 0;
let autoForwardInterval;
let autoBackwardInterval;

// Update the image source based on the current index
function updateImage() {
  imageElement.src = images[currentIndex];

  // image respects the set dimensions in CSS (600x400px)
  imageElement.style.width = "600px";
  imageElement.style.height = "400px";
  imageElement.style.objectFit = "cover"; // image fits the box without stretching
}

// Move the carousel forward
function moveForward() {
  currentIndex = (currentIndex + 1) % images.length; // Wrap around to the start
  updateImage();
}

// Move the carousel backward
function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the end
  updateImage();
}

// Start auto-forwarding images
function startAutoForward() {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  autoForwardInterval = setInterval(() => {
    moveForward();
  }, 2000); // Change every 2 seconds
}

// Start auto-backwarding images
function startAutoBackward() {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  autoBackwardInterval = setInterval(() => {
    moveBackward();
  }, 2000); // Change every 2 seconds
}

// Stop the auto-slideshow
function stopAuto() {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

// Event listeners for manual navigation
forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);

// Event listeners for automatic navigation
autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);

// Event listener to stop the auto slideshow
stopBtn.addEventListener("click", stopAuto);

// Initialize the first image
updateImage();
