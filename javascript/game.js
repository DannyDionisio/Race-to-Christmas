class Game {
    constructor ($canvas) {
        this.canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.santaclaus = new SantaClaus(this);
        this.background = new Background(this);
        this.controls = new Controls(this);
        this.controls.setControls();
    }
    start() {
        this.animation ();
    }

    draweverything () {
        this.clearAll ()
        this.background.draw()
        this.santaclaus.paint()
    }

    animation () {
        this.draweverything ()
    }

    clearAll () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
