window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
    var img = document.getElementById("profile");
    ctx.drawImage(img, 0, 0);
};

//Put global variables here
let isDrawing = false;

function onMouseDown(e){
  //grab the canvas element from HTML
  let canvas = document.getElementById("myCanvas");
  //create the drawing context from the canvas
  let ctx = canvas.getContext("2d");
  //get a color from an input element's value
  let color = document.querySelector('input[name="color"]:checked').value;
  //set the color of your drawing to your context
  ctx.strokeStyle =  color;
  //if you want to keep colors separate between stroke
  //   you'll need to reset the stroke path
  ctx.beginPath();
  //move the pen to where the mouse is (llok at updateCoords for help)
  ctx.moveTo(e.offsetX,e.offsetY);
  isDrawing = true;

  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

function onMouseMove(e){
  if(isDrawing){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
  }
  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

function onMouseUp(e){
  isDrawing = false;
  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

//Function to update coordinates to webpage
function updateCoords(e){
  //let's define the x and y coordinates from the event object
  let x = e.offsetX;
  let y = e.offsetY;
  //fetch the output paragraph
  let coords = document.getElementById("coords");
  //update the contents of the coords paragraph.
  coords.innerHTML = " x: "+x+" y: "+y;
}
