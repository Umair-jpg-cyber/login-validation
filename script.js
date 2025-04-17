
 
const form = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{11}$/;
  const passwordRegex = /^(?=[A-Z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

  let isValid = true;

  if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format!";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Phone validation
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Phone must be 11 digits!";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and start with an uppercase letter.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    alert("Login successful");
    form.reset(); 
  }
});
