const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("loginform");
const loginUserName = document.getElementById("loginUserName");
const loginPassword = document.getElementById("loginPassword");
const showPasswordIcon = document.querySelector(".fa");

showPasswordIcon.addEventListener("click", showPassword);
//Mostrar contraseñas//
function showPassword() {
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
    showPasswordIcon.style.color = "red";
  } else {
    loginPassword.type = "password";
    showPasswordIcon.style.color = "#ddd";
  }
}

//Validacion//

loginForm.addEventListener("submit", submitValidation);

function submitValidation(event) {
  event.preventDefault();

  if (loginUserName.value === "" || loginUserName.value.length < 3) {
    showError(
      loginUserName,
      "El nombre de usuario no puede estar vacío y debe ser > 3"
    );
  } else {
    showSuccess(loginUserName);
  }
  if (loginPassword.value === "" || loginPassword.value.length < 6) {
    showError(
      loginPassword,
      "La contraseña no puede estar vacía y debe ser > 6"
    );
  } else {
    showSuccess(loginPassword);
  }
}

//Mostrar Mensaje de Error//
function showError(input, message) {
  const formField = input.parentElement;
  // console.log(formField.className)
  formField.className = "form-field error";
  if ((formField.className = "form-field error")) {
    const alert_message = formField.querySelector(".alert-message");
    alert_message.style.visibility = "visible";
    alert_message.style.color = "red";
    alert_message.innerText = message;
  }
}

function showSuccess(input) {
  const formField = input.parentElement;
  formField.className = "form-field success";
  if ((formField.className = "form-field success")) {
    const alert_message = formField.querySelector(".alert-message");
    alert_message.style.visibility = "hidden";
  }
}

//Formulario de solicitud//

const requestForm = document.querySelector(".form-request");
requestForm.style.display = "none";
const showRequestForm = document.querySelector(".reset-password");

showRequestForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (requestForm.style.display !== "block") {
    loginContainer.style.minHeight = "650px";
    requestForm.style.display = "block";
  } else {
    requestForm.style.display = "none";
    loginContainer.style.minHeight = "initial";
  }
});

requestForm.addEventListener("submit", request);

function request(e) {
  e.preventDefault();
  if (requestForm.style.display === "block") {
    const requestEmail = document.getElementById("requestEmail");
    if (requestEmail.value === "") {
      showError(requestEmail, "El correo electrónico no puede estar vacío");
    } else {
      showSuccess(requestEmail);
    }
  }
}