window.onload = initialize;
const KEY_UP = 119;
const KEY_DOWN = 115;
const KEY_LEFT = 97;
const KEY_RIGHT = 100;

var x = 0;
var y = 0;
var canvas;
var ctx;

function initialize() {
  canvas = document.getElementById("canvas");

  window.addEventListener("keypress", movePlayer);

  ctx = canvas.getContext("2d");
}

function movePlayer(event) {
  var keyPressed = event.keyCode;
  console.log(keyPressed);

  switch (keyPressed) {
    case KEY_UP:
      y--;
      break;
    case KEY_DOWN:
      y++;
      break;
    case KEY_LEFT:
      x--;
      break;
    case KEY_RIGHT:
      x++;
      break;
  }

  drawPlayer();

}

function drawPlayer(){
    ctx.clearRect(0 , 0, 200, 200);
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, 10, 10);
}