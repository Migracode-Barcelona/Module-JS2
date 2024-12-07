document.getElementById("timeRemaining").style.fontSize = "50px";
document.getElementById("alarmSet").style.fontSize = "25px";

let countdownInterval;

function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  const timeDisplay = document.querySelector("#timeRemaining");

  let timeRemaining = parseInt(timeInput.value);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    // Validate input
    alert("Please enter a valid number of seconds.");
    return;
  }

  // Clear any existing countdown before starting a new one
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Display initial time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  timeDisplay.innerText = `Time Remaining: ${formatTime(timeRemaining)}`;

  // Countdown
  countdownInterval = setInterval(() => {
    timeRemaining--;
    timeDisplay.innerText = `Time Remaining: ${formatTime(timeRemaining)}`;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval); // Stop countdown
      playAlarm();
      document.body.style.backgroundColor = "grey";
    }
  }, 1000);
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
