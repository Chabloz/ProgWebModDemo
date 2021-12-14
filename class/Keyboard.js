export default class Keyboard {

  constructor() {
    this.keys = new Set();
    window.addEventListener('keydown', evt => this.#onKeyDown(evt));
    window.addEventListener('keyup', evt => this.#onKeyUp(evt));
    this.actionsOnKeyPressed = new Map();
  }

  #onKeyDown(evt) {
    this.keys.add(evt.code)
    if (this.actionsOnKeyPressed.has(evt.code)) {
      this.actionsOnKeyPressed.get(evt.code)();
    }
  }

  onKeyDown(key, callback) {
    this.actionsOnKeyPressed.set(key, callback)
  }

  #onKeyUp(evt) {
    this.keys.delete(evt.code);
  }



  isKeyDown(code) {
    return this.keys.has(code);
  }

}