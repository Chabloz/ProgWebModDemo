import Player from '../class/Circle/Player.js';
import Keyboard from '../class/Keyboard.js';
import MainLoop from '../lib/mainloop.js';


const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const c1 = new Player({y: 200, x:400, r: 50, color: 'red'});
const keyboard = new Keyboard();




MainLoop.setUpdate(dt => {
  if (keyboard.isKeyDown('KeyA')) {
    c1.turn(dt, -Math.PI/1000);
  }
  if (keyboard.isKeyDown('KeyD')) {
    c1.turn(dt, Math.PI/1000);
  }
  if (keyboard.isKeyDown('KeyW')) {
    c1.thrust(dt, 0.001);
  }
  if (keyboard.isKeyDown('KeyS')) {
    c1.thrust(dt, -0.001);
  }
  c1.move(dt);
  c1.friction(dt, 0.98);
})
MainLoop.setDraw(() => {
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  c1.draw(ctx);
});
MainLoop.start();

// let lastTime = 0;
// let animationTime = 0;
// function tick(time) {
//   let deltaT = time - lastTime;
//   lastTime = time;
//   animationTime += deltaT;
//   if (animationTime>=2000) {
//     console.log('2 secondes');
//     console.log(animationTime);
//     animationTime -= 2000;
//   }
//   ctx.canvas.height = ctx.canvas.clientHeight;
//   ctx.canvas.width = ctx.canvas.clientWidth;
//   c1.setX(c1.x + 0.1 * deltaT);
//   c1.draw(ctx);
//   requestAnimationFrame(tick);
// }

// requestAnimationFrame(tick);