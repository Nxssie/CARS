var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var resetBtn = document.getElementById("reset-btn");

export let loadModal = () => {
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
