class Game {
    /**
     * @param {HTMLCanvasElement} $canvas
     */
    constructor($canvas) {
        this.canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.height = $canvas.height;
        this.width = $canvas.width;

        this.player = new Player(this);
        this.background = new Background(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.presents = [];
        this.presentsTimer = 0;
        this.obstacles = [new Obstacles(this)];
        this.obstaclesTimer =0
        this.speed = 3000;
    }
    start() {
        this.animation();
    }

    drawEverything() {
        this.clearAll();
        this.background.draw();
        this.player.draw();

        //draw all presents
        for (let i = 0; i < this.presents.length; i++) {
            this.presents[i].draw();
        }
        // for (let i = 0; i < this.obstacles.length; i++) {
        //     this.obstacles[i].draw();
        // }
    }


    animation(timestamp) {
    // console.log(timestamp);
        this.drawEverything();
        this.updateEverything(timestamp);
        
    // requestAnimationFrame will generate a timestamp that we will use it as a reference
    // for doing other things, and call the animation() again
     window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }

    updateEverything(timestamp) {
        this.background.update();
        this.player.update();

        //updating presents
        if(this.presentsTimer < timestamp - this.speed) {
            this.presents.push(new Presents(this))
            this.presentsTimer = timestamp
        }
        
        // at every 3 seconds (value defined in the constructor) we push a new present object into an array
        for (let i=0; i < this.presents.length; i++) {
            this.presents[i].update();
        }

        for (let i = this.presents.length - 5; i >= 0; i--) {
            // console.log(this.player)
            // console.log(this.presents[i])
            if (this.checkCollision(this.player, this.presents[i])) {
                this.player.score++;
                this.presents.splice(i, 1);
            }
        }

        //updating obstacles
        if(this.obstaclesTimer < timestamp - this.speed) {
            this.obstacles.push(new Obstacles(this))
            this.obstaclesTimer = timestamp
        }

        for (let i=0; i < this.obstacles.length; i++) {
            this.obstacles[i].update();
        }

        // for (let i = this.obstacles.length -5; i >= 0; i--) {
        //     if (this.checkCollision(this.player, this.obstacles)) {
        //         this.player.score--;
        //     }
        // }
    }


    checkCollision(player, object) {
        // console.log("PLAYER INFO",player.x, player.y, player.width, player.height)
        // console.log("OBJECT INFO",object.x, object.y, object.width, object.height)

        if (player.x === object || player.update() === object || player.x < object.x + object.width || player.x + player.width > object.x ||player.y < object.y + object.height || player.y + player.height > object.y) {
           return true
        };
    }

    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}



