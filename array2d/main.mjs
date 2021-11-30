import {generate} from '../lib/matrix.js';
import {getSeeder, getRandomizer} from '../lib/random.js';

const seeder = getSeeder("this is a str seed");
const rand = getRandomizer(seeder());

console.log(rand());
console.log(rand());
console.log(rand());

const m = generate(2,4);
console.log(m);

console.log(JSON.stringify(m));
const m2 = m;
const m3 = m[0];
m3[0] = 7;
console.log(JSON.stringify(m2));

m[0][0] = 8;

for (let row = 0; row < m.length; row ++) {
  for (let col = 0; col < m[row].length; col++) {
    console.log(m[row][col]);
  }
}


