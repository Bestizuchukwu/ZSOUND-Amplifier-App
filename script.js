:root {
  --android-bg: #03070c;
  --android-bg-2: #0b1220;
  --surface: rgba(17, 20, 28, 0.9);
  --surface-strong: rgba(23, 29, 38, 0.98);
  --surface-soft: rgba(255, 255, 255, 0.04);
  --panel: rgba(12, 15, 22, 0.92);
  --panel-alt: rgba(19, 25, 34, 0.98);
  --line: rgba(255, 255, 255, 0.08);
  --text: #edf5ff;
  --text-soft: #a7bbd3;
  --primary: #5ea7ff;
  --primary-strong: #8dc9ff;
  --primary-soft: rgba(94, 167, 255, 0.12);
  --success: #69f0b9;
  --success-soft: rgba(105, 240, 185, 0.12);
  --warning: #ffc76a;
  --danger: #ff7089;
  --shadow: 0 42px 120px rgba(0, 0, 0, 0.8);
  --radius-xl: 42px;
  --radius-lg: 30px;
  --radius-md: 18px;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(94, 167, 255, 0.28), transparent 20%),
    radial-gradient(circle at bottom right, rgba(90, 225, 189, 0.08), transparent 24%),
    linear-gradient(160deg, var(--android-bg), var(--android-bg-2));
  color: var(--text);
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

button,
input,
select {
  font: inherit;
}

.app-shell {
  position: relative;
  width: min(1440px, 100%);
  min-height: 860px;
  background: linear-gradient(180deg, rgba(8, 11, 18, 0.98), rgba(4, 7, 12, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 42px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
}

.app-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255,255,255,0.016), rgba(255,255,255,0.006)),
    repeating-linear-gradient(
      to bottom,
      rgba(255,255,255,0.014),
      rgba(255,255,255,0.014) 1px,
      transparent 1px,
      transparent 7px
    );
  pointer-events: none;
}

.topbar,
.dashboard,
.phone-status,
.concert-page,
.concert-panel,
.concert-actions,
.concert-header,
.concert-grid,
.concert-page .panel-header,
.concert-page .toggle-row,
.concert-page .field {
  position: relative;
  z-index: 1;
}

.phone-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 30px 10px;
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.phone-status .time {
  letter-spacing: 0.08em;
}

.phone-status .status-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-soft);
  font-size: 0.68rem;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 28px 18px;
  border-bottom: 1px solid var(--line);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(94, 167, 255, 0.42), rgba(103, 238, 186, 0.18));
  border: 1px solid rgba(255,255,255,0.12);
  color: #fff;
  font-weight: 800;
  font-size: 1.2rem;
  box-shadow: 0 18px 34px rgba(94, 167, 255, 0.18);
}

.brand-name {
  font-weight: 800;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
}

.brand-subtitle {
  color: var(--text-soft);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.session-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(94, 167, 255, 0.08);
  border: 1px solid rgba(94, 167, 255, 0.14);
  color: var(--primary-strong);
  font-weight: 700;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 18px rgba(105, 240, 185, 0.7);
}

.top-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.mini-btn {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border-radius: 14px;
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 600;
}

.mini-btn.accent {
  background: linear-gradient(135deg, rgba(94, 167, 255, 0.22), rgba(105, 240, 185, 0.1));
  border-color: rgba(94, 167, 255, 0.18);
  color: var(--text);
}

.mini-btn:hover,
.preset:hover,
.power-btn:hover,
.toggle-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.dashboard {
  display: grid;
  grid-template-columns: 0.92fr 1.8fr 0.92fr;
  gap: 22px;
  padding: 24px 22px 26px;
}

.panel {
  background: linear-gradient(180deg, rgba(18, 23, 31, 0.94), rgba(11, 14, 20, 0.96));
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: 22px 18px 18px;
  display: flex;
  flex-direction: column;
  min-height: 720px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.panel-header.compact {
  margin-bottom: 14px;
}

.chip {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.chip.online {
  background: rgba(105, 240, 185, 0.08);
  border-color: rgba(105, 240, 185, 0.14);
  color: #d6fce9;
}

.output-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius-lg);
  padding: 18px 16px;
  margin-bottom: 16px;
  transition: 0.2s ease;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
}

.output-card.active {
  background: linear-gradient(180deg, rgba(94, 167, 255, 0.08), rgba(255,255,255,0.02));
  border-color: rgba(94, 167, 255, 0.18);
}

.output-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.output-row h3 {
  margin: 4px 0 0;
  font-size: 1.08rem;
}

.label {
  margin: 0;
  color: var(--text-soft);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.label.small {
  font-size: 0.64rem;
}

.signal-badge {
  font-size: 0.72rem;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(105, 240, 185, 0.08);
  border: 1px solid rgba(105, 240, 185, 0.16);
  color: #d9ffe8;
  font-weight: 700;
}

.signal-badge.alt {
  background: rgba(255, 199, 106, 0.08);
  border-color: rgba(255, 199, 106, 0.18);
  color: #ffe7b6;
}

.meter-stack {
  display: grid;
  gap: 10px;
}

.meter-line {
  position: relative;
  width: 100%;
  height: 11px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255,255,255,0.06);
}

.meter-line span {
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--level);
  border-radius: inherit;
  background: linear-gradient(90deg, #69f0b9, #5ea7ff, #ffc76a);
  box-shadow: 0 0 12px rgba(94, 167, 255, 0.24);
}

.meter-stack.small .meter-line {
  height: 9px;
}

.main-panel {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.hero-card {
  position: relative;
  background: linear-gradient(145deg, rgba(31, 35, 46, 0.98), rgba(15, 19, 28, 0.98));
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 24px 24px 18px;
  min-height: 220px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  overflow: hidden;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 16px 30px rgba(10, 16, 24, 0.35);
}

.hero-card::after {
  content: "";
  position: absolute;
  inset: 0 auto auto 42%;
  width: 230px;
  height: 230px;
  background: radial-gradient(circle, rgba(94,167,255,0.16), transparent 62%);
  pointer-events: none;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--primary-strong);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.1rem, 2.6vw, 3.7rem);
  line-height: 1;
  letter-spacing: -0.06em;
}

.subtext {
  margin-top: 12px;
  max-width: 520px;
  color: var(--text-soft);
  font-size: 0.96rem;
  line-height: 1.7;
}

.wave-visual {
  position: relative;
  height: 170px;
  border-radius: 22px;
  background: linear-gradient(150deg, rgba(94, 167, 255, 0.09), rgba(105, 240, 185, 0.04));
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}

.wave {
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 260px;
  height: 120px;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 2px solid rgba(94, 167, 255, 0.28);
  border-color: rgba(94,167,255,0.25) transparent transparent transparent;
  animation: pulse 4s infinite ease-in-out;
}

.wave-2 {
  bottom: 34px;
  width: 220px;
  height: 100px;
  border-color: rgba(105,240,185,0.24) transparent transparent transparent;
  animation-delay: 0.8s;
}

@keyframes pulse {
  0%,
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.78;
  }
  50% {
    transform: translateX(-50%) scale(1.06);
    opacity: 1;
  }
}

.controls-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 20px;
}

.knob-panel,
.mix-panel {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: 22px 18px;
}

.knob-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.knob-ring {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background:
    radial-gradient(circle at center, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.04) 42%, rgba(0,0,0,0) 72%),
    conic-gradient(from 220deg, #69f0b9, #5ea7ff, rgba(255,255,255,0.2), #69f0b9);
  border: 1px solid rgba(255,255,255,0.05);
  display: grid;
  place-items: center;
  box-shadow: inset 0 0 40px rgba(255,255,255,0.05), 0 18px 28px rgba(0, 0, 0, 0.25);
}

.knob-core {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(150deg, rgba(8, 12, 18, 0.98), rgba(18, 23, 31, 1));
  box-shadow: inset 0 0 18px rgba(255,255,255,0.04);
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
}

.knob-core span {
  transform: translateY(-3px);
}

.knob-labels {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  font-weight: 700;
}

input[type="range"] {
  appearance: none;
  width: 100%;
  height: 5px;
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
  outline: none;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff, #5ea7ff);
  box-shadow: 0 0 0 5px rgba(94, 167, 255, 0.12);
  border: none;
}

.mix-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mini-stat {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mini-stat strong {
  font-size: 1.02rem;
}

.slider-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
}

.slider-block label {
  color: var(--text-soft);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.network-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 12px 10px;
}

.network-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line);
  padding: 12px 6px;
  color: var(--text-soft);
  font-size: 0.75rem;
  font-weight: 600;
}

.network-row:last-child {
  border-bottom: none;
}

.network-row strong {
  color: var(--text);
  font-size: 0.82rem;
}

.preset-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.preset {
  text-align: left;
  background: rgba(255,255,255,0.03);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 12px;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 700;
}

.preset.active,
.toggle-btn.active {
  background: linear-gradient(135deg, rgba(94, 167, 255, 0.12), rgba(105, 240, 185, 0.05));
  border-color: rgba(94, 167, 255, 0.16);
  color: var(--primary-strong);
}

.power-box {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, rgba(94, 167, 255, 0.08), rgba(105, 240, 185, 0.05));
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px;
}

.power-box strong {
  display: block;
  margin-top: 6px;
}

.power-btn {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.04);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: 700;
}

.panel-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--text);
}

.bg-glow {
  position: fixed;
  filter: blur(90px);
  opacity: 0.34;
  pointer-events: none;
}

.glow-1 {
  width: 320px;
  height: 320px;
  background: rgba(94, 167, 255, 0.17);
  left: 3%;
  top: 8%;
}

.glow-2 {
  width: 360px;
  height: 360px;
  background: rgba(105, 240, 185, 0.12);
  right: 7%;
  bottom: 8%;
}

.glow-3 {
  width: 280px;
  height: 280px;
  background: rgba(124, 133, 255, 0.1);
  left: 32%;
  top: 52%;
}

.concert-page {
  display: none;
  padding: 26px 22px 24px;
  min-height: 760px;
}

.concert-page.active {
  display: block;
}

.concert-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.concert-header h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.concert-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 22px;
  margin-bottom: 22px;
}

.concert-panel {
  background: linear-gradient(180deg, rgba(18, 23, 31, 0.94), rgba(11, 14, 20, 0.96));
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: 20px 18px 18px;
}

.field-grid,
.settings-stack {
  display: grid;
  gap: 16px;
}

.field {
  display: grid;
  gap: 8px;
}

.field span {
  color: var(--text-soft);
  font-weight: 700;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.field select {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  border-radius: 14px;
  color: var(--text);
  padding: 13px 14px;
  outline: none;
}

.field select:focus {
  border-color: rgba(94, 167, 255, 0.45);
  box-shadow: 0 0 0 3px rgba(94, 167, 255, 0.08);
}

.mini-stat.wide {
  justify-content: space-between;
  width: 100%;
}

.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  color: var(--text);
  font-weight: 600;
}

.toggle-btn {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
  color: var(--text);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  font-weight: 800;
  cursor: pointer;
}

.concert-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

@media (max-width: 1100px) {
  .dashboard {
    grid-template-columns: 1fr;
  }

  .panel {
    min-height: auto;
  }

  .hero-card {
    grid-template-columns: 1fr;
  }

  .controls-grid,
  .concert-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  body {
    padding: 16px;
  }

  .topbar,
  .concert-header,
  .concert-actions {
    flex-wrap: wrap;
    gap: 12px;
  }

  .top-actions {
    width: 100%;
    justify-content: space-between;
  }

  .brand-name {
    letter-spacing: 0.08em;
  }

  .app-shell {
    min-height: auto;
  }
}
