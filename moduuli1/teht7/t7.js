let yht = 0

const määrä = prompt('Anna noppien määrä')
number = parseInt(määrä)

for (let i = 0; i <= number; i += 1) {
  const num = Math.floor(Math.random()*6)+1;
  console.log(num)
  yht = yht + num
}
document.querySelector('#Summa').innerText = `noppien summa on ${yht}`