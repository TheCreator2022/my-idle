var dollars = new Decimal(0)
var dps = new Decimal(0)
var dpc = new Decimal(1)

document.getElementById("click").onclick = () => {
  dollars = dollars.add(dpc)
}

function Update() {
 dollars = dollars.add(dps)
 document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
}

setInterval(Update, 100)
