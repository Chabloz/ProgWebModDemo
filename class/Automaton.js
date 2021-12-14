import { generate } from '../lib/matrix.js';

export default class Automaton {

  constructor({
    rows = 10,
    cols = rows,
    tileSize = 20
  } = {}) {
    this.rows = rows;
    this.cols = cols;
    this.tileSize = tileSize;
    this.matrix = generate(this.rows, this.cols, 0);
  }


  draw(ctx) {
    ctx.fillStyle = 'red';
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.matrix[row][col]) {
          ctx.fillRect(col * this.tileSize + 1, row * this.tileSize + 1, this.tileSize - 1, this.tileSize - 1);
        }
      }
    }
  }
}