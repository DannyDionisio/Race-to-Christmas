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
        this.scoreBoard = new Scoreboard(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.presents = [];
        this.presentsTimer = 0;
        this.obstacles = [new Obstacles(this)];
        this.obstaclesTimer =0
        this.borderDistance = 20;
        this.speed = 3000;
    }
    start() {
        this.hightScore = 0;
        this.player.score = 0;
        this.isGameOver = false;
        this.animation();
        document.querySelector(".start-button").style.display = "none";
    }

    drawEverything() {
        this.clearAll();
        this.background.draw();
        this.player.draw();
        this.scoreBoard.draw();

        //draw all presents
        for (let i = 0; i < this.presents.length; i++) {
            this.presents[i].draw();
        }
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw();
        }
    }


    animation(timestamp) {
    // console.log(timestamp);
        this.drawEverything();
        this.updateEverything(timestamp);

        if (this.isGameOver) {
            return;
        }
        
    // requestAnimationFrame will generate a timestamp that we will use it as a reference
    // for doing other things, and call the animation() again
     this.requestId = window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }

    updateEverything(timestamp) {
        this.background.update();
        this.player.update();
        this.updatePresents();
            
        if (this.player.score < 0 && !this.start.score) {
            this.gameOver();
        }
        
        // at every 3 seconds (value defined in the constructor) we push a new present object into an array
        if(this.presentsTimer < timestamp - this.speed) {
            this.presents.push(new Presents(this))
            this.presentsTimer = timestamp
        }

        //updating obstacles
        if(this.obstaclesTimer < timestamp - this.speed) {
            this.obstacles.push(new Obstacles(this))
            this.obstaclesTimer = timestamp
        }


        for (let i=0; i < this.obstacles.length; i++) {
            this.obstacles[i].update();

            if (this.checkCollision(this.player, this.obstacles[i])) {
                this.obstacles.splice(i, 1);
                this.gameOver();
            }

            if (this.obstacles[i].x + this.obstacles[i].height < 0) {
                this.obstacles.splice(i, 1);
            }  
        }
    }

    updatePresents() {
        for (let i=0; i < this.presents.length; i++) {
            this.presents[i].update();
            
            if (this.checkCollision(this.player, this.presents[i])) {
                this.player.score+=10;
                this.presents.splice(i, 1);
            }

            if (this.presents[i].x + this.presents[i].height < 0) {
                this.presents.splice(i, 1);
            }
        }
    }

    gameOver() {
        this.isGameOver = true;
        window.cancelAnimationFrame(this.requestId);
        document.querySelector(".start-button").style.display = "inline";
        document.querySelector(".start-button").innerHTML = "RETRY";

        this.context.fillStyle = "black";
        this.context.font = "40px Comic Sans MS";
        this.context.textAlign = "center";
        this.context.fillText("GAME OVER!", this.context.canvas.width / 2, this.context.canvas.height / 2);
        
    }

    checkCollision(player, object) {
        // console.log("PLAYER INFO",player.x, player.y, player.width, player.height)
        // console.log("OBJECT INFO",object.x, object.y, object.width, object.height)

        if (object.y + object.height >= player.y && object.y <= player.y + player.height
            && object.x + object.width >= player.x && object.x <= player.x + player.width) {
            return true;
        }
        return false;
    }



    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
