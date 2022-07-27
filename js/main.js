var dollars = new Decimal(0)
var dps = new Decimal(0)
var dpc = new Decimal(1)
let costs = [new Decimal(30)]

document.getElementById("click").onclick = () => {
  dollars = dollars.add(dpc)
}

document.getElementById("cost1").onclick = () => {
  if (dollars.gte(costs[0])) {
    dollars = dollars.sub(costs[0])
    dps = dps.add(1)
    costs[0] = costs[0].mul(1.8)
  }
}

function Update() {
 dollars = dollars.add(dps)
 document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
 document.getElementById("costNumber1").innerText = costs[0]
}

setInterval(Update, 100)
