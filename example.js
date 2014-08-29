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
    zoom: 8
  };
  var infoWindow;
  var marker;
  
  coord.lat = position.coords.latitude;
  coord.lng = position.coords.longitude;  
  gmap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  infowindow = new google.maps.InfoWindow({
      content: "<div id='mycontent'>This is where I am <b>currently</b> sitting.</div>"
  });

  marker = new google.maps.Marker({
      position: coord,
      map: gmap,
      title: 'Here I Am!'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(gmap,marker);
  });
  
}

function errorFunction () {
  document.write("Unable to get the coordinates from the browser");
}

function getCurrentLocation() {
	navigator.geolocation.getCurrentPosition(gotPosCallback, errorFunction);	
}

function googleMapsPlay() {
  window.onload = getCurrentLocation;
}

