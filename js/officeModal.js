export let loadModal = () => {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the element that closes the modal
  var closeBtn = document.getElementsByClassName("close")[0];

  // Get the cancel button
  var resetBtn = document.getElementById("reset-btn");

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on close element, close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // When the user resets the form also closes the modal
  resetBtn.onclick = function() {
    modal.style.display = "none";
  };
};

export let loadEditModal = () => {



};
