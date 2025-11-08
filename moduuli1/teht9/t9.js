const numero = prompt('Anna numero')
number = parseInt(numero)
if (number === 2 || number === 3 || number === 5 || number === 7) {
  document.querySelector('#Alku').innerText = `${number} on alkunumero`
} else if (number % 2=== 0 || number % 3=== 0 || number % 5=== 0 || number % 7=== 0) {
  document.querySelector('#Alku').innerText = `${number} ei ole alkunumero`
} else {
  document.querySelector('#Alku').innerText = `${number} on alkunumero`
}