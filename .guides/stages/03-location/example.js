/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function gotPosCallback(position) {
  var coord = {};
  var gmap;
  var mapOptions = {
    center: coord,
    zoom: 12
  };
  var infoWindow;
  var marker;
  
  coord.lat = position.coords.latitude;
  coord.lng = position.coords.longitude;  
  gmap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
}

function errorFunction () {
  document.write("Unable to get the coordinates from the browser");
}

function getCurrentLocation(){
	navigator.geolocation.getCurrentPosition(gotPosCallback, errorFunction);	
}

function googleMapsPlay() {
  window.onload = getCurrentLocation;
}

