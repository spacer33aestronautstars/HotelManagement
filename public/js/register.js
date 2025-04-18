document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("registerBtn");
    const registerModal = document.getElementById("registerModal");
    const closeRegisterModal = document.getElementById("closeRegisterModal");
  
    // Open modal on click
    registerBtn.addEventListener("click", () => {
      registerModal.style.display = "flex";
    });
  
    // Close modal when close button is clicked
    closeRegisterModal.addEventListener("click", () => {
      registerModal.style.display = "none";
    });
  
    // Close modal when clicking outside modal content
    window.addEventListener("click", (event) => {
      if (event.target === registerModal) {
        registerModal.style.display = "none";
      }
    });
  
    // Password and Confirm Password check
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (e) => {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
  
      if (password !== confirmPassword) {
        e.preventDefault(); // Stop form from submitting
        alert("Passwords do not match!");
      }
    });
  });
  