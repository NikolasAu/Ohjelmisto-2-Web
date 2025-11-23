'use strict';

const vitsi = document.querySelector('form');

const hae = document.querySelector('input[name=query]');

const vastaus = document.querySelector('#target')

async function haevitsi (hae) {
  try {
    const URL = `https://api.chucknorris.io/jokes/search?query=${hae}`;
    const response = await fetch(URL);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}



vitsi.addEventListener('submit', async function haku(evt) {
  evt.preventDefault()
  vastaus.innerHTML = '';
  const vitsit = await haevitsi(hae.value);

  for (let i = 0; i < vitsit.result.length; i++) {
    const p = document.createElement('p');
    p.innerText = vitsit.result[i].value;

    vastaus.append(p)
  }
})



