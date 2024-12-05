const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let imagesCounter = 0;

function updateCarousel(images, direction) {
  const image = document.getElementById("carousel-img");

  if (direction === "forward") {
    imagesCounter = (imagesCounter + 1) % images.length;
  } else if (direction === "backward") {
    imagesCounter = (imagesCounter - 1 + images.length) % images.length;
  }

  image.src = images[imagesCounter];
}
document
  .getElementById("forward-btn")
  .addEventListener("click", () => updateCarousel(images, "forward"));

document
  .getElementById("backward-btn")
  .addEventListener("click", () => updateCarousel(images, "backward"));
