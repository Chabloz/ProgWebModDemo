import Automaton from "../class/Automaton/Sand.js";
import MainLoop from "../lib/mainloop.js";
import Keyboard from "../class/Keyboard.js";



const keyboard = new Keyboard();

keyboard.onKeyDown('KeyS', () => {
  console.log('save')
});




const automaton1 = new Automaton({rows: 50, tileSize: 6});
automaton1.matrix[0][3] = 1;
automaton1.matrix[1][3] = 1;
console.log(automaton1.matrix);

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

// MainLoop.setSimulationTimestep(1000);
MainLoop.setUpdate(() => {
  automaton1.update();
})
MainLoop.setDraw(() => {
  ctx.canvas.height = ctx.canvas.clientHeight;
  ctx.canvas.width = ctx.canvas.clientWidth;
  automaton1.draw(ctx);
})
MainLoop.start();





// import {generate} from '../lib/matrix.js';
// import {getSeeder, getRandomizer} from '../lib/random.js';

// const seeder = getSeeder("this is a str seed");
// const rand = getRandomizer(seeder());

// console.log(rand());
// console.log(rand());
// console.log(rand());

// const m = generate(2,4);
// console.log(m);

// console.log(JSON.stringify(m));
// const m2 = m;
// const m3 = m[0];
// m3[0] = 7;
// console.log(JSON.stringify(m2));

// m[0][0] = 8;

// for (let row = 0; row < m.length; row ++) {
//   for (let col = 0; col < m[row].length; col++) {
//     console.log(m[row][col]);
//   }
// }


keyboard.onKeyDown('KeyS', () => {
  console.log('coucou')
});

