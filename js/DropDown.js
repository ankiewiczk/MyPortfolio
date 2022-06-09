window.onload = myLoadFunction;

function myLoadFunction(ev){
  let myDrops = document.querySelectorAll("nav li");
  for(let dropdown of myDrops){
    dropdown.addEventListener('click',myClickHandler);
  }
} //end myLoadFunction

function myClickHandler(ev){
  /***************************************************
  / Marker code
  /***************************************************/
  //grab the marker
  let marker = document.querySelector("#marker");
  //update marker to move to that coordinate
  marker.style.left = ev.currentTarget.offsetLeft + "px";

  /****************************************************
  / DROP DOWN coordinate
  /****************************************************/
  //remove the "selected" class from previous dropdown
  let old = document.querySelector('.selected');
  if(old) {  //make sure OLD exists (first click it won't)
    old.classList.remove('selected');
  }
  //add "selected" class to currentTarget
  //used querySelector on currentTarget to optimize search
  let selectedDrop = ev.currentTarget.querySelector(".drop");
  selectedDrop.classList.add('selected');
}
