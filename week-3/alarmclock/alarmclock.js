function setAlarm() {
  const setTime = document.getElementById("timeRemaining");
  const alarmSet = document.getElementById("alarmSet");
  let countDown = parseInt(alarmSet.value);

  if (isNaN(countDown)) {
    alert("Input a valid Number");
    return;
  }

  updateTimeCountDown(countDown, setTime);

  const timer = setInterval(function () {
    countDown--;

    updateTimeCountDown(countDown, setTime);

    if (countDown <= 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}
function updateTimeCountDown(seconds, setTimeElement) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  setTimeElement.textContent = `Time Remaining ${minutes}:${secondsRemaining
    .toString()
    .padStart(2, "0")}`;
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
