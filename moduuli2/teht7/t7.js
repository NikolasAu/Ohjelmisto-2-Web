'use strict';

const määrä = prompt('Anna nopan sivujen määrä')
const max = parseInt(määrä)

function rollDice(maks){
  return Math.floor(Math.random() * maks) + 1;
}

let tulos = 0;

while (tulos !== max) {
  tulos = rollDice(max);
  document.querySelector('#target').innerHTML += `<li>${tulos}</li>`;
}