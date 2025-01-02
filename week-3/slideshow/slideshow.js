const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const imgElement = document.getElementById("carousel-img");
const backwardElement = document.getElementById("backward-btn");
const forwardElement = document.getElementById("forward-btn");

let currentImage = 0;

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
backwardElement.addEventListener("click", goBackward);
forwardElement.addEventListener("click", goForward);

imageUpdate();
