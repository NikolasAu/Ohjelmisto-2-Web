const vuosi = prompt('Anna vuosi')

if (vuosi % 4 === 0 && vuosi % 100 !== 0) {
  document.querySelector('#karkaus').innerText = ('vuosi ' + vuosi +
      ' on karkausvuosi.')
} else if (vuosi % 100 === 0 && vuosi % 400 === 0) {
  document.querySelector('#karkaus').innerText = ('vuosi ' + vuosi +
      ' on karkausvuosi.')
} else {
  document.querySelector('#karkaus').innerText = ('vuosi ' + vuosi +
      ' ei ole karkausvuosi.')
}



