class Obstacles {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.boardWidth = game.boardWidth;
    this.boardHeight = game.boardHeight;

    //square
    this.width = 150;
    this.height = 150;

    //square position
    this.x = this.game.width;
    this.y = this.randomY();
    //let randomNumber = 1 + Math.floor(150 * Math.random());

    //velocity
    // this.vx = -5;
    this.vy = 0;

    this.img = new Image();
    this.img.src =
      "images/obstacle" + (Math.floor(Math.random() * 4) + 1) + ".png";
  }

  draw() {
    this.context.save();
    this.context.fillStyle = "grey";
    this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  update() {
    const velocity = this.game.speed * -1;
    this.x += velocity;
  }

  randomY() {
    let y = Math.random() * this.game.height;
    const minY = this.game.borderDistance;
    const maxY = this.game.height - this.height - this.game.borderDistance;

    if (y < minY) {
      y = minY;
    }

    if (y > maxY) {
      y = maxY;
    }

    return y;
  }
}
