import Circle from "../class/Circle.js";

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const c1 = new Circle({y: 200, x:100, color: '#11aa77'});

let lastTime = 0;
function tick(time) {
  let deltaT = time - lastTime;
  lastTime = time;
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  c1.setX(c1.x + 0.1 * deltaT);
  c1.draw(ctx);
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);