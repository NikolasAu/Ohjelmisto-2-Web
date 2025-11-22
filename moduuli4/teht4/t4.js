'use strict';

const apiURL = 'https://api.tvmaze.com';

const tvFromElement = document.querySelector('#tv');
const tvResultsElement = document.querySelector('#results');

tvFromElement.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const arvo = tvFromElement.querySelector('input[name=q]').value;
  const url = `${apiURL}/search/shows?q=${arvo}`;

  const formData = new FormData(tvFromElement);
  const queryString = new URLSearchParams(formData).toString();

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    tvResultsElement.inner = ''

    for (const tvShow of data) {

      const h2 = document.createElement('h2')
      h2.innerText = tvShow.show.name

      const img = document.createElement('img')
      img.src = tvShow.show.image ? tvShow.show.image?.medium : 'https://placehold.co/210x295?text=Not%20Found';
      img.alt = tvShow.show.name

      const article = document.createElement('article')
      article.append(h2, img)

      tvResultsElement.append(article)

      console.log(img)

    }

  } catch (error) {
      console.log(error);
  }
})


// kuvaa ei löydy versio 1
// img.addEventListener('error', function () {
  // img.src = ''
// })

// kuvaa ei löydy versio 2
// if (!tvShow.show.image) {
  // tvShow.show.image.medium = {medium: ''}
// }

// kuvaa ei löydy versio 3
// img.src = tvShow.show.image ?
//  tvShow.show.image.medium :
//    ''
// img-alt = tvShow.show.name


