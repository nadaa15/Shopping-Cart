let signinEmail = document.querySelector(".signin-email");
let signinPassword = document.querySelector(".signin-password");
let signinError = document.getElementById("signin-error");
let signinButton = document.querySelector(".signin-button");

let signupArr = JSON.parse(localStorage.getItem("userData")) || [];


//! validation

let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/;
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateEmail() {
  if (!signinEmail.value.match(emailRegex)) {
    signinError.textContent = "* Email not valid";
  } else {
    signinError.textContent = "";
  }
}
function validatePassword() {
  if (!signinPassword.value.match(passwordRegex)) {
    signinError.textContent =
      "* Password must have minimum eight characters, at least one letter and one number";
  } else {
    signinError.textContent = "";
  }
}

signinEmail?.addEventListener("input", () => {
  validateEmail();
});
signinPassword?.addEventListener("input", () => {
  validatePassword();
});

//! Check if Signed Up

function isSignedUp() {
  for (let i = 0; i < signupArr.length; i++) {
    if (
      signupArr[i].email == signinEmail.value &&
      signupArr[i].password == signinPassword.value
    ) {
      return true;
    }
  }
}

//! Check if inputs are empty

function isEmpty() {
  if (!signinEmail.value || !signinPassword.value) {
    return true;
  }
}

//! login

signinButton.addEventListener("click", function () {
  if (isSignedUp() == true) {
    signinError.textContent = "Succes";
    signinError.classList.add("text-green-700");
    signinError.classList.remove("text-red-700");
    window.location.href = "index.html";
  } else if (isEmpty() == true) {
    signinError.textContent = "* Please enter all information";
    signinError.classList.remove("text-green-700");
    signinError.classList.add("text-red-700");
  } else {
    signinError.textContent = "* Incorrect email or password";
    signinError.classList.remove("text-green-700");
    signinError.classList.add("text-red-700");
  }
});
