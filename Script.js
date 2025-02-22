// Configura el temporizador (48 horas)
let countdownTime = 48 * 60 * 60; // 48 horas en segundos

function updateCountdown() {
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  if (countdownTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "<p>¡La oferta ha terminado!</p>";
  } else {
    countdownTime--;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
