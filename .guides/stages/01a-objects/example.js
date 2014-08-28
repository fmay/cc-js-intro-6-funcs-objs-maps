/**
* Created with cc-jsintro-6-func-obj-maps.
* User: fmay
* Date: 2014-08-28
* Time: 05:04 PM
* To change this template use Tools | Templates.
*/

function display(message, pre, post) {
  var i;
	for(i=0; i<pre; i++)
	document.write("<br/>");
  document.write(message);
	for(i=0; i<post; i++)
    document.write("<br/>");
}

function coordDisplay(obj) {
  if(obj.coord===undefined)
		document.write("Lat:" + obj.lat + " Lng:" + obj.lng);
  else
    document.write("Lat:" + obj.coord.lat + " Lng:" + obj.coord.lng);
}

function coordinates1(latitude, longitude, zoom) {
  var coord = {};
  coord.lat = latitude;
  coord.lng = longitude;
  coord.zoom = 8;
  display("Function 1 : ", 1, 0);  
  coordDisplay(coord);
}

function coordinates2(latitude, longitude, zoom) {
  var coord = {
    lat : latitude,
    lng : longitude,
    zoom : 8
  };
  display("Function 2 : ", 1, 0);  
  coordDisplay(coord);
}

function coordinatesNested(latitude, longitude, zoom) {
  var combo = {
    coord : {
			lat : latitude,
			lng : longitude,    
		},
    zoom : 8
  };
  display("Function Nested : ", 1, 0);  
  coordDisplay(combo);
}

function play() {
  coordinates1(-34.397, 150.644, 8);
  coordinates2(-34.397, 150.644, 8);
  coordinatesNested(-34.397, 150.644, 8);
}

