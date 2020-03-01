//Main const
let ADD = "add";
let UPDATE = "update";
let action = ADD;
let keyOffice;
let validated = 1;
const formOffice = document.getElementById("form-office");


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


/* Are we uploading data? Yes, we are
  This function is for adding or updating some office in our db
*/
let addOrUpdateOffice = (event) => {
  event.preventDefault();
  var formOffice = event.target;
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

let debugging = (event) => {
  event.preventDefault();
  console.log("hola");

}

let captureFormSubmit = () => {
  document.getElementById("form-office").addEventListener("submit", addOrUpdateOffice);
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

  // User actions 
  var removers = document.getElementsByClassName("remover");
  var editors = document.getElementsByClassName("editor");
  for (var i = 0; i < removers.length; i++) {
    removers[i].addEventListener("click", deleteOffice);
    editors[i].addEventListener("click", editOffice);
  }
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