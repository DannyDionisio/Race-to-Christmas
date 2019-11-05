class Presents {
    constructor(game) {
//        this.height = game.height;
//        this.width = game.width;
        this.game = game;
        this.context = game.context;

        //square
        this.width = 50;
        this.height = 50;

        //square position        
        this.x = this.width + 1000;
        this.y = (game.height / 2) - (this.height / 2);

        // Velocity x
        this.vx = -4; 
        this.vy = 0;

//        let randomNumber = 1 + Math.floor(150 * Math.random());
        this.img = new Image();
        this.img.src = "./images/gift.png";
    }
    draw() {
        this.context.save();
        this.context.fillStyle = "green";
        this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    update() {
        this.x += this.vx;
    }
}



