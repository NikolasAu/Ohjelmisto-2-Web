numerot = []

let num;
let i = 0

while (true) {
  num = Number(prompt('Anna numero'));
  if (numerot.includes(num)) {
    console.log("Numero on jo listassa")
    break
  }
  numerot.push(num);
  i++
}

numerot.sort((a,b) => a-b);

for (let e = 0;i > e; e++) {
  console.log(numerot[e]);
}