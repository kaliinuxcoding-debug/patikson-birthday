const PASSWORD = "Patik";

function nextScene(number) {
  const scenes = document.querySelectorAll(".scene");

  scenes.forEach(scene => {
    scene.classList.remove("active");
  });

  const next = document.getElementById("scene" + number);

  if (next) {
    next.classList.add("active");
  }

  // Play the birthday song only on Scene 10
  if (number === 10) {
    const song = document.getElementById("birthdaySong");

    if (song) {
      song.currentTime = 0;

      song.play().catch(() => {
        // If autoplay is blocked, press Play on the music player.
      });
    }
  }
}


// PASSWORD CHECK

function checkPassword() {
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword.toLowerCase() === PASSWORD.toLowerCase()) {

    error.style.color = "#7CFF9B";
    error.textContent = "ACCESS GRANTED ✓";

    setTimeout(() => {
      nextScene(4);
    }, 700);

  } else {

    error.style.color = "#ff7777";
    error.textContent = "ACCESS DENIED ❌";

    passwordInput.value = "";

    setTimeout(() => {
      error.textContent = "";
    }, 1500);
  }
}


// ENTER KEY FOR PASSWORD

document.addEventListener("DOMContentLoaded", () => {

  const passwordInput = document.getElementById("password");

  if (passwordInput) {

    passwordInput.addEventListener("keydown", function(event) {

      if (event.key === "Enter") {
        checkPassword();
      }

    });

  }

});
