const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateDisplay() {
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

function tick() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

startBtn.addEventListener("click", function () {
  if (timer === null) {
    timer = setInterval(tick, 1000);
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
});