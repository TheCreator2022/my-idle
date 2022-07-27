var dollars = new Decimal(0)
var dps = new Decimal(0)
var dpc = new Decimal(1)
let costs = [new Decimal(30), new Decimal(1e3), new Decimal(7290)]

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

document.getElementById("cost2").onclick = () => {
  if (dollars.gte(costs[1])) {
    dollars = dollars.sub(costs[1])
    dps = dps.add(5)
    costs[1] = costs[1].mul(1.8)
  }
}

document.getElementById("cost3").onclick = () => {
  if (dollars.gte(costs[2])) {
    dollars = dollars.sub(costs[2])
    dps = dps.add(100)
    costs[2] = costs[2].mul(1.8)
  }
}


function Update() {
 dollars = dollars.add(dps)
 document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
 document.getElementById("costNumber1").innerText = costs[0]
 document.getElementById("costNumber2").innerText = costs[1]
 document.getElementById("costNumber3").innerText = costs[2]
}

setInterval(Update, 100)
