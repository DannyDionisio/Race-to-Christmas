class Background {
  constructor(game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.image = new Image();
    this.image.src = "./images/snow1.jpg";
    this.x = 0;
    this.velocityX = -2;
  }

  draw() {
    this.context.drawImage(this.image, this.x, 0, this.width, this.height);
    this.context.drawImage(
      this.image,
      this.x + this.width,
      0,
      this.width,
      this.height
    );
  }

  update() {
    const velocityX = this.game.speed * -1;
    this.x += velocityX;
    if (this.x < -this.width) this.x = 0;
  }
}
