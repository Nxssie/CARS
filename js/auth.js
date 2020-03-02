export let userLogin = (event) => {
  event.preventDefault();
  let loginForm = event.target;
  let email = loginForm["user-email"].value;
  let password = loginForm["user-password"].value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // ...
  });

  //window.location.href = "user-info.html";
}

export let userLogout = () => {

  document.getElementById("logout-entry").addEventListener("click", function() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });

    window.location.href = "index.html";

  }); 
}

export let userRegister = (event) => {
  event.preventDefault();
  let registerForm = event.target;
  let email = registerForm["user-email"].value;
  let password = registerForm["user-password"].value;


  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // ...
  });

  //window.location.href = "index.html";
}

export let loggedCheck = () => {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.email + " is already logged.");
      document.getElementById("login-entry").style.display="none";
      document.getElementById("register-entry").style.display="none";
      document.getElementById("logout-entry").style.display="block";
      document.getElementById("profile-entry").style.display="block";
      if (document.getElementById("profileContainer")) {
        document.getElementById("UID").innerHTML = user.uid;
        document.getElementById("userEmail").innerHTML = user.email;
      }
      
      
    } else {
      console.log("There's no user logged");
      document.getElementById("login-entry").style.display="block";
      document.getElementById("register-entry").style.display="block";
      document.getElementById("logout-entry").style.display="none";
      document.getElementById("profile-entry").style.display="none";
    }
  });
}