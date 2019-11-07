class Presents {
    constructor(game) {
//        this.height = game.height;
//        this.width = game.width;
        this.game = game;
        this.context = game.context;

        //square
        this.width = 100;
        this.height = 100;

        //square position        
        this.x = this.game.width;
        this.y = this.randomY();

        // Velocity x
        this.vx = -4; 
        this.vy = 0;


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

    

    randomY() {
        let y = Math.random() * this.game.height
        const minY = this.game.borderDistance;
        const maxY = this.game.height - this.height - this.game.borderDistance

        if (y < minY) {
            y = minY;
        }

        if (y > maxY) {
            y = maxY;
        }

        return y;
    }
}



