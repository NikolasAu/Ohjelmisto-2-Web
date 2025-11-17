'use strict';

const tvFromElement = document.querySelector('#tvForm');

tvFromElement.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const arvo = tvFromElement.querySelector('input[name=q]').value;
  const url = `https://api.tvmaze.com/search/shows?q=${arvo}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
      console.log(error);
  }
})

