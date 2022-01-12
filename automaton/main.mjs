import Automaton from "../class/Automaton/Pathfinding.js";
import Keyboard from "../class/Keyboard.js";
import MainLoop from "../lib/mainloop.js";
import Circle from "../class/Circle.js";
import Tweens from "../class/Tweens.js";
import conf from "./conf.js"

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

let pause = false;

const keyboard = new Keyboard({useCode: false, caseSensitive: false});
const tweens = new Tweens();


keyboard.onKeyDown('p', () => pause = !pause);

let cols = Math.floor(ctx.canvas.width / conf.automaton.tileSize);
let rows = Math.floor(ctx.canvas.height / conf.automaton.tileSize);

const automaton1 = new Automaton({...conf.automaton, cols, rows});
automaton1.update();
automaton1.update();
automaton1.update();
automaton1.update();
automaton1.flowFieldTo(2 , 2);
console.log(automaton1.flowMap);

const coord = automaton1.convertRowColToCoord(2, 2);
const mob =  new Circle({...coord, r: conf.automaton.tileSize / 2, color: 'red'});
const dest = automaton1.convertRowColToCoord(10, 2);
const move1 = tweens.create({from: mob.y, to: dest.y, animate: y => {
  mob.y = y;
}})
const dest2 = automaton1.convertRowColToCoord(10, 10);
tweens.create({from: dest.x, to: dest2.x, after: move1,  animate: x => {
  mob.x = x;
}})

// MainLoop.setSimulationTimestep(1000);

MainLoop.setUpdate(dt => {
  if (pause) return;
  tweens.update(dt);
})
MainLoop.setDraw(() => {
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  automaton1.draw(ctx);
  mob.draw(ctx);
})

MainLoop.setEnd((fps, panic) => {
  // console.log(fps);
  if (panic) console.log('panic');
})
MainLoop.start();
