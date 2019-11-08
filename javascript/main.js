window.addEventListener("load", () => {
  const $canvas = document.querySelector("canvas");
  const game = new Game($canvas);
  const startButton = document.querySelector(".start-button");

  startButton.addEventListener("click", () => {
    game.start();
  });

  var audio = document.getElementById("audio1");
  var btn = document.getElementById("btnPause");

  function PausePlay() {
    if (audio.paused) {
      audio.play();
      btn.value = "Pause";
    } else if (audio.ended) {
      audio.currentTime = 0;
      audio.play();
      btn.value = "Pause";
    } else {
      audio.pause();
      btn.value = "Play";
    }
  }
});
