import MainLoop from "../lib/mainloop.js";
import Circle from "../class/Circle.js";
import Tweens, {easingsFct} from "../class/Tweens.js";
import {getRandomInt} from '../lib/random.js';

const tweens = new Tweens();

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

console.log(easingsFct);

const nbParticules = easingsFct.length;
const particules = new Array(nbParticules);

for (let i = 0; i<particules.length; i++) {
  particules[i] = new Circle({
    x: 30 + i * 60,
    y: 100,
    r: 20,
    color: `hsl(${(360/nbParticules)*i}, 100%, 50%)`
  });
  tweens.create({
    loop: true,
    yoyo: true,
    ease: easingsFct[i],
    from: 100,
    to: 500,
    duration: 2000,
    animate: progress => {
      particules[i].y = progress;
    }
});
}

// const tween2 = tweens.create({after: tween1, from: 100, to: 300, duration: 1000, animate: progress => {
//   c1.y = progress;
// }});

const text ="Hello world ! lorem ipsum dolor sit ....."
tweens.create({from: 0, to: text.length-1, duration: 10000, animate: progress => {
  // console.log(text.substring(0, Math.ceil(progress)));
}});

MainLoop.setSimulationTimestep(1000/60);
MainLoop.setUpdate((dt) => {
  tweens.update(dt);
})
MainLoop.setDraw(() => {
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  particules.forEach(p => p.draw(ctx))
})
MainLoop.start();
