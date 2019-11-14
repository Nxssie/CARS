window.onload = initialize;

function initialize() {
  var formTest = document.getElementById("contact-form");
  formTest.addEventListener("submit", validateAndSend);
}
function validateAndSend(event) {
  console.log("hola");
  var formTest = event.target;
  var formName = formTest["name"].value;
  //var formSurname = formTest["surname"].value;
  //var formAge = formTest["age"].value;
  //var formGender = formTest["gender"].value;

  if (!formName) {
    console.log("Nombre requerido.");
    document.getElementById("name-error").style.display = "block";
    event.preventDefault();
    return;
  }
  if (!formSurname) {
    console.log("1 Apellido como mínimo.");
    document.getElementById("surname-error").style.display = "block";
    event.preventDefault();
    return;
  }

}
