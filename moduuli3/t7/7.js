'use strict';

const kuva = document.querySelector('#trigger');
const muuta = document.querySelector('#target');
kuva.addEventListener('mouseover', () => (muuta.src = 'img/picB.jpg'));
kuva.addEventListener('mouseout', () => (muuta.src = 'img/picA.jpg'));

