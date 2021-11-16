export default class Keyboard {

  constructor() {
    this.keys = new Set();
    window.addEventListener('keydown', evt => this.onKeyDown(evt));
    window.addEventListener('keyup', evt => this.onKeyUp(evt));
  }

  onKeyDown(evt) {
    this.keys.add(evt.code)
  }

  onKeyUp(evt) {
    this.keys.delete(evt.code);
  }

  isKeyDown(code) {
    return this.keys.has(code);
  }

}