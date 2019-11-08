class Scoreboard {
  constructor(game) {
    this.game = game;
  }

  draw() {
    const score = this.game.player.score;
    //        const highScore = this.game.highScore;
    const context = this.game.context;

    context.font = "25px arial";
    context.fillStyle = "#000";

    context.fillText(`Score: ${score}`, 775, 500);
    //        context.fillText(`High Score: ${highScore}`, 800, 550);
  }
}
