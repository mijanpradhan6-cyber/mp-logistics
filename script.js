function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}

function trackShipment() {
  const lr = document.getElementById("lr").value.trim();
  const result = document.getElementById("result");

  if (lr === "") {
    result.innerHTML =
      '<div class="notice">Please enter your LR / shipment number.</div>';
    return;
  }

  result.innerHTML =
    '<div class="notice">Shipment <b>' +
    lr +
    '</b> received. Live status will appear here after backend connection.</div>';
}
