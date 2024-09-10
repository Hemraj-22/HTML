const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let countdownInterval;
let remainingTime = 0;
let isRunning = false;

function startTimer() {
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  remainingTime = minutes * 60 + seconds;
  if (remainingTime <= 0) {
    alert("Please enter a valid time!");
    return;
  }

  updateDisplay(remainingTime);
  isRunning = true;
  countdownInterval = setInterval(() => {
    remainingTime--;
    updateDisplay(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      isRunning = false;
    }
  }, 1000);
}

function stopTimer() {
  if (isRunning) {
    clearInterval(countdownInterval);
    isRunning = false;
  }
}

function resetTimer() {
  stopTimer();
  remainingTime = 0;
  updateDisplay(remainingTime);
}

function updateDisplay(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  minutesDisplay.innerText = minutes.toString().padStart(2, '0');
  secondsDisplay.innerText = seconds.toString().padStart(2, '0');
}

// Add event listeners to buttons
startBtn.addEventListener('click', () => {
  if (!isRunning) {
    startTimer();
  }
});

stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
