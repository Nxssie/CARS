export let officeList = () => {
  downloadOffices();

}

let downloadOffices = () => {
  var officesRef = firebase.database().ref("offices");
  officesRef.on("value", showOffices);
}

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
      '<button class="btn btn-primary" id="small-logo">Open logo</button>'+
      "</td>" +
      '<td> <i class="fas fa-trash-alt remover" data-item="' +
      key +
      '"></i> <i class="fas fa-edit editor" data-item="' +
      key +
      '"></i> </td>' +
      "</tr>";
      
  }

  let myOfficesList = document.getElementById("my-offices-list");
  myOfficesList.innerHTML = rows;

  /* User actions 
  var removers = document.getElementsByClassName("remover");
  var editors = document.getElementsByClassName("editor");
  for (var i = 0; i < removers.length; i++) {
    removers[i].addEventListener("click", deleteItem);
    editors[i].addEventListener("click", editItem);*/
  }