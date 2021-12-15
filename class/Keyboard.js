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
      let callbacks = this.actionsOnKeyPressed.get(evt.code);
      callbacks.forEach(callback => callback());
    }
  }

  onKeyDown(key, callback) {
    let actions;
    if (this.actionsOnKeyPressed.has(key)) {
      actions = this.actionsOnKeyPressed.get(key)
    } else {
      actions = [];
    };
    actions.push(callback)
    this.actionsOnKeyPressed.set(key, actions)
  }

  #onKeyUp(evt) {
    this.keys.delete(evt.code);
  }



  isKeyDown(code) {
    return this.keys.has(code);
  }

}