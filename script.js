function randomSignal() {
  const signals = ["📈 Buy", "📉 Sell", "⏸ Hold"];
  return signals[Math.floor(Math.random() * signals.length)];
}

document.getElementById("xauusd").querySelector(".signal").textContent = randomSignal();
document.getElementById("usoil").querySelector(".signal").textContent = randomSignal();
document.getElementById("us30").querySelector(".signal").textContent = randomSignal();