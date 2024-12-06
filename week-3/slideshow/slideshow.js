const images = [
    "./photos/image-1.jpg",
    "./photos/image-2.jpg",
    "./photos/image-3.jpg",
    "./photos/image-4.jpg",

];

let imageShown = document.getElementById("carousel-img")
let buttonForward = document.getElementById("forward-btn")
let buttonBackward= document.getElementById("backward-btn")

buttonForward.addEventListener('click', moveForward);

let currentIndex = 0
function moveForward() {
    currentIndex = (currentIndex + 1) % images.length;
    imageShown.src = images[currentIndex];
}

buttonBackward.addEventListener('click', moveBackward);
    
function moveBackward(){
    currentIndex = (currentIndex -1 + images.length) % images.length;
    imageShown.src = images[currentIndex];
}

        


// Write your code here
// pseudocode 
// first store the html id of the img and the two buttons in variables
// then we need to add event listeners to buttons that listen for click
// when they are clicked the image should Change 
// and then execute a funciton which chnages the inner HTML of the given thingy

// I might need this code later:  imageShown.innerHTML = `<img id="carousel-img" src= ${images[currentIndex]} alt="plant-pic" />`


