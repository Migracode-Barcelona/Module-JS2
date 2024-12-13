const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

let currentIndex = 0;
let interval;

let image = document.getElementById("carousel-img");

function updateImage() {
  image.src = images[currentIndex];
}



function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}


function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}


function startAuto() {
  interval = setInterval(nextImage, 5000); 
}

function stopAuto() {
  clearInterval(interval);
}

document.getElementById("forward-btn").addEventListener("click", nextImage);
document.getElementById("backward-btn").addEventListener("click", prevImage);
document
  .getElementById("auto-forward-btn")
  .addEventListener("click", startAuto);
document
  .getElementById("auto-backward-btn")
  .addEventListener("click", startAuto);
document.getElementById("stop-btn").addEventListener("click", stopAuto);

updateImage();