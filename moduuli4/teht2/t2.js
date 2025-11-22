'use strict';

const apiURL = 'https://api.tvmaze.com';

const tvFromElement = document.querySelector('#tvForm');

tvFromElement.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const formData = new FormData(tvFromElement);
  const queryString = new URLSearchParams(formData).toString();

  const arvo = tvFromElement.querySelector('input[name=q]').value;
  const url = `${apiURL}/search/shows?q=${arvo}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
      console.log(error);
  }
})