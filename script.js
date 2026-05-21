/* =========================
   UPDATE RHYTHM SONG
========================= */

function updateRhythmSong() {

  const song = songs[currentSong];

  const jukeboxScreen = document.querySelector(".jukebox-screen");

  const musicDisplay = document.querySelector(".music-display");

  if (jukeboxScreen) {

    jukeboxScreen.classList.add("screen-pulse");

    setTimeout(() => {

      jukeboxScreen.classList.remove("screen-pulse");

    }, 250);

  }

  if (musicDisplay) {

    musicDisplay.classList.add("flash");

    setTimeout(() => {

      musicDisplay.classList.remove("flash");

    }, 180);

  }

  if (rhythmImage) {

    rhythmImage.src = song.image;

  }

  if (rhythmTrack) {

    rhythmTrack.textContent = song.title;

  }

  if (rhythmDialogue) {

    rhythmDialogue.textContent = song.message;

  }

  if (bpmCounter) {

    bpmCounter.textContent = song.bpm;

  }

  if (menuClick) {

    menuClick.currentTime = 0;

    menuClick.play();

  }

  if (rhythmAudio) {

    rhythmAudio.src = song.audio;

    rhythmAudio.volume = 0.35;

    rhythmAudio.play();

  }

}
