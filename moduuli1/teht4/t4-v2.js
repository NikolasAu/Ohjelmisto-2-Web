'use strict';

const nimi = prompt('Anna nimesi');

const huone = Math.floor(Math.random() * 4)+ 1;

const huoneet = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']

console.log(`${nimi} on huoneessa ${huoneet[huone]}`)