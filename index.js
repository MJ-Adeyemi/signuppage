function validatesignUp() {
  // for username
  let usernameInput = document.getElementById("username").value;
  let usernameError = document.getElementById("usernameError");
  if (usernameInput.length < 5) {
    usernameError.innerHTML = "Please input a valid username!!";
  }

  // for email
  let emailInput = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");
  if (!emailInput.includes("@") && !emailInput.includes(".")) {
    emailError.innerHTML = "Please input a valid email address!!";
  }

  //   for phone number
  let pnumberInput = document.getElementById("pnumber").value;
  let pnumberError = document.getElementById("pnumberError");
  if (!pnumberInput.startsWith("+234") && !pnumberInput.length < 11) {
    pnumberError.innerHTML = "Please input a correct phone number!!";
  }

  // for password
  let passwordInput = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");
  if (passwordInput.length < 8) {
    passwordError.innerHTML = "Please input a valid password!!";
  }

  // for confirm-password
  let cPasswordinput = document.getElementById("cpassword").value;
  let cpasswordError = document.getElementById("cpasswordError");
  if (passwordInput !== cPasswordinput) {
    cpasswordError.innerHTML = "Passwords do not match, check again!!";
  }
}