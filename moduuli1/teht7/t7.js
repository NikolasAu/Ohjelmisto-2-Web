const määrä = prompt('Anna noppien määrä')
number = parseInt(määrä)

for (let i = 0; i <= number; i += 1) {
  num = Math.floor(Math.random()*6)+1;
  yht = yht +num
}
console.log(yht)