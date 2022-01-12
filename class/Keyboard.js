export default class Keyboard {

  constructor({useCode = true, caseSensitive = true}) {
    this.keys = new Set();
    window.addEventListener('keydown', evt => this.#onKeyDown(evt));
    window.addEventListener('keyup', evt => this.#onKeyUp(evt));
    this.actionsOnKeyPressed = new Map();
    this.caseSensitive = caseSensitive;
    this.keyProp = useCode ? 'code' : 'key';
  }

  #onKeyDown(evt) {
    let keyVal = evt[this.keyProp];
    if (!this.caseSensitive) {
      keyVal = keyVal.toUpperCase();
    }
    this.keys.add(keyVal);
    if (this.actionsOnKeyPressed.has(keyVal)) {
      let callbacks = this.actionsOnKeyPressed.get(keyVal);
      callbacks.forEach(callback => callback());
    }
  }

  onKeyDown(key, callback) {
    if (!this.caseSensitive) {
      key = key.toUpperCase();
    }
    let actions;
    if (this.actionsOnKeyPressed.has(key)) {
      actions = this.actionsOnKeyPressed.get(key)
    } else {
      actions = [];
      this.actionsOnKeyPressed.set(key, actions);
    };
    actions.push(callback);
  }

  #onKeyUp(evt) {
    this.keys.delete(evt[this.keyProp]);
  }

  isKeyDown(code) {
    return this.keys.has(code);
  }

}