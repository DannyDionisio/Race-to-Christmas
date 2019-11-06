const $canvas = document.querySelector('canvas');
const game = new Game($canvas);
const startButton = document.querySelector(".start-button")

window.addEventListener('load', () => {
    startButton.addEventListener('click', () => {
        game.start();
    });
});
