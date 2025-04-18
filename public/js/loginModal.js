document.getElementById("loginBtn").addEventListener("click", () => {
  document.getElementById("loginModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("loginModal").style.display = "none";
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  hideWarning();
  removeValidationIcons();
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.src = "https://cdn-icons-png.flaticon.com/512/158/158746.png";
  } else {
    passwordInput.type = "password";
    toggleIcon.src = "https://cdn-icons-png.flaticon.com/512/709/709612.png";
  }
}

function isValidUsernameOrEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^\d{12,15}$/; // Country code + mobile number
  return emailRegex.test(value) || usernameRegex.test(value);
}

function validatePassword(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
  return regex.test(password);
}

function showValidationIcon(input, isValid) {
  const iconId = input.id + "Tick";
  const icon = document.getElementById(iconId);
  if (icon) {
    icon.style.display = isValid ? "inline" : "none";
  }
}

function removeValidationIcons() {
  const usernameTick = document.getElementById("usernameTick");
  const passwordTick = document.getElementById("passwordTick");
  if (usernameTick) usernameTick.style.display = "none";
  if (passwordTick) passwordTick.style.display = "none";
}

function showWarning(message) {
  const warning = document.getElementById("warningMsg");
  const warningText = document.getElementById("warningText");
  warningText.textContent = message;
  warning.style.display = "flex";
}

function hideWarning() {
  document.getElementById("warningMsg").style.display = "none";
}

function liveWarningCheck() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    showWarning("Both fields are required!");
  } else if (!isValidUsernameOrEmail(username)) {
    showWarning("Enter a valid mobile number with country code or email.");
  } else if (!validatePassword(password)) {
    showWarning("Password must be 6+ characters, include letters, numbers & symbols.");
  } else {
    hideWarning();
  }
}

document.getElementById("username").addEventListener("input", function () {
  const isValid = isValidUsernameOrEmail(this.value.trim());
  showValidationIcon(this, isValid);
  liveWarningCheck();
});

document.getElementById("password").addEventListener("input", function () {
  const isValid = validatePassword(this.value.trim());
  showValidationIcon(this, isValid);
  liveWarningCheck();
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    showWarning("Both fields are required!");
  } else if (!isValidUsernameOrEmail(username)) {
    showWarning("Enter a valid mobile number with country code or email.");
  } else if (!validatePassword(password)) {
    showWarning("Password must be 6+ characters, include letters, numbers & symbols.");
  } else {
    hideWarning();
    alert("Login successfully");
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("loginForm").reset();
    removeValidationIcons();
  }
});
