const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultText = document.getElementById('resultText');

// Currency conversion rates (static data for demonstration purposes)
const exchangeRates = {
  USD: { EUR: 0.85, GBP: 0.76, INR: 73.5, JPY: 110 },
  EUR: { USD: 1.18, GBP: 0.9, INR: 86, JPY: 130 },
  GBP: { USD: 1.31, EUR: 1.11, INR: 95, JPY: 145 },
  INR: { USD: 0.0136, EUR: 0.012, GBP: 0.011, JPY: 1.53 },
  JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0069, INR: 0.65 }
};

// Function to handle the conversion
function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (from === to) {
    resultText.innerText = `Converted Amount: ${amount} ${to}`;
    return;
  }

  const conversionRate = exchangeRates[from][to];
  const convertedAmount = (amount * conversionRate).toFixed(2);
  resultText.innerText = `Converted Amount: ${convertedAmount} ${to}`;
}

// Add event listener to the button
convertBtn.addEventListener('click', convertCurrency);
