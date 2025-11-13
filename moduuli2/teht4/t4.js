numerot = []

let num;
let i = 0

do {
  num = Number(prompt('Anna numero'));
  numerot.push(num);
  i++
} while (num !== 0);

numerot.sort((a,b) => a-b);

for (let e = 0;i > e; e++) {
  console.log(numerot[e]);
}