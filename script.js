const dialogueBox = document.getElementById("dialogueBox");
const jungleDialogue = document.getElementById("jungleDialogue");

const hotspots = document.querySelectorAll(".hotspot");
const jungleZones = document.querySelectorAll(".jungle-zone");

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
const mixButtons = document.querySelectorAll("[data-audio]");
const imageButtons = document.querySelectorAll("[data-image]");

const loadingScreen = document.getElementById("loadingScreen");
const customCursor = document.querySelector(".custom-cursor");

const crtTrackName = document.getElementById("crtTrackName");
const crtMixImage = document.getElementById("crtMixImage");

let selectedTrack = "../assets/audio/mix-01.mp3";

/* =========================
   LOADING SCREEN
========================= */

document.addEventListener("DOMContentLoaded", () => {

  if (loadingScreen) {

    setTimeout(() => {

      loadingScreen.style.opacity = "0";

      setTimeout(() => {

        loadingScreen.style.display = "none";

      }, 1000);

    }, 1800);

  }

});

/* =========================
   MAIN ARCADE CLICKS
========================= */

hotspots.forEach((item) => {

  item.addEventListener("click", () => {

    const message = item.getAttribute("data-message");

    if (dialogueBox && message) {

      dialogueBox.textContent = message;

    }

  });

});

/* =========================
   JUNGLE DIALOGUE
========================= */

jungleZones.forEach((zone) => {

  zone.addEventListener("click", () => {

    const message = zone.getAttribute("data-message");

    if (jungleDialogue && message) {

      jungleDialogue.textContent = message;

    }

  });

});

/* =========================
   AUDIO
========================= */

if (bgMusic) {

  bgMusic.volume = 0.25;

}

if (musicButton && bgMusic) {

  musicButton.addEventListener("click", () => {

    bgMusic.src = selectedTrack;

    bgMusic.play();

    musicButton.textContent = "◯ SIGNAL ACTIVE";

  });

}

/* =========================
   MIX BUTTONS
========================= */

mixButtons.forEach((button) => {

  button.addEventListener("click", () => {

    selectedTrack = button.getAttribute("data-audio");

    if (bgMusic) {

      bgMusic.src = selectedTrack;

      bgMusic.play();

    }

    mixButtons.forEach((btn) => {

      btn.classList.remove("selected-mix");

    });

    button.classList.add("selected-mix");

    if (crtTrackName) {

      crtTrackName.textContent = button.textContent.trim();

    }

  });

});

/* =========================
   DATA IMAGE BUTTONS
========================= */

imageButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const selectedImage = button.getAttribute("data-image");

    if (crtMixImage && selectedImage) {

      crtMixImage.src = selectedImage;

    }

  });

});

/* =========================
   CUSTOM CURSOR
========================= */

if (customCursor) {

  document.addEventListener("mousemove", (e) => {

    customCursor.style.left = e.clientX + "px";

    customCursor.style.top = e.clientY + "px";

  });

}

/* =========================
   RHYTHM ROOM SONGS
========================= */

const songs = [

  {
    title: "BEACH LOVE",
    image: "./img/ddr beach-love.png",
    audio: "../assets/audio/beach-love.mp3",
    message: "Warm beach sunset rhythm loaded.",
    bpm: "118 BPM"
  },

  {
    title: "SUNSET SIGNAL",
    image: "./img/remaster sunset.png",
    audio: "../assets/audio/sunset-signal.mp3",
    message: "Boardwalk lights glow in the distance.",
    bpm: "124 BPM"
  },

  {
    title: "PARADISE STEP",
    image: "./img/ddr paradisestep.png",
    audio: "../assets/audio/paradise-step.mp3",
    message: "Neon dance floor activated.",
    bpm: "132 BPM"
  },

  {
    title: "SKYLINE RHYTHM",
    image: "./img/ddr skyline.png",
    audio: "../assets/audio/skyline-rhythm.mp3",
    message: "City lights pulse with the beat.",
    bpm: "140 BPM"
  },

  {
    title: "TROPICAL BREAKS",
    image: "./img/ddr tropical.png",
    audio: "../assets/audio/tropical-breaks.mp3",
    message: "Jungle rave signal detected.",
    bpm: "165 BPM"
  }

];
let currentSong = 0;

const rhythmImage = document.getElementById("rhythmImage");

const rhythmTrack = document.getElementById("rhythmTrack");

const rhythmDialogue = document.querySelector(".rhythm-dialogue");

const bpmCounter = document.getElementById("bpmCounter");

const rhythmAudio = document.getElementById("rhythmAudio");

const menuClick = document.getElementById("menuClick");

const upArrow = document.querySelector(".up-arrow");

const downArrow = document.querySelector(".down-arrow");

/* =========================
   UPDATE RHYTHM SONG
========================= */

function updateRhythmSong() {
  const song = songs[currentSong];
  const jukeboxScreen = document.querySelector(".jukebox-screen");

  if (jukeboxScreen) {
    jukeboxScreen.classList.add("screen-pulse");

    setTimeout(() => {
      jukeboxScreen.classList.remove("screen-pulse");
    }, 250);
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

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

if (leftArrow) {
  leftArrow.addEventListener("click", () => {
    currentSong--;

    if (currentSong < 0) {
      currentSong = songs.length - 1;
    }

    updateRhythmSong();
  });
}

if (rightArrow) {
  rightArrow.addEventListener("click", () => {
    currentSong++;

    if (currentSong >= songs.length) {
      currentSong = 0;
    }

    updateRhythmSong();
  });
}
/* =========================
   START RHYTHM ROOM
========================= */

updateRhythmSong();

function updateRhythmSong() {

  const song = songs[currentSong];

  const musicDisplay = document.querySelector(".music-display");

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

}

/* =========================
   DEPTH ROOM PARALLAX
========================= */

const depthRoom = document.querySelector(".depth-room");
const depthBackground = document.querySelector(".depth-background");
const layerOne = document.querySelector(".layer-one");
const layerTwo = document.querySelector(".layer-two");
const layerThree = document.querySelector(".layer-three");
const depthLight = document.querySelector(".depth-light");

if (depthRoom) {
  depthRoom.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    if (depthBackground) {
      depthBackground.style.transform =
        `scale(1.1) translate(${x * -18}px, ${y * -18}px)`;
    }

    if (layerOne) {
      layerOne.style.transform =
        `translate(${x * 25}px, ${y * 25}px)`;
    }

    if (layerTwo) {
      layerTwo.style.transform =
        `translate(${x * -35}px, ${y * -35}px)`;
    }

    if (layerThree) {
      layerThree.style.transform =
        `translate(${x * 12}px, ${y * 12}px)`;
    }

    if (depthLight) {
      depthLight.style.left = e.clientX + "px";
      depthLight.style.top = e.clientY + "px";
    }
  });
}

const transitionLinks = document.querySelectorAll("a[href]");

transitionLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) return;

    e.preventDefault();

    const transition = document.querySelector(".page-transition");

    if (transition) {
      transition.style.animation = "none";
      transition.style.opacity = "0";

      setTimeout(() => {
        transition.style.transition = "opacity 0.55s ease";
        transition.style.opacity = "1";
      }, 10);

      setTimeout(() => {
        window.location.href = href;
      }, 600);
    } else {
      window.location.href = href;
    }
  });
});

/* =========================
   DEPTH ROOM AUDIO
========================= */

const depthAmbient = document.getElementById("depthAmbient");

if (depthAmbient) {

  depthAmbient.volume = 0.28;

  depthAmbient.play().catch(() => {

    console.log("Ambient audio waiting for interaction.");

  });

}

/* =========================
   ALIEN ROOM AUDIO
========================= */

const alienAmbient = document.getElementById("alienAmbient");

if (alienAmbient) {

  alienAmbient.volume = 0.22;

  alienAmbient.play().catch(() => {

    console.log("Alien ambient waiting for interaction.");

  });

}
