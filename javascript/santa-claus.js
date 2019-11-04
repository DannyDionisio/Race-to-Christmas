class SantaClaus {
    constructor (game) {
        this.game = game;
        this.height = game.height;
        this.width = game.width;
        this.context = game.context;
        this.vx = 0;
        this.vy = 0;
        this.score = 0;
        this.cells = [
            [ 1, 1 ],
            [ 1, 2 ],
            [ 1, 3 ]
        ];
    }

    //paint (position) {
    //    const context = this.game.context;
    //    const CELLSIZE = 50;
    //    const row = position[1];
    //    const column = position[0];
//
    //    context.fillStyle = 'red';
    //    ntext.fillRect(column * CELLSIZE, row * CELLSIZE, CELLSIZE, CELLSIZE
    paintCell (position) {
        const context = this.game.context;
        
        const CELL_SIZE = 50;
    
        const row = position[0];
        const column = position[0];
    
        context.fillStyle = 'greenyellow';
        context.fillRect(
          column * CELL_SIZE,
          row * CELL_SIZE,
          CELL_SIZE,
          CELL_SIZE
        );
    }
    
    paint () {
        for (let position of this.cells) {
          this.paintCell(position);
        }
      }
}

