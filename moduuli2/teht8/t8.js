'use strict';

const names = ["Johnny", "DeeDee", "Joey", "Marky"]

function concat(nimet) {
  const result = nimet.reduce((acc, item) => acc + item, "");
  return result
}

document.querySelector('#target').innerText = concat(names);