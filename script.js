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

  document.getElementById("budgetResult").innerText =
    "Solde : " + balance.toFixed(2) + " €";
}

// Vérifie si l'utilisateur a déjà fait un choix au chargement
window.onload = function() {
  if (localStorage.getItem("cookieConsent")) {
    let banner = document.getElementById("cookie-banner");
    if (banner) {
      banner.style.display = "none";
    }
  }
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  let banner = document.getElementById("cookie-banner");
  if (banner) {
    banner.style.display = "none";
  }
}

function refuseCookies() {
  localStorage.setItem("cookieConsent", "refused");
  let banner = document.getElementById("cookie-banner");
  if (banner) {
    banner.style.display = "none";
  }
}

function calcSavingsGoal() {
  let monthly = parseFloat(document.getElementById("monthlySave").value) || 0;
  let duration = parseInt(document.getElementById("months").value) || 0;

  let totalSaved = monthly * duration;

  document.getElementById("savingsResult").innerText =
    "Épargne totale cumulée : " + totalSaved.toFixed(2) + " €";
}
