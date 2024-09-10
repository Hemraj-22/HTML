const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const phoneError = document.getElementById('phoneError');

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

// Validate the name field
function validateName() {
  const name = nameInput.value.trim();
  if (name === '') {
    showError(nameInput, 'Full name is required', nameError);
    return false;
  }
  hideError(nameInput, nameError);
  return true;
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
  } else if (password.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters long', passwordError);
    return false;
  }
  hideError(passwordInput, passwordError);
  return true;
}

// Validate the confirm password field
function validateConfirmPassword() {
  const confirmPassword = confirmPasswordInput.value.trim();
  const password = passwordInput.value.trim();
  if (confirmPassword === '') {
    showError(confirmPasswordInput, 'Please confirm your password', confirmPasswordError);
    return false;
  } else if (confirmPassword !== password) {
    showError(confirmPasswordInput, 'Passwords do not match', confirmPasswordError);
    return false;
  }
  hideError(confirmPasswordInput, confirmPasswordError);
  return true;
}

// Validate the phone number field
function validatePhone() {
  const phone = phoneInput.value.trim();
  const phonePattern = /^[0-9]{10}$/;
  if (phone === '') {
    showError(phoneInput, 'Phone number is required', phoneError);
    return false;
  } else if (!phonePattern.test(phone)) {
    showError(phoneInput, 'Please enter a valid 10-digit phone number', phoneError);
    return false;
  }
  hideError(phoneInput, phoneError);
  return true;
}

// Form submission handler
registrationForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  const isPhoneValid = validatePhone();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid) {
    alert('Registration successful!');
    registrationForm.reset();
  }
});
