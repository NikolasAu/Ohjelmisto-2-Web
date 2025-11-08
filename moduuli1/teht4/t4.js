'use strict';

const nimi = prompt('Anna nimesi');

const huone = Math.floor(Math.random() * 4) + 1;

if (huone === 1) {
  document.querySelector('#Huone').innerText = (nimi + ' on Gryffindorissa.')
} else if (huone === 2) {
  document.querySelector('#Huone').innerText = (nimi + ' on Slytherinissa')
} else if (huone === 3) {
  document.querySelector('#Huone').innerText = (nimi + ' on Hufflepuffissa')
} else if (huone === 4) {
  document.querySelector('#Huone').innerText = (nimi + ' on Ravenclawissa')
}
