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

/* loading screen */
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

/* main arcade clicks */
hotspots.forEach((item) => {
  item.addEventListener("click", () => {
    const message = item.getAttribute("data-message");

    if (dialogueBox && message) {
      dialogueBox.textContent = message;
    }
  });
});

/* jungle dialogue */
jungleZones.forEach((zone) => {
  zone.addEventListener("click", () => {
    const message = zone.getAttribute("data-message");

    if (jungleDialogue && message) {
      jungleDialogue.textContent = message;
    }
  });
});

/* audio */
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

/* mix buttons */
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

/* any button with data-image changes CRT image */
imageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedImage = button.getAttribute("data-image");

    if (crtMixImage && selectedImage) {
      crtMixImage.src = selectedImage;
    }
  });
});

/* custom cursor */
if (customCursor) {
  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
  });
}
