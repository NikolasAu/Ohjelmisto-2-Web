const sqrt = confirm('Should I calculate the square root?')
if (sqrt === true) {
  const luku = prompt('Anna numero')
  if (luku < 0) {
    document.querySelector(
        '#numero').innerText = "The square root of a negative number is not defined"
  } else {
    const number = parseInt(luku);
    root = Math.sqrt(number)
    document.querySelector('#numero').innerText = root
  }
} else if (sqrt === false) {
  document.querySelector(
      '#numero').innerText = "The square root is not calculated."
}