window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  //grab image element from html

  //draw image on canvas

};

//Put global variables here

function onMouseDown(e){
  //grab the canvas element from HTML

  //create the drawing context from the canvas

  //get a color from an input element's value

  //set the color of your drawing to your context

  //if you want to keep colors separate between stroke
  //   you'll need to reset the stroke path

  //move the pen to where the mouse is (llok at updateCoords for help)

  //keep track that we have started drawing

  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

function onMouseMove(e){
  //OnMouseMove happens everytime the mouse moves whether or
  //    not the mouse is clicked
  //We need to decide if we are drawing
// UNCOMMENT AND FILL IN  if( ?????? ){
    //grab canvas

    //grab context

    //move the context on a line

    //stroke out the line movement

  // UNCOMMENT  }
  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

function onMouseUp(e){
  //keep track that we have STOPPED drawing

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
