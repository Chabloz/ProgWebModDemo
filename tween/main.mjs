import MainLoop from "../lib/mainloop.js";
import Circle from "../class/Circle.js";
import Tweens from "../class/Tweens.js";

const tweens = new Tweens();

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const c1 = new Circle({x: 100, y: 100, r: 100, color: 'red'});

const tween1 = tweens.create({from: 300, to: 100, duration: 1000, animate: progress => {
  c1.x = progress;
}});
const tween2 = tweens.create({after: tween1, from: 100, to: 300, duration: 1000, animate: progress => {
  c1.y = progress;
}});


const text ="Hello world ! lorem ipsum dolor sit ....."
tweens.create({from: 0, to: text.length-1, duration: 10000, animate: progress => {
  console.log(text.substring(0, Math.ceil(progress)));
}});



MainLoop.setSimulationTimestep(1000/60);
MainLoop.setUpdate((dt) => {
  tweens.update(dt);
})
MainLoop.setDraw(() => {
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  c1.draw(ctx)
})
MainLoop.start();

