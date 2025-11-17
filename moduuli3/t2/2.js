const lista1 = document.createElement('li')
lista1.innerText = "First item"

const lista2 = document.createElement('li')
lista2.classList.add('my-item')
lista2.innerText = "Second item"


const lista3 = document.createElement('li')
lista3.innerText = "Third item"

const ul = document.querySelector('#target')

ul.appendChild(lista1)
ul.appendChild(lista2)
ul.appendChild(lista3)