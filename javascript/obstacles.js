class Obstacles {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.boardWidth = game.boardWidth;
        this.boardHeight = game.boardHeight;

        //square
        this.width = 50;
        this.height = 50;

        //square position
        this.x = this.width + 1200;
        this.y = Math.floor(Math.random() * 5 * this.boardHeight) + 2 * this.boardHeight;
        //let randomNumber = 1 + Math.floor(150 * Math.random());

        //velocity
        this.vx = -4;
        this.vy = -2;

        this.img = new Image();
        this.img.src = "./images/obstacle" + (Math.floor((Math.random()*4)) +1) +".png";
    }
    draw() {
        this.context.save();
        this.context.fillStyle = "grey";
        this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    randomObstacles() {
        this.obstaclesBottonY = Math
    }

    update() {
        this.x += this.vx;
    }
    
}