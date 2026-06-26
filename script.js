function calcSalary() {
  let brut = document.getElementById("salary").value;
  let net = brut * 0.78;
  document.getElementById("salaryResult").innerText =
    "Salaire net estimé : " + net.toFixed(2) + " €";
}

function calcInterest() {
  let c = document.getElementById("capital").value;
  let r = document.getElementById("rate").value / 100;
  let y = document.getElementById("years").value;

  let result = c * Math.pow(1 + r, y);

  document.getElementById("interestResult").innerText =
    "Montant final : " + result.toFixed(2) + " €";
}

function calcBudget() {
  let income = parseFloat(document.getElementById("income").value) || 0;
  let expenses = parseFloat(document.getElementById("expenses").value) || 0;

  let balance = income - expenses;

  // Utilisation de .toFixed(2) pour afficher un beau montant propre
  document.getElementById("budgetResult").innerText =
    "Solde : " + balance.toFixed(2) + " €";
}

  document.getElementById("budgetResult").innerText =
    "Solde : " + balance + " €";
}
// Vérifie si l'utilisateur a déjà fait un choix
window.onload = function() {
  if (localStorage.getItem("cookieConsent")) {
    document.getElementById("cookie-banner").style.display = "none";
  }
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  document.getElementById("cookie-banner").style.display = "none";
  // Ici, tu peux charger AdSense si tu veux être 100% strict
}

function refuseCookies() {
  localStorage.setItem("cookieConsent", "refused");
  document.getElementById("cookie-banner").style.display = "none";
}
