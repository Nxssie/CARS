window.onload = initialize;

function initialize() {
  var formTest = document.getElementById("contact-form");
  formTest.addEventListener("submit", validateAndSend);
}
function validateAndSend(event) {
  const formTest = event.target;
  const formName = formTest["name"].value;
  const formSurname = formTest["surname"].value;
  const formGender = formTest["gender"].value;
  const formUser = formTest["user"].value;
  const formMail = formTest["mail"].value;
  const formComment = formTest["comment"].value;

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
