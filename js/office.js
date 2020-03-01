//Main const
let ADD = "add";
let UPDATE = "update";
let action = UPDATE;
let keyOffice;


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
  let id = formOffice["office-id"].value;
  let place = formOffice.place.value;
  let admin = formOffice.admin.value;
  let defaultLogo = "img/tesla_icon.png"

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
    let refOfficeToEdit = firebase.database().ref("offices" + keyItem);
      
      let ref = firebase.storage().ref().child(fileName);
      ref.put(file).then(function (snapshot) {
        console.log('Uploaded a blob or file!');

        ref.getDownloadURL().then(function (url) {

          refOfficeToEdit.update({
            type: formItem.type.value,
            stock: formItem.stock.value,
            price: formItem.price.value,
            image_url: url
          });
        }).catch(function (error) {
          // Handle any errors
        });
      });

      editButton.style.display = "none";
      cancelButton.style.display = "none";
      createButton.style.display = "inline-block";

      formItem.reset();
  }  



  //updating part


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
    //editors[i].addEventListener("click", editItem);
  }
}

// Deleting offices by capturing office key
let deleteOffice = (event) => {
  let buttonclicked = event.target;

  let keyItemToDelete = buttonclicked.getAttribute("data-office");
  let refItemToDelete = firebase.database().ref("offices/" + keyItemToDelete);
  refItemToDelete.remove();
}

/* Doing the same as above but instead of removing, just editing taking the info from the modal*/
let editOffice = (event) => {
  let buttonclicked = even.target;

  let keyItemToEdit = buttonclicked.getAttribute("data-office");
  let refItemToEdit = firebase.database().ref("offices/" + keyItemToEdit);

  refItemToEdit.once("value", function (snap) {
    let data = snap.val;

    formOffice.place.value = data.place;
    formOffice.admin.value = data.admin;
  });
}