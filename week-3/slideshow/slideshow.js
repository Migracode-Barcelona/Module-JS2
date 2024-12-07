const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

// Get references to the image element and buttons
const imgElement = document.getElementById("carousel-img");
const backwardBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");

// Initialize the current image index
let currentIndex = 0;

// Function to update the image source based on the current index
function updateImage() {
  imgElement.src = images[currentIndex];
}

// Event listener for the "Backwards" button
backwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement and wrap around if needed
  updateImage();
});

// Event listener for the "Forward" button
forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // Increment and wrap around if needed
  updateImage();
});

// Initialize the first image
updateImage();
