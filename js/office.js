//Main const
let ADD = "add";
let UPDATE = "update";
let action = ADD;
let keyOffice;
let validated = 0;
const formOffice = document.getElementById("form-office");

//admins array to add admin users
const admins = ["JEkDARmWnvPwxsDNoj4IrOQrWK72", "m0kmUtT7dtdABNfEO8lh0rPIGPs2"];


// Exported function to load it from loader.js
export let officeList = () => {
  captureFormSubmit();
  downloadOffices();
}

// The function to download the offices uploaded to firebase database
let downloadOffices = () => {
  var officesRef = firebase.database().ref("offices");
  officesRef.on("value", showOffices);
}

let validateOfficeForm = (event) => {
  event.preventDefault();
  let officeForm = event.target;
  let id = officeForm.officeId.value;
  let place = officeForm.place.value;
  let admin = officeForm.admin.value;
  let logo = officeForm.img.files[0];
  let letters = /^[A-Za-z]+$/;

  if (!id || isNaN(id)) {
    let idCheck = 0;
    console.log("The id value must be a number. Check it.");
    document.getElementById("id-error").style.display = "block";
    //Something 

  } else if (!place || place == "") {
    document.getElementById("place-error").style.display = "block";
    document.getElementById("id-error").style.display = "none";
    console.log("The place value cannot be empty and must match with the alphabet.");
    //something else

  } else if (!admin || !admin.match(letters)) {
    document.getElementById("id-error").style.display = "none";
    document.getElementById("place-error").style.display = "none";
    document.getElementById("admin-error").style.display = "block"
    console.log("The admin value is not a string that matches with the alphabet");
    //something else

  } else if (!logo && !officeForm.nologo.checked) {
    document.getElementById("id-error").style.display = "none";
    document.getElementById("place-error").style.display = "none";
    document.getElementById("admin-error").style.display = "none";
    document.getElementById("logo-error").style.display = "block";
    console.log("The logo input must be an image file or the checked box");

  } else {
    document.getElementById("id-error").style.display = "none";
    document.getElementById("place-error").style.display = "none";
    document.getElementById("admin-error").style.display = "none";
    document.getElementById("logo-error").style.display = "none";
    validated = 1;
  }

  addOrUpdateOffice();
}


/* Are we uploading data? Yes, we are
  This function is for adding or updating some office in our db
*/
let addOrUpdateOffice = () => {
  document.getElementById("myModal").style.display = "none";
  let formOffice = document.getElementById("form-office");
  console.log(formOffice);
  let id = formOffice.officeId.value;
  let place = formOffice.place.value;
  let admin = formOffice.admin.value;
  let defaultLogo = "img/tesla_icon.png"

  if (validated == 1) {
    if (action == ADD) {
      //adding part
      if (formOffice.nologo.checked) {
        var refOffice = firebase.database().ref().child("offices");
        refOffice.push({
          id: id,
          place: place,
          admin: admin,
          img: defaultLogo
        });

        formOffice.reset();
      } else {
        var file = formOffice.img.files[0];
        var fileName = file.name;
        let ref = firebase.storage().ref().child(fileName);
        ref.put(file).then(function (snapshot) {
          console.log('Uploaded file!');
          ref.getDownloadURL().then(function (url) {
            var refOffice = firebase.database().ref().child("offices");
            refOffice.push({
              id: id,
              place: place,
              admin: admin,
              img: url
            });
          }).catch(function (error) {
            console.log(error);
          });
        });
        formOffice.reset();
      }
    } else {

      if (formOffice.nologo.checked) {
        let refOfficeToEdit = firebase.database().ref("offices/" + keyOffice);
        refOfficeToEdit.update({
          id: id,
          place: place,
          admin: admin,
          img: defaultLogo
        });
      } else {
        let refOfficeToEdit = firebase.database().ref("offices/" + keyOffice);
        var file = formOffice.img.files[0];
        var fileName = file.name;
        let ref = firebase.storage().ref().child(fileName);
        ref.put(file).then(function (snapshot) {
          console.log('Uploaded a blob or file!');

          ref.getDownloadURL().then(function (url) {

            refOfficeToEdit.update({
              id: id,
              place: place,
              admin: admin,
              img: url
            });
          }).catch(function (error) {
            // Handle any errors
          });
        });

        formOffice.reset();
      }
    }
  }



}

let captureFormSubmit = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    for (let i = 0; i < admins.length; i++) {
      if (user.uid == admins[i]) {
        document.getElementById("form-office").addEventListener("submit", validateOfficeForm);
      } else {
        console.log("You are not and admin user, so you haven't the required permission. (WIP)");
      }
    }
  });
}

// Deleting offices by capturing office key
let deleteOffice = (event) => {
  let buttonclicked = event.target;

  let keyOfficeToDelete = buttonclicked.getAttribute("data-office");
  let refOfficeToDelete = firebase.database().ref("offices/" + keyOfficeToDelete);
  refOfficeToDelete.remove();
}


/* Doing the same as above but instead of removing, just editing taking the info from the modal*/
let editOffice = (event) => {
  let buttonclicked = event.target;
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  let keyOfficeToEdit = buttonclicked.getAttribute("data-office");
  let refOfficeToEdit = firebase.database().ref("offices/" + keyOfficeToEdit);

  refOfficeToEdit.once("value", function (snap) {
    let data = snap.val();

    formOffice.officeId.value = data.officeId;
    formOffice.place.value = data.place;
    formOffice.admin.value = data.admin;
  });

  action = UPDATE;
}

//Visualizing the offices
let showOffices = (snap) => {
  var data = snap.val();

  var rows = "";

  for (var key in data) {
    rows +=
      "<tr>" +
      "<td>" +
      data[key].id +
      "</td>" +
      "<td>" +
      data[key].place +
      "</td>" +
      "<td>" +
      data[key].admin +
      "</td>" +
      "<td>" +
      '<img data-office-id="' + key + '" class="img-fluid imgOnDb" src="' +
      data[key].img + '"alt="image"/>' +
      "</td>" +
      '<td> <i class="fas fa-trash-alt remover" data-office="' +
      key +
      '"></i> <i class="fas fa-edit editor" data-office="' +
      key +
      '"></i> </td>' +
      "</tr>";

  }

  let myOfficesList = document.getElementById("my-offices-list");
  myOfficesList.innerHTML = rows;

  let showAdvice = () => {
    document.getElementById("permission-error").style.display = "block";
  }

  //Check if user is the admin one
  let adminCheck = () => {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        for (let j = 0; j < admins.length; j++) {
          if (user.uid == admins[j]) {
            // User actions 
            let removers = document.getElementsByClassName("remover");
            let editors = document.getElementsByClassName("editor");
            for (var i = 0; i < removers.length; i++) {
              removers[i].addEventListener("click", deleteOffice);
              editors[i].addEventListener("click", editOffice);
            }
          } else if(user.uid != admins[j]) {
            // User advices
            let removers = document.getElementsByClassName("remover");
            let editors = document.getElementsByClassName("editor");
            for (var i = 0; i < removers.length; i++) {
              removers[i].addEventListener("click", showAdvice);
              editors[i].addEventListener("click", showAdvice);
            }
          }
        }
      } else {
        console.log("There's no user logged");

      }
    });
  }

  adminCheck();
}