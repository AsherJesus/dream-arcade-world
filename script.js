/* =========================
   GLOBAL ELEMENTS
========================= */

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
   CUSTOM CURSOR
========================= */

if (customCursor) {
  document.addEventListener("mousemove", (e) => {
    customCursor.style.transform =
      `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

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
   JUNGLE ROOM
========================= */

let selectedTrack = "../assets/audio/mix-01.mp3";

if (bgMusic) {
  bgMusic.volume = 0.25;
}

jungleZones.forEach((zone) => {
  zone.addEventListener("click", () => {
    const message = zone.getAttribute("data-message");

    if (jungleDialogue && message) {
      jungleDialogue.textContent = message;
    }
  });
});

if (musicButton && bgMusic) {
  musicButton.addEventListener("click", () => {
    bgMusic.src = selectedTrack;
    bgMusic.play().catch(() => {});

    musicButton.textContent = "◯ SIGNAL ACTIVE";
  });
}

mixButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const audio = button.getAttribute("data-audio");
    const image = button.getAttribute("data-image");

    if (audio) {
      selectedTrack = audio;
    }

    if (bgMusic && selectedTrack) {
      bgMusic.src = selectedTrack;
      bgMusic.play().catch(() => {});
    }

    if (crtMixImage && image) {
      crtMixImage.src = image;
    }

    if (crtTrackName) {
      crtTrackName.textContent = button.textContent.trim();
    }

    mixButtons.forEach((btn) => {
      btn.classList.remove("selected-mix");
    });

    button.classList.add("selected-mix");

    if (musicButton) {
      musicButton.textContent = "◯ SIGNAL ACTIVE";
    }
  });
});

/* any data-image button can change CRT image */
imageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedImage = button.getAttribute("data-image");

    if (crtMixImage && selectedImage) {
      crtMixImage.src = selectedImage;
    }
  });
});

/* =========================
   RHYTHM ROOM
========================= */

const songs = [
  {
    title: "BEACH LOVE",
    image: "./img/ddr beach-love.png",
    audio: "../assets/audio/rhythm/beach-love.mp3",
    message: "Warm beach sunset rhythm loaded.",
    bpm: "118 BPM"
  },
  {
    title: "SUNSET SIGNAL",
    image: "./img/remaster sunset.png",
    audio: "../assets/audio/rhythm/sunset-signal.mp3",
    message: "Boardwalk lights glow in the distance.",
    bpm: "124 BPM"
  },
  {
    title: "PARADISE STEP",
    image: "./img/ddr paradisestep.png",
    audio: "../assets/audio/rhythm/paradise-step.mp3",
    message: "Neon dance floor activated.",
    bpm: "132 BPM"
  },
  {
    title: "SKYLINE RHYTHM",
    image: "./img/ddr skyline.png",
    audio: "../assets/audio/rhythm/skyline-rhythm.mp3",
    message: "City lights pulse with the beat.",
    bpm: "140 BPM"
  },
  {
    title: "TROPICAL BREAKS",
    image: "./img/ddr tropical.png",
    audio: "../assets/audio/rhythm/tropical-breaks.mp3",
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

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

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
    menuClick.play().catch(() => {});
  }

  if (rhythmAudio) {
    rhythmAudio.src = song.audio;
    rhythmAudio.volume = 0.35;
    rhythmAudio.play().catch(() => {});
  }
}

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

if (rhythmImage) {
  updateRhythmSong();
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

/* =========================
   ROOM TRANSITIONS
========================= */

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
   AMBIENT AUDIO
========================= */

const depthAmbient = document.getElementById("depthAmbient");

if (depthAmbient) {
  depthAmbient.volume = 0.28;
  depthAmbient.play().catch(() => {});
}

const alienAmbient = document.getElementById("alienAmbient");

if (alienAmbient) {
  alienAmbient.volume = 0.22;
  alienAmbient.play().catch(() => {});
}
