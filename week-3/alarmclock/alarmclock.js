
let alarmDisplay = document.getElementById("timeRemaining");
let inputField = document.getElementById("alarmSet");

let timerInterval;

function setAlarm() {
  let time = parseInt(inputField.value, 10);

  if (isNaN(time) || time < 0) {
    alert("Please enter a valid positive number!");
    return;
  }

  updateDisplay(time); 
  clearInterval(timerInterval); 

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--; 
      updateDisplay(time); 
    } else {
      clearInterval(timerInterval); 
      playAlarm(); 
    }
  }, 1000); 
}

function updateDisplay(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  alarmDisplay.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
}

function playAlarm() {
  const audio = new Audio("alarmsound.mp3");
  audio.play();
}

function stopAlarm() {
  clearInterval(timerInterval);
}

document.getElementById("set").addEventListener("click", setAlarm);
document.getElementById("stop").addEventListener("click", stopAlarm);
