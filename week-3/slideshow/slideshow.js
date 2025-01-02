const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const imgElement = document.getElementById("carousel-img");
const backwardElement = document.getElementById("backward-btn");
const forwardElement = document.getElementById("forward-btn");
const delayInput = document.getElementById("delay-time");

const startAutoForwardBtn = document.getElementById("start-auto-forward");
const startAutoBackwardBtn = document.getElementById("start-auto-backward");
const stopAutoBtn = document.getElementById("stop-auto");

let currentImage = 0;
let delayTime = 2000; // delayed by 3 seconds in milliseconds

let autoForwardInterval; // Declare variable for auto-forward interval
let autoBackwardInterval; // Declare variable for auto-backward interval

function imageUpdate() {
  imgElement.src = images[currentImage];
}

function goBackward() {
  currentImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
  imageUpdate();
}

function goForward() {
  currentImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
  imageUpdate();
}

function setDelayTime() {
  delayTime = delayInput.value * 1000; // Convert seconds to milliseconds
}

function startAutoForward() {
  if (autoForwardInterval) clearInterval(autoForwardInterval); // Clear any existing intervals
  autoForwardInterval = setInterval(() => {
    goForward();
    if (currentImage === images.length - 1) {
      clearInterval(autoForwardInterval); // Stop auto-forward when last image is reached
    }
  }, delayTime);
}

function startAutoBackward() {
  if (autoBackwardInterval) clearInterval(autoBackwardInterval); // Clear any existing intervals
  autoBackwardInterval = setInterval(() => {
    goBackward();
    if (currentImage === 0) {
      clearInterval(autoBackwardInterval); // Stop auto-backward when first image is reached
    }
  }, delayTime);
}

function stopAuto() {
  if (autoForwardInterval) clearInterval(autoForwardInterval); // Stop auto-forward
  if (autoBackwardInterval) clearInterval(autoBackwardInterval); // Stop auto-backward
}

backwardElement.addEventListener("click", goBackward);
forwardElement.addEventListener("click", goForward);
delayInput.addEventListener("input", setDelayTime);
startAutoForwardBtn.addEventListener("click", startAutoForward);
startAutoBackwardBtn.addEventListener("click", startAutoBackward);
stopAutoBtn.addEventListener("click", stopAuto);

imageUpdate();
