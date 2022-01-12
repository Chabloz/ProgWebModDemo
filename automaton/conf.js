export default {
  automaton : {
    tileSize: 60,
    aliveColor: 'white',
    deadColor: 'black',
    isAliveProb: 0.7,
    birthRule: new Set([6, 7, 8]),
    survivalRule: new Set([3, 4, 5, 6, 7, 8]),
  }
};