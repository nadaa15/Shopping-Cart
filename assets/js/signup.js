let signupName = document.querySelector(".signup-name");
let signupEmail = document.querySelector(".signup-email");
let signupPassword = document.querySelector(".signup-password");
let signupError = document.getElementById("signup-error");
let signupButton = document.querySelector(".signup-button");

let signupArr = JSON.parse(localStorage.getItem("userData")) || [];

//! validation

let nameRegex = /^[a-zA-Z]+[ a-zA-Z]*$/;
let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/;
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateName() {
  if (!signupName.value.match(nameRegex)) {
    signupError.textContent =
      "* Name can't include numbers or special characters";
  } else {
    signupError.textContent = "";
  }
}
function validateEmail() {
  if (!signupEmail.value.match(emailRegex)) {
    signupError.textContent = "* Email not valid";
  } else {
    signupError.textContent = "";
  }
}
function validatePassword() {
  if (!signupPassword.value.match(passwordRegex)) {
    signupError.textContent =
      "* Password must have minimum eight characters, at least one letter and one number";
  } else {
    signupError.textContent = "";
  }
}
signupName?.addEventListener("input", () => {
  validateName();
});
signupEmail?.addEventListener("input", () => {
  validateEmail();
});
signupPassword?.addEventListener("input", () => {
  validatePassword();
});

//! Check if email exist
function isExist() {
  for (let i = 0; i < signupArr.length; i++) {
    if (signupArr[i].email == signupEmail.value) {
      return true;
    }
  }
}

//! Check if inputs are empty
function isEmpty() {
  if (!signupName.value || !signupEmail.value || !signupPassword.value) {
    return true;
  }
}

//! sign up
function signup() {
  let userData = {
    userName: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };
  signupArr.push(userData);
  localStorage.setItem("userData", JSON.stringify(signupArr));
}

signupButton.addEventListener("click", function () {
  if (signupArr.length == 0) {
    signup();
    signupError.textContent = "Success";
    signupError.classList.add("text-green-700");
    signupError.classList.remove("text-red-700");
    window.location.href = "signin.html";
  } else if (isExist() == true) {
    signupError.textContent = "* Email aleardy exists";
    signupError.classList.remove("text-green-700");
    signupError.classList.add("text-red-700");
  } else if (isEmpty() == true) {
    signupError.textContent = "* Please enter all information";
    signupError.classList.remove("text-green-700");
    signupError.classList.add("text-red-700");
  } else {
    signup();
    signupError.textContent = "Success";
    signupError.classList.add("text-green-700");
    signupError.classList.remove("text-red-700");
    window.location.href = "signin.html";
  }
});
