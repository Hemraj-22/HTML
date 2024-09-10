const screen = document.getElementById('screen');
let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let shouldResetScreen = false;

document.querySelectorAll('.number').forEach(button =>
  button.addEventListener('click', () => appendNumber(button.value))
);

document.querySelectorAll('.operator').forEach(button =>
  button.addEventListener('click', () => setOperator(button.value))
);

document.querySelector('.equal-sign').addEventListener('click', evaluate);
document.querySelector('.all-clear').addEventListener('click', clear);
document.querySelector('.decimal').addEventListener('click', appendDecimal);

function appendNumber(number) {
  if (screen.value === '0' || shouldResetScreen) resetScreen();
  screen.value += number;
}

function resetScreen() {
  screen.value = '';
  shouldResetScreen = false;
}

function setOperator(operator) {
  if (currentOperator !== '') evaluate();
  firstOperand = screen.value;
  currentOperator = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperator === '' || shouldResetScreen) return;
  if (currentOperator === '/' && screen.value === '0') {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = screen.value;
  screen.value = roundResult(
    operate(currentOperator, firstOperand, secondOperand)
  );
  currentOperator = '';
}

function appendDecimal() {
  if (shouldResetScreen) resetScreen();
  if (!screen.value.includes('.')) screen.value += '.';
}

function clear() {
  screen.value = '';
  firstOperand = '';
  secondOperand = '';
  currentOperator = '';
  shouldResetScreen = false;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return null;
  }
}
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
