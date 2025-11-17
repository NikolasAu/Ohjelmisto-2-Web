'use strict';
const names = ['John', 'Paul', 'Jones'];
const lista = document.createElement('li')

for (let name of names) {
  lista.innerText = names

}
  const ul = document.querySelector('#target')

  ul.appendChild(lista)
