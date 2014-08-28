/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function displayMap() {
  var coord = {
    lat: -34.397,
    lng: 150.644
  };
	var mapOptions; 
  var gmap;
  mapOptions = {
    center: coord,
    zoom: 8
  };  
  gmap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);  
}

function googleMapsPlay() {
  window.onload = displayMap;
}


