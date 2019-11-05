class Player {
  constructor (game) {
    this.game = game;
    this.context = game.context;

    //square
    this.height = 50;
    this.width = 50;

    //square position
    this.x = 50;
    this.y = (game.height / 2) - (this.height / 2);

    this.vx = 0;
    this.vy = 0;
    this.score = 0;
  }

  draw () {
    this.context.fillStyle = 'red';
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  update () {
  //  if (this.y <= 0 || this.y >= this.game.height) {
  //    return;
  //  }
    this.y += this.vy;
  }
}
