const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Helper function to display error messages
function showError(input, message, errorElement) {
  errorElement.innerText = message;
  errorElement.style.display = 'block';
  input.style.borderColor = 'red';
}

// Helper function to hide error messages
function hideError(input, errorElement) {
  errorElement.style.display = 'none';
  input.style.borderColor = '#ccc';
}

// Validate the email field
function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === '') {
    showError(emailInput, 'Email is required', emailError);
    return false;
  } else if (!emailPattern.test(email)) {
    showError(emailInput, 'Please enter a valid email address', emailError);
    return false;
  }
  hideError(emailInput, emailError);
  return true;
}

// Validate the password field
function validatePassword() {
  const password = passwordInput.value.trim();
  if (password === '') {
    showError(passwordInput, 'Password is required', passwordError);
    return false;
  }
  hideError(passwordInput, passwordError);
  return true;
}

// Hash the password using SHA-256 (for demonstration purposes)
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hash));
  const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashedPassword;
}

// Form submission handler
loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    // Hash the password before sending
    const password = passwordInput.value.trim();
    const hashedPassword = await hashPassword(password);
    console.log('Email:', emailInput.value);
    console.log('Hashed Password:', hashedPassword);

    // Simulate login success
    alert('Login successful!');
    loginForm.reset();
  }
});
