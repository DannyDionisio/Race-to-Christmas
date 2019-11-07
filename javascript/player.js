class Player {
  constructor (game) {
    this.game = game;
    this.context = game.context;

    //Santa Claus
    this.image = new Image();
    this.image.src = "./images/santa-claus.png";

    //square
    this.height = 150;
    this.width = 150;

    //square position
    this.x = 50;
    this.y = (game.height / 2) - (this.height / 2);

    this.vx = 0;
    this.vy = 0;
    this.score = 0;
  }

  draw () {
    this.context.save();
    this.context.fillStyle = 'red';
    this.context.drawImage(this.image,this.x,this.y,this.width,this.height);
  }

  update () {
    this.y += this.vy;
  }
}
