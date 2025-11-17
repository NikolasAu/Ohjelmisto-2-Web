const zigi = document.querySelector('#operation')



let vastaus = document.querySelector('#result').innerText

const  laske = document.querySelector('#start')

laske.addEventListener('click', function (evt) {
  const eka = document.querySelector('#num1')
  const toka = document.querySelector('#num2')

  function summa(a, b) {
  return a + b
  }

  function erotus(a, b) {
  return a - b
  }

  function kerto(a, b) {
  return a * b
  }

  function jako(a, b) {
  return a / b
  }

  if (zigi.value === 'add') {
    let yhteensa = summa(eka.value, toka.value)
    vastaus.textContent = `${yhteensa}`
}})

