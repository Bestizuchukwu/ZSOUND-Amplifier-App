const volumeControl = document.getElementById("volumeControl");
const gainSlider = document.getElementById("gainSlider");
const bassSlider = document.getElementById("bassSlider");
const volumeValue = document.getElementById("volumeValue");
const gainValue = document.getElementById("gainValue");
const dashboard = document.getElementById("mainDashboard");
const concertPage = document.getElementById("concertPage");
const livePreset = document.querySelector(".live-preset");
const liveConcertButton = document.querySelector(".live-concert-btn");
const backButton = document.querySelector(".back-btn");

function updateVolumeDisplay(value) {
  volumeValue.textContent = value;
  const percent = value / 100;
  const hue = 220 - percent * 100;
  const knob = document.querySelector(".knob-ring");

  knob.style.background = `
    radial-gradient(circle at center, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0) 70%),
    conic-gradient(from 220deg, rgba(123,255,190,0.92), hsl(${hue} 85% 68%), rgba(255,255,255,0.2), rgba(123,255,190,0.9))
  `;
}

function updateGainDisplay(value) {
  const display = `${value > 0 ? "+" : ""}${value.toFixed(1)} dB`;
  gainValue.textContent = display;
}

function showConcertPage() {
  if (dashboard) dashboard.style.display = "none";
  if (concertPage) concertPage.classList.add("active");
  document.querySelectorAll(".preset").forEach((item) => {
    item.classList.remove("active");
    if (item.classList.contains("live-preset")) item.classList.add("active");
  });
}

function showDashboard() {
  if (dashboard) dashboard.style.display = "grid";
  if (concertPage) concertPage.classList.remove("active");
}

volumeControl.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  updateVolumeDisplay(value);
});

gainSlider.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  updateGainDisplay(value);
});

bassSlider.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  const progress = ((value + 10) / 22) * 100;
  event.target.style.background = `linear-gradient(90deg, rgba(113,216,255,0.8) 0%, rgba(113,216,255,0.8) ${progress}%, rgba(255,255,255,0.12) ${progress}%, rgba(255,255,255,0.12) 100%)`;
});

document.querySelectorAll(".preset").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".preset").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    if (button.classList.contains("live-preset")) {
      showConcertPage();
    } else {
      showDashboard();
    }
  });
});

if (liveConcertButton) {
  liveConcertButton.addEventListener("click", showConcertPage);
}

if (backButton) {
  backButton.addEventListener("click", showDashboard);
}

updateVolumeDisplay(Number(volumeControl.value));
updateGainDisplay(Number(gainSlider.value));

const initialBass = Number(bassSlider.value);
const initialProgress = ((initialBass + 10) / 22) * 100;
bassSlider.style.background = `linear-gradient(90deg, rgba(113,216,255,0.8) 0%, rgba(113,216,255,0.8) ${initialProgress}%, rgba(255,255,255,0.12) ${initialProgress}%, rgba(255,255,255,0.12) 100%)`;

const toggles = document.querySelectorAll(".toggle-btn");
toggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    btn.textContent = btn.classList.contains("active") ? "ON" : "OFF";
  });
});

if (concertPage) {
  concertPage.classList.remove("active");
}

showDashboard();

if (livePreset) {
  livePreset.classList.add("active");
}

if (volumeControl && gainSlider) {
  volumeControl.value = 72;
  gainSlider.value = 6;
}

if (volumeValue && gainValue) {
  updateVolumeDisplay(72);
  updateGainDisplay(6);
}

if (bassSlider) {
  bassSlider.value = 6;
}

if (document.querySelector(".mini-btn.live-concert-btn")) {
  document.querySelector(".mini-btn.live-concert-btn").addEventListener("click", () => {
    document.querySelectorAll(".preset").forEach((item) => item.classList.remove("active"));
    const liveButton = document.querySelector(".live-preset");
    if (liveButton) liveButton.classList.add("active");
    showConcertPage();
  });
}

if (document.querySelector(".back-btn")) {
  document.querySelector(".back-btn").addEventListener("click", () => {
    document.querySelectorAll(".preset").forEach((item) => item.classList.remove("active"));
    const studioButton = document.querySelector(".preset:not(.live-preset)");
    if (studioButton) studioButton.classList.add("active");
    showDashboard();
  });
}
























































































































































































































































































































































































































































































































































































































































n;
