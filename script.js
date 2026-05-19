const dialogueBox = document.getElementById("dialogueBox");
const jungleDialogue = document.getElementById("jungleDialogue");

const hotspots = document.querySelectorAll(".hotspot");
const jungleZones = document.querySelectorAll(".jungle-zone");

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

const mixButtons = document.querySelectorAll("[data-audio]");

const loadingScreen = document.getElementById("loadingScreen");

const customCursor = document.querySelector(".custom-cursor");

const crtTrackName = document.getElementById("crtTrackName");

const crtMixImage = document.getElementById("crtMixImage");

let selectedTrack = "../assets/audio/mix-01.mp3";

/* =========================
   MAIN ARCADE DIALOGUE
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
   JUNGLE ROOM DIALOGUE
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
   AUDIO SETUP
========================= */

if (bgMusic) {

  bgMusic.volume = 0.25;

}

/* =========================
   MUSIC START BUTTON
========================= */

if (musicButton && bgMusic) {

  musicButton.addEventListener("click", () => {

    bgMusic.src = selectedTrack;

    bgMusic.play();

    musicButton.textContent = "◯ SIGNAL ACTIVE";

    if (jungleDialogue) {

      jungleDialogue.textContent =
        "SIGNAL ACTIVE: Jungle mix is now playing.";

    }

  });

}

/* =========================
   MIX SELECTION SYSTEM
========================= */

mixButtons.forEach((button) => {

  button.addEventListener("click", () => {

    selectedTrack = button.getAttribute("data-audio");

    const selectedImage =
      button.getAttribute("data-image");

    /* play selected music */

    if (bgMusic) {

      bgMusic.src = selectedTrack;

      bgMusic.play();

    }

    /* remove old selected state */

    mixButtons.forEach((btn) => {

      btn.classList.remove("selected-mix");

    });

    /* add selected glow */

    button.classList.add("selected-mix");

    /* dialogue update */

    if (jungleDialogue) {

      jungleDialogue.textContent =
        button.getAttribute("data-message");

    }

    /* music button update */

    if (musicButton) {

      musicButton.textContent =
        "◯ SIGNAL ACTIVE";

    }

    /* CRT track title update */

    if (crtTrackName) {

      crtTrackName.textContent =
        button.textContent.trim();

    }

    /* CRT image update */

    if (crtMixImage && selectedImage) {

      crtMixImage.src = selectedImage;

    }

  });

});

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

    customCursor.style.left =
      e.clientX + "px";

    customCursor.style.top =
      e.clientY + "px";

  });

}