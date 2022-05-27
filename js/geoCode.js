window.onload = begin;

function begin(){
  //setting global property
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,positionError);
  } else {
    document.querySelector("#demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.querySelector("#demo").innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function positionError(errorObj){
  alert(errorObj.code + ": " + errorObj.message);
}
