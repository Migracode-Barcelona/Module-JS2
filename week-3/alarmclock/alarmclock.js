let currentTimer = null; // Track the active timer
const audio = new Audio("alarmsound.mp3"); // Alarm sound

function setAlarm() {
  // Get the input value and time display element
  const input = document.getElementById("alarmSet").value;
  const timeDisplay = document.getElementById("timeRemaining");

  // Convert input to a number of seconds
  let secondsLeft = parseInt(input, 10);

  // If the input is not valid, show 00:00 and stop
  if (isNaN(secondsLeft) || secondsLeft <= 0) {
    timeDisplay.textContent = "Time Remaining: 00:00";
    return;
  }

  // Clear any existing timer
  if (currentTimer) {
    clearInterval(currentTimer);
    currentTimer = null;
  }

  // Update the time display initially
  updateDisplay(secondsLeft);

  // Start the countdown
  currentTimer = setInterval(() => {
    secondsLeft--;
    updateDisplay(secondsLeft);

    // When time is up
    if (secondsLeft <= 0) {
      clearInterval(currentTimer); // Stop the timer
      currentTimer = null; // Reset the timer variable
      playAlarm(); // Play the alarm sound
      document.body.style.backgroundColor = "red"; // Change background color
    }
  }, 1000); // Run every 1 second
}

// Update the time display in mm:ss format
function updateDisplay(secondsLeft) {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${minutes}:${seconds}`;
}

// Play the alarm sound
function playAlarm() {
  audio.play();
}

// Pause the alarm sound and reset background color
function pauseAlarm() {
  if (!audio.paused) {
    // Only pause if the alarm is playing
    audio.pause();
    audio.currentTime = 0; // Reset audio to the start
    document.body.style.backgroundColor = ""; // Reset background color
  }
}

// Initial setup: Attach event listeners
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

window.onload = setup;
