const audio = document.querySelector("audio");
const timeline = document.querySelector(".timeline");
const audioElement = document.querySelector("audio");
const volumeSlider = document.getElementById("volumeSlider");
const volumeFill = document.getElementById("volumeFill");
const play = document.querySelector("#play");
const baseUrl = window.location.origin + "/assets/img/svg";
(playIcon = `<img src="${baseUrl}/play-circle-white.svg" width="50">`),
  (pauseIcon = `<img src="${baseUrl}/pause-circle-white.svg" width="50">`);

function reload() {
  audio.load();
  setTimeout(() => (timeline.value = 0), 10);
}

function startAudioPlayback() {
  audio.play();
  play.innerHTML = pauseIcon;
}

function toggleAudio() {
  if (audio.paused) {
    startAudioPlayback();
  } else {
    audio.pause();
    play.innerHTML = playIcon;
  }
}

play.addEventListener("click", toggleAudio);

function audioEnded() {
  play.innerHTML = playIcon;
}
audio.onended = audioEnded;

var end = document.querySelector("#end");

function changeTimelinePosition() {
  const percentagePosition = (100 * audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}
audio.ontimeupdate = changeTimelinePosition;

function changeSeek() {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}
timeline.addEventListener("change", changeSeek);

function setVolume(volume) {
  audioElement.volume = volume;
  volumeFill.style.width = `${volume * 100}%`;
}

volumeSlider.addEventListener("click", function (event) {
  const rect = volumeSlider.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = offsetX / rect.width;
  const newVolume = Math.max(0, Math.min(1, percentage));
  setVolume(newVolume);
});

setVolume(0.5);

document.addEventListener("DOMContentLoaded", function () {
  startAudioPlayback();
});
