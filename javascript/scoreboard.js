class Scoreboard {
    constructor(game) {
        this.game = game; 
        
    }
    
    draw() {
        const score = this.game.player.score;
//        const highScore = this.game.highScore;
        const context = game.context;

        context.font = '18px arial';
        context.fillStyle = '#000';

        context.fillText(`Score: ${score}`, 800, 500);
//        context.fillText(`High Score: ${highScore}`, 800, 550);
    }
}
