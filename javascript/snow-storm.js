class SnowFlake {
  constructor(game) {
    this.game = game;
    this.context = game.context;

    const height = this.game.height;
    const width = this.game.width;
    this.position = {
      x: (width + height) * Math.random() - height,
      y: height * Math.random()
    };
  }

  draw(position) {
    const context = this.context;

    context.save();

    context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, 4, 4);

    context.save();
  }

  update() {
    this.position.x += 1;
    this.position.y += 1;
  }
}

class SnowStorm {
  constructor(game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;

    this.snowFlakes = [];
  }

  draw() {
    for (let i = 0; i < this.snowFlakes.length; i++) {
      this.snowFlakes[i].draw();
    }
  }

  update() {
    for (let i = 0; i < this.snowFlakes.length; i++) {
      this.snowFlakes[i].update();
    }
    this.snowFlakes.push(new SnowFlake(this.game));
    if (this.snowFlakes.length > 300) {
      this.snowFlakes.shift();
    }
  }
}
