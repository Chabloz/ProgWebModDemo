import Automaton from "../class/Automaton.js";
import MainLoop from "../lib/mainloop.js";
import conf from "./conf.js"

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

let cols = Math.floor(ctx.canvas.width / conf.automaton.tileSize);
let rows = Math.floor(ctx.canvas.height / conf.automaton.tileSize);

const automaton1 = new Automaton({...conf.automaton, cols, rows});



// MainLoop.setSimulationTimestep(1000);

MainLoop.setUpdate(() => {
  automaton1.update();
})
MainLoop.setDraw(() => {
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  automaton1.draw(ctx);
})

MainLoop.setEnd((fps, panic) => {
  console.log(fps);
  if (panic) console.log('panic');
})
MainLoop.start();
