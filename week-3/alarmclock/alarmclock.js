function setAlarm() {
  // Get the input value (in seconds) and parse it into an integer
  const inputField = document.getElementById("alarmSet");
  let timeRemaining = parseInt(inputField.value);
  // Validate if the input is a number
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid number greater than zero.");
    return;
  }
  // Update the title with the initial countdown value
  updateTitle(timeRemaining);
  // Start a countdown interval
  const intervalId = setInterval(() => {
    timeRemaining--;
    // Update the title with the current time remaining
    updateTitle(timeRemaining);
    // If the countdown reaches zero, stop the interval and play the alarm
    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}
// Function to update the title with the time remaining in MM:SS format
function updateTitle(seconds) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${secs}`;
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
