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
    }
    start() {
        this.animation();
    }

    drawEverything() {
        this.clearAll();
        this.background.draw();
        this.player.draw();
    }

    updateEverything() {
        this.clearAll();
        this.player.update();
    }

    animation() {
        this.updateEverything();
        this.drawEverything();

        // requestAnimationFrame will generate a timestamp that we will use it as a reference
        // for doing other things, and call the animation() again
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }

    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
