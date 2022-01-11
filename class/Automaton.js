import { generateWithFn, clone } from '../lib/matrix.js';

export default class Automaton {

  constructor({
    rows = 10,
    cols = rows,
    tileSize = 20,
    aliveColor = 'red',
    deadColor = 'blue',
    isAliveProb = 0.2,
  } = {}) {
    this.rows = rows;
    this.cols = cols;
    this.aliveColor = aliveColor;
    this.deadColor = deadColor;
    this.tileSize = tileSize;
    this.matrix = generateWithFn(this.rows, this.cols, () => {
      return Math.random() >= isAliveProb ? 0 : 1;
    });
  }

  update() {
    const copy = clone(this.matrix);

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const nbAliveNeighbors = this.countAliveNeighbors({row, col});
        if (this.matrix[row][col] && !(nbAliveNeighbors - 1 == 2 || nbAliveNeighbors - 1 == 3)) {
          copy[row][col] = 0;
        } else if (!this.matrix[row][col] && nbAliveNeighbors == 3) {
          copy[row][col] = 1
        }
      }
    }

    this.matrix = copy;

  }

  countAliveNeighbors({row, col}) {
    const startRow = Math.max(0, row - 1);
    const endRow = Math.min(this.rows - 1, row + 1);
    const startCol = Math.max(0, col - 1);
    const endCol = Math.min(this.cols -1, col + 1);

    let count = 0;
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        if (this.matrix[row][col]) {
          count++
        }
      }
    }

    return count;
  }

  draw(ctx) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.matrix[row][col]) {
          ctx.fillStyle = this.aliveColor;
        } else {
          ctx.fillStyle = this.deadColor;
        }
        ctx.fillRect(col * this.tileSize + 1, row * this.tileSize + 1, this.tileSize - 1, this.tileSize - 1);
      }
    }
  }
}