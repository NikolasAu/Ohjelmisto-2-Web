let yht = 0
let yks = 0, kaks = 0, kolm = 0, nelj = 0, viis = 0, kuus =0;

const määrä = prompt('Give number if dices')
number = parseInt(määrä)

for (let i = 0; i <= number; i += 1) {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log(num)
  yht = yht + num
}

const peinin = number
const suurin = number * 6
const arvo = suurin - peinin
const keski = (1 / arvo) * 100

document.querySelector('#Prosentti').innerText = `The probability to get sum ${yht} is ${keski}%`;