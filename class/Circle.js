export default class Circle {

  constructor({x = 0, y = 0, r = 100, color = 'red'} = {}) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  setRadius(r) {
    this.r = r;
  }

  setX(x) {
    this.x = x;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }

}