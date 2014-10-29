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

function square(value) {
  return value*value;
}

function areaOfCircle(radius) {
  var area = Math.PI * square(radius);
  return area;
}


function volumeSphere(radius) {
  return (4*Math.PI*radius*radius*radius)/3;
}

function play() {
  var x = 7;
	var radius1=7;
  var radius2=100;
  
	display("FUNCTIONS", 0, 2);
  
  display(x + " squared = " + square(x), 0, 1);
  display("A circle with radius " + x + " has an area of " + areaOfCircle(x));
  

  display("A sphere with radius " + radius1 + " has an volume of " + ((4*Math.PI*radius1*radius1*radius1)/3),2,0);
  display("A sphere with radius " + radius2 + " has an volume of " + ((4*Math.PI*radius2*radius2*radius2)/3),1,0);  
  
  display("A sphere with radius " + radius1 + " has an volume of " + volumeSphere(radius1),2,0);
  display("A sphere with radius " + radius2 + " has an volume of " + volumeSphere(radius2),1,0);

  
}
