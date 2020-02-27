//Main const
const formOffice = document.getElementById("form-offices");

// Exported function to load it from loader.js
export let officeList = () => {
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
let addOrUpdateOffice = () => {
  let file = formOffice.image.files[0];
  let fileName = file.name;

  //adding part
  var refOffice = firebase.database().ref("offices");
  let ref = firebase.storage().ref().child(fileName0);
  ref.put(file).then(function (snapshot) {
    console.log('Uploaded file!');
    ref.getDownloadURL().then(function (url) {
      refOffice.push({
        id: formOffice.id.value,
        place: formOffice.place.value,
        admin: image_url
      })
    })
  })

  //updating part


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
      data[key].location +
      "</td>" +
      "<td>" +
      data[key].admin +
      "</td>" +
      "<td>" +
      '<img data-office-id="'+ key + '" class="img-fluid imgOnDb" src="' +
                                        data[key].image_url + 'alt="image"/>' +
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
    editors[i].addEventListener("click", editItem);
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