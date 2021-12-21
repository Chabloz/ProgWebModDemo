import MainLoop from "../lib/mainloop.js";
import Circle from "../class/Circle.js";
import Tweens, {easingsFct} from "../class/Tweens.js";
import {domOn} from '../lib/dom.js';

const tweens = new Tweens();

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const c = new Circle({x: 0, y: 0, r: 20, color: 'tomato'});

let mouse = {x: -100, y: -100};
let tweenX = null;
let tweenY = null;

domOn('canvas', 'mousemove', evt => {

  const rect = ctx.canvas.getBoundingClientRect();
  mouse.x = evt.clientX - rect.left;
  mouse.y = evt.clientY - rect.top;
  tweens.delete(tweenX);
  tweens.delete(tweenY);
  tweenX = tweens.create({
    from: c.x,
    to: mouse.x,
    ease: 'cubicOut',
    duration: 300,
    animate: progress => {
      c.x = progress;
    }
  })
  tweenY = tweens.create({
    from: c.y,
    to: mouse.y,
    ease: 'cubicOut',
    duration: 300,
    animate: progress => {
      c.y = progress;
    }
  })
})


MainLoop.setSimulationTimestep(1000/60);
MainLoop.setUpdate((dt) => {
  tweens.update(dt);
})
MainLoop.setDraw(() => {
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  c.draw(ctx)
})
MainLoop.start();
