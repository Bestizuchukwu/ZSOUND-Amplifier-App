const volumeControl = document.getElementById("volumeControl");
const gainSlider = document.getElementById("gainSlider");
const bassSlider = document.getElementById("bassSlider");
const volumeValue = document.getElementById("volumeValue");
const gainValue = document.getElementById("gainValue");

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
  });
});

updateVolumeDisplay(Number(volumeControl.value));
updateGainDisplay(Number(gainSlider.value));

const initialBass = Number(bassSlider.value);
const initialProgress = ((initialBass + 10) / 22) * 100;
bassSlider.style.background = `linear-gradient(90deg, rgba(113,216,255,0.8) 0%, rgba(113,216,255,0.8) ${initialProgress}%, rgba(255,255,255,0.12) ${initialProgress}%, rgba(255,255,255,0.12) 100%)`;
