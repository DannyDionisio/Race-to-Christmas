class Controls {
    constructor(game) {
        this.game = game;
    }

    setControls() {
        window.addEventListener('keydown', event => {
            switch (event.keyCode) {
                //up
                case 38:
                    this.game.player.vy = -5;
                    break;
                //down
                case 40:
                    this.game.player.vy = 5;
                    break;
            }
        });
        window.addEventListener('keyup', event => {
            switch (event.keyCode) {
                //up
                case 38:
                    this.game.player.vy = 0;
                    break;
                //down
                case 40:
                    this.game.player.vy = 0;
                    break;
                case 13:
                    this.game.start();
                    break;
            }
        })
    }
}
