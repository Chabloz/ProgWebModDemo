import Circle from '../Circle.js';

export default class Player extends Circle {

  constructor({x = 0, y = 0, r = 100, dir = 0, speed = 0, color = 'red'} = {}) {
    super({x, y, r, color});
    this.dir = dir;
    this.speed = speed;
  }

  draw(ctx) {
    super.draw(ctx);
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x, this.y);
    const distX = 2*this.r * Math.cos(this.dir);
    const distY = 2*this.r * Math.sin(this.dir);
    ctx.lineTo(this.x + distX, this.y + distY);
    ctx.closePath();
    ctx.stroke();
  }

  turn(dt, rotation) {
    this.dir += dt * rotation;
  }

  thrust(dt, factor) {
    this.speed += dt * factor;
    console.log(this.speed);
  }

  friction(dt, factor) {
    this.speed *= 1 - (dt/1000) * factor;
  }

  move(dt) {
    const distX = this.speed * dt * Math.cos(this.dir);
    const distY = this.speed * dt * Math.sin(this.dir);
    this.x += distX;
    this.y +=distY;
  }

}