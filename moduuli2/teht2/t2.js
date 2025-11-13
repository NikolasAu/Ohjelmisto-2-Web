const osal = prompt('Anna osallistujien määrä')
const x = parseInt(osal)

osallistujat = []

for (let i = 1 ; i <= x; i++) {
  const nimi = prompt('Anna osallistujan nimi')
  osallistujat[i] = nimi
}

aak = osallistujat.sort()


const list = document.getElementById("target")

aak.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
})