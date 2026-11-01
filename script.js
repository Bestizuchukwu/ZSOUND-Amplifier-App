document.addEventListener('DOMContentLoaded', () => {
  const dashboard = document.getElementById('mainDashboard');
  const concertPage = document.getElementById('concertPage');
  const liveConcertBtn = document.querySelector('.live-concert-btn');
  const backBtn = document.querySelector('.back-btn');
  const livePresetBtn = document.querySelector('.live-preset');

  const showConcertPage = () => {
    if (!dashboard || !concertPage) return;
    dashboard.style.display = 'none';
    concertPage.classList.add('active');
  };

  const showDashboard = () => {
    if (!dashboard || !concertPage) return;
    dashboard.style.display = 'grid';
    concertPage.classList.remove('active');
  };

  if (liveConcertBtn) {
    liveConcertBtn.addEventListener('click', showConcertPage);
  }

  if (backBtn) {
    backBtn.addEventListener('click', showDashboard);
  }

  if (livePresetBtn) {
    livePresetBtn.addEventListener('click', showConcertPage);
  }

  const volumeControl = document.getElementById('volumeControl');
  const volumeValue = document.getElementById('volumeValue');
  const gainSlider = document.getElementById('gainSlider');
  const gainValue = document.getElementById('gainValue');

  if (volumeControl && volumeValue) {
    const updateVolume = () => {
      volumeValue.textContent = volumeControl.value;
    };

    volumeControl.addEventListener('input', updateVolume);
    updateVolume();
  }

  if (gainSlider && gainValue) {
    const updateGain = () => {
      gainValue.textContent = `${Number(gainSlider.value).toFixed(1)} dB`;
    };

    gainSlider.addEventListener('input', updateGain);
    updateGain();
  }

  const presetButtons = document.querySelectorAll('.preset');
  presetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      presetButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');
      button.classList.toggle('active', !isActive);
      button.textContent = isActive ? 'OFF' : 'ON';
    });
  });
});
