const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];
let counter = 0;
let autoPlayInterval = null;
const img = document.getElementById("carousel-img");
const count = document.getElementById("counter");
document.getElementById("forward-btn").addEventListener("click",()=>{
  updateImage(1);
});
document.getElementById("backward-btn").addEventListener("click",()=>{
 updateImage(-1);
});
document.getElementById("stop-btn").addEventListener("click",()=>{
  stopAutoPlay();
});
document.getElementById("auto-forward-btn").addEventListener("click",()=>{
    startAutoPlay("forward");
});
document.getElementById("auto-back-btn").addEventListener("click",()=>{
   startAutoPlay("backward")
});
function updateImage(move){
  counter +=move;
  if(counter > images.length -1){
    counter = 0;
  }else if(counter < 0){
    counter = images.length - 1;
  }
 img.src = images[counter];
 updateCounter();
}
function updateCounter(){
  count.textContent = `Image ${counter+1} of ${images.length}`
}

function startAutoPlay(move) {
    stopAutoPlay();
//   if (autoPlayInterval) {
//     clearInterval(autoPlayInterval); 
//   }

  autoPlayInterval = setInterval(() => {
    updateImage(move === "forward" ? 1 : -1);
  }, 2000);
}
function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}
// Write your code here