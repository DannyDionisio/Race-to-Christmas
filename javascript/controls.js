class Controls {
  constructor(game) {
    this.game = game;
  }

  setControls() {
    window.addEventListener("keydown", event => {
      if (event.keyCode === 38 || event.keyCode === 40) {
        event.preventDefault();
      }
      switch (event.keyCode) {
        //up
        case 38:
          this.game.player.vy = -5;
          break;
        //down
        case 40:
          this.game.player.vy = 5;
          break;
      }
    });
    window.addEventListener("keyup", event => {
      if (event.keyCode === 38 || event.keyCode === 40) {
        event.preventDefault();
      }
      switch (event.keyCode) {
        //up
        case 38:
          this.game.player.vy = 0;
          break;
        //down
        case 40:
          this.game.player.vy = 0;
          break;
        case 13:
          this.game.start();
          break;
      }
    });
  }
}
