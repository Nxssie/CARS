window.onload = initialize;

function initialize() {
  var formTest = document.getElementById("contact-form");
  formTest.addEventListener("submit", validateAndSend);
}
function validateAndSend(event) {
  var formTest = event.target;
  var formName = formTest["name"].value;
  var formSurname = formTest["surname"].value;
  var formGender = formTest["gender"].value;
  var formUser = formTest["user"].value;
  var formMail = formTest["mail"].value;
  var formComment = formTest["comment"].value;

  if (!formName) {
    console.log("Nombre requerido.");
    document.getElementById("name-error").style.display = "block";
    event.preventDefault();
  }
  if (!formSurname) {
    console.log("No se ha introducido ningún apellido");
    document.getElementById("surname-error").style.display = "block";
    event.preventDefault();
  }
  if (!formGender) {
    console.log("No se ha seleccionado género.");
    document.getElementById("gender-error").style.display = "block";
    event.preventDefault();
  }
  if (!formUser) {
    console.log("No se ha introducido un usuario");
    document.getElementById("user-error").style.display = "block";
    event.preventDefault();
  }
  if(!formMail){
    console.log("No se ha introducido un mail");
    document.getElementById("mail-error").style.display = "block";
    event.preventDefault();
  }
  if(!formComment){
    console.log("Campo mensaje vacío.");
    document.getElementById("comment-error").style.display = "block";
    event.preventDefault();
  }
}
