function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  const alarmTime = parseInt(inputField.value, 10);
  if(isNaN(alarmTime) || alarmTime<=0){
    alert("Please enter a valid time in seconds.");
  }
  let timeRemaining = alarmTime
  updateDisplay(timeRemaining);
  const interval = setInterval(()=>{
    if(timeRemaining > 0){
      timeRemaining--;
      updateDisplay(timeRemaining);
    }else{
      clearInterval(interval);
      playAlarm();
      document.body.style.backgroundColor = "red";
    }
  },1000);
    document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
    pauseAlarm();
    document.body.style.backgroundColor = ""; // Reset background color
  });
}
function updateDisplay(seconds) {
  const minute  = String(Math.floor(seconds/60)).padStart("2",0);
  const second = String(seconds%60).padStart("2",0);
  document.getElementById("timeRemaining").innerText = `Time Remaining: ${minute}:${second}`;
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
