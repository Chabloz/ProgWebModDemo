import Automaton from "../Automaton.js";
import { clone } from "../../lib/matrix.js"

export default class Sand extends Automaton {

  update() {
    const nextGen = clone(this.matrix);
    for (let row = 0; row < this.rows - 1; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.matrix[row][col] && !this.matrix[row + 1][col]) {
          nextGen[row + 1][col] = this.matrix[row][col];
          nextGen[row][col] = 0;
        }
      }
    }
    this.matrix = nextGen;
  }

}