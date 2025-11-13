koirat = []

for (let i = 0; i < 6; i++) {
  const koira = prompt('Anna koiran nimi')
  koirat[i] = koira
}

vär = koirat.sort().reverse()

const list = document.getElementById("target")

vär.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
})