'use strict';

const URL = 'https://api.chucknorris.io/jokes/random';

async function haku(evt) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.value);
  } catch (error) {

  }
}

haku()