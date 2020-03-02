import { loadNavbar } from './navbar.js';
import { loadFooter } from './footer.js';
import { findTreasure } from './game.js';
import { officeList } from './office.js';
import { loadModal } from './officeModal.js';
import * as auth from "./auth.js";
import { loadFirebase } from "./firebase.js";

window.onload = initialize;

function initialize() {
  loadFirebase();
  document.getElementById("navbar-top").innerHTML = loadNavbar();
  document.getElementById("page-footer").innerHTML = loadFooter();
  auth.userLogout();
  auth.loggedCheck();
  
  if (document.getElementById("user-login")) {
    const userLoginForm = document.getElementById("user-login");
    userLoginForm.addEventListener("submit", auth.userLogin);
  }

  if (document.getElementById("user-register")) {
    const userRegisterForm = document.getElementById("user-register");
    userRegisterForm.addEventListener("submit", auth.userRegister);
  }

  const emailSub = document.getElementById("emailSub");
  emailSub.addEventListener("submit", validateAndSendEmail);

  if (document.getElementById("contact-form")){
    const formTest = document.getElementById("contact-form");
    formTest.addEventListener("submit", validateAndSend);
  }

  if (document.getElementById("map")) {
    findTreasure();
  }

  if (document.getElementById("offices-table")) {
    officeList();
    loadModal();
  }
}

function validateAndSendEmail(event) {
  const emailSub = event.target;
  const email = emailSub["email"].value;

  if (!email) {
    console.log("email requerido");
    document.getElementById("email-error").style.display = "block";
    event.preventDefault();
  }
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
/*
let getBack = document.getElementById("get-back");
getBack.addEventListener("click", getBackFunction);

let getBackFunction = () => {
  window.history.back();
};
*/