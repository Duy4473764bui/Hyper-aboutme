let heartbeatSeconds = 0;

function randomPoem() {
  const poem = POEMS[Math.floor(Math.random() * POEMS.length)];
  document.getElementById("poem").textContent = poem;
}

function updateTimestamp() {
  document.getElementById("timestamp").textContent =
    new Date().toLocaleString();
}

function updateHeartbeat() {
  heartbeatSeconds++;
  document.getElementById("heartbeat-time").textContent =
    heartbeatSeconds + "s ago";
}

function spawnHeart() {
  const heart = document.createElement("span");
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

// Music
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.4;
    music.play();
    toggleBtn.textContent = "⏸";
  } else {
    music.pause();
    toggleBtn.textContent = "🎵";
  }
  isPlaying = !isPlaying;
});

window.addEventListener("DOMContentLoaded", () => {
  randomPoem();
  updateTimestamp();
  setInterval(updateTimestamp, 1000);
  setInterval(updateHeartbeat, 1000);
  setInterval(spawnHeart, 1200);
});