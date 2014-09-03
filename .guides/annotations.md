@annotation:tour intro
#FUNCTIONS, CALLBACKS, OBJECTS & GOOGLE MAPS
In this module we are going to build a small Google Maps application as a way of introducing you to *functions*, *callbacks* and *objects*.

We are going to throw several new and important things at you in this module, so don't skip anything as we will be building on this in later modules.


@annotation:tour targetapp
#Target Application
We are finally going to do something more interesting. 

Watch the video below and you will see the application that we will be building in this module.

![400x300](http://www.youtube.com/watch?v=xxxxxxx&feature=youtu.be)

- it will show a map 
- it should be located at your current location (you will need to give permission when the browser prompts you)
- it places a marker on the map at your location
- if you click on the marker, it will show a pop-up message

@annotation:tour functions
#Functions
Sorry to do this to you, but we need to introduce you to 2 final and important programming constructs before we get on the Google Maps application.

Functions are very powerful and actually rather easy to understand.

>Select 'Functions' from the ![](.guides/an-img/rocket.png) Rocket menu at the top to load some code or restore it if you mess it up.

Now take a look at the code and preview it. We'll disect the code to see what functions are all about.

@annotation:tour funcintro
#What is a function
A function is simply a piece of code that you wrap up in a way that can be called by your code in other locations.

There are a couple of reasons why you should use functions rather than simply having it 'inline'.

- if your code inside one function gets long and unreadable, it is good practice to remove logical chunks of code into a separate function and then call that function instead
- if your **ever** have a chunk of code that gets used in more than one place then you should never duplicate your code as you will have to update that code in every place it is used.

##Without a function
Here is a piece of code that calculates the volume of a sphere. The formula for calculating this is

![](.guides/an-img/sphere.png)

```
var radius1=7, radius2=100;
radius1 = (4*Math.PI*radius1*radius1*radius1)/3);
radius2 = (4*Math.PI*radius2*radius1*radius2)/3);
```

Here we can see how the exact same piece of code is duplicated on each line. If we made a mistake coding the formula, we would have to correct the mistake in both places. If we had it in 100 places, you can imagine the nightmare.

Also, if someone else were to read this code (or you yourself were to read it a few months later), you might not have a clue what it is doing. This is a simple example, but things can get way more complex and unreadable than this.Also

So, this is the way we handle it.

```
function volumeSphere(radius) {
  return (4*Math.PI*radius*radius*radius)/3;
}

myFunc() {
  var radius1=7, radius2=100;
  radius1 = volumeSphere(radius1);
  radius2 = volumeSphere(radius2);
}
```

Now you can see how much better this *looks*. Furthermore, if I make a mistake with my formula, I simply correct the `volumeSphere` function once without having to worry about the many places it might get called from.

@annotation:tour parms
#Function Parameters
Let's look at the `volumeSphere` function again

```
function volumeSphere(radius) {
  return (4*Math.PI*radius*radius*radius)/3;
}
```

When we call the function, we need to tell the function what the `radius` of the sphere is. To accomplish this, we create a parameter inside the function definition.

```
volumeSphere(radius)
```

We give the parameter a sensible name and this then behaves like a variable just while the function executes.

Some functions require multiple parameters, so you define them like this

```
function myFunction(latitude, longitude, zoom)
```

We will delve deeper into functions in a later module, but this is the most important thing you need to know for know about function parameters.


@annotation:tour return
#Return values
Here's our `volumeSphere` function again

```
function volumeSphere(radius) {
  return (4*Math.PI*radius*radius*radius)/3;
}
```

We want our function to return the volume, so how do we do this? The answer is we *return* a value from our function.

We could have written it longhand like this

```
function volumeSphere(radius) {
	var volume;
  volume = (4*Math.PI*radius*radius*radius)/3;
  return volume;
}
```

@annotation:tour samplefuncs
#Example code
Now take a look at the example code by opening `example.js`. Here you can see how we have created a few functions, including a new, improved `display` function that takes 3 parameters.

See if you can figure out what is going on.

##Challenge
Look at the `volumeSphere` function and see how we have `radius*radius*radius'. Why not create a new function `cubed()` and make our `volumeSphere` like simpler.


@annotation:tour objects
#Objects
Now for the final thing before we tackle our Google Maps application.

>Select 'Objects' from the ![](.guides/an-img/rocket.png) Rocket menu at the top to load some code or restore it if you mess it up.

An *object* is a javascript variable that consists of other variables. For example, let's say we have 3 variables `latitude`, `longitude` and `zoomLevel`.

In our case, all 3 are tightly related and belong together as a kind of unit.

If we were to use regular variables, we would do this


```
var latitude = -34.397;
var longitude = 150.644;
var zoomLevel = 8;
```

Instead, we can define an object that looks like this

```
var coord = {
  lat : latitude,
  lng : longitude,
  zoom : 8
};
```

We now have an object called `coord`. `lat` and 'lng` are called *keys*. I can access object keys like this

```
coord.lat = -34.397;
coord.lng = 150.644;
```

However, I can also embed objects within objects, and this can be very useful. For example, I could further refine our `coord` object like this 

```
var combo = {
  coord : {
    lat : latitude,
    lng : longitude,    
  },
  zoom : 8
};
```

I now have a top level object called `combo` and created a *nested* obect called `coord` inside it that just takes care of the real coordinate pair, leaving zoom a part of the top level.

I would reference elements like this

```
combo.coord.lat = -34.397;
combo.zoom = 8;
```

@annotation:tour whyobjects
#Why use an Object
Objects are used in most modern programming languages and for very good reasons

- it promotes *modularity* which makes encapsulates a real-world view of things
- it promotes greater flexibility and maintainability in programming
- it makes your code easier to understand, especially when coming back to it months later or, very importantly, when other people look at your code for the first time.


One major practical benefit that we can see in our example code is that objects can be passed from one function to another, making function calls and declarations very simple to read and to code when compared to a long list of function paramters ...

```
showMap(combo);
```

Rather than this more long winded method.

```
showMap(longitude, latitude, zoom);
```

The usefulness of this becomes evident once you have objects that have tens of elements. Imagine those horribly long parameter lists and function definitions!

##Advanced use of objects
There are some much more powerful things that you can do with objects and we there is a module dedicated to object oriented programming coming up.


@annotation:tour objectsexamples
#Example code
Our Objects sample code shows us using objects. There are some important things to note.

##Object Creation - Method 1
The function `coordinates1` creates an object in a different way to the one we showed earlier. 

- it first creates an empty object with `var coord = {};`
- it then creates new elements one the following 2 lines; Javascript automatically adds these to the newly created object, so they are *dynamically* created

##Object Creation - Method 2
The function `coordinates2` creates an object in the way we described in the previous chapter

##Passing an object as a parameter to a function
Take a look at the function `coordDisplay(obj)`. You can see that it expects to be passed an object rather than 3 individual variables. You should be able to figure it out.

Note that the name we give the object can be anything we choose (`obj` in our case) but it will have the same key names within it as per our object definition in the functin that calls `coordDisplay()`.

@annotation:tour setupmaps
#Finally, our Map application!
Before we run it, we will need to make sure you have a Google Account and enabled Map API access.


##Load the sample code
>Select 'Basic Map' from the ![](.guides/an-img/rocket.png) Rocket menu at the top.

##Create a Google account
You may already have one (a gmail account will do), in which case you can skip the first step.

1. If you have not got one, then create one now. You can do this [here](https://accounts.google.com/signup?service=mail)
2. Access the Google *Admin Console* [here](https://code.google.com/apis/console/?noredirect)
3. Login into your account
4. Click the 'Services' menu item on the left hand side
5. Scroll a long way down until you find the 'Google Maps JavaScript API v3' entry, and switch it on with the slider
6. Now click the API Access menu item on the left-hand menu
7. You will now see the following screen. Press the 'Create new Browser key' button.
![](.guides/an-img/api-key-1.png)
8. On the screen that pops up, simply press 'Create' without entering anything.
9. You will now see the following screen. You need to copy the API key (highlighted below) to the clipboard so you can paste it into your code.
![](.guides/an-img/api-key-2.png)
10. Finally, open up your `index.html` file and look for the line shown below in the <head> section. You will see an existing (but invalid) key looking like `key=AIzaSyCSiWK2F2oq5yIZ69AwD4BRQY7nPs5gl9Y`. You may need to scroll the line to the right to see the whole line. You should replace the long key value after the `=` with the one you copied to the clipboard in the previous step.
```
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSiWK2F2oq5yIZ69AwD4BRQY7nPs5gl9Y"></script>
```

All done. If you need the key again, you can find it again within [https://code.google.com/apis/console/?noredirect](https://code.google.com/apis/console/?noredirect) and then press the 'API Access' menu item.

##Testing it out
Let's make sure everything is working properly by Previewing the project. You should see a map. If you get a message pop up saying "Google has disabled use of the Maps API for this application ...." then you have made a mistake in the above process, so carefully copy and paste the key again and make sure it looks exactly like this (but with your key).



@annotation:tour flow
#The program flow
Run the Preview and you will see we get a map centered on Sydney, Australia.

###index.html
Let's go back to our `index.html` file and see what is happening. 

At the top, in the <head> section you can see that we are telling the browser to load our `example.js` javascript file (you may need to scroll to the right).

```
<script type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?
  key=AIzaSyCSiWK2F2oq5yIZ69AwD4BRQY7nPs5gl9Y"></script>
```

As this is in the <head> section, it gets loaded before the <body> section does, so it is ready and waiting.

##Calling a script
Near the bottom, you will see that we invoke our Javascript function `googleMapsPlay();`. 

```
<script type="text/javascript">
	googleMapsPlay();
</script>
```

This calls and executes the `googleMapsPlay()` function in `example.js`.

##window.onload
Now, let's look at the `googleMapsPlay()` function in `example.js`.

You can see there is only a single line in the function 

```
function googleMapsPlay() {
  window.onload = displayMap;
}
```

`window.onload` is a so-called *Event*. We will be covering events in our next module, which is another fun one.

An *event* is triggered when something very specific happens within your web page. There are masses of potential events, including ...

- someone clicking or double clicking on any HTML element
- pressing a key or releasing a key
- resizing the browser
- dragging a page element

In our example, the event we are interested in is *when the browser page has fully loaded*. Once this event *fires*, we want to display our map.

We do this, as you can see, by setting the `onload` event property value to the `displayMap()` function.

The browser will now ensure that displayMap() gets called at the right time.

@annotation:tour displaymap
#The displayMap() function
After our lesson on objects, it should be fairly easy to understand what is going on here. 

```
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
```

##Setup
- we create an object `coord` and hard code the latitude and longitude values to be -34.397 and 150.644
- we now set up the `mapOptions` object variable and set the `center` location to the the `coord` object we just created and the `zoom` value to be 8. Feel free to change the `zoom` value and see what happens.

##Creating the map
This line is the really cool bit and does all the heavy lifting (you may need to scroll to the right to see it all)

```
gmap = new google.maps.Map(
  document.getElementById("map-canvas"), 
  mapOptions);
```

In the same way we *included* our `example.js` file in the <head> section of `index.html`, we also incuded the Google Maps API. This API is managed by another `.js` file, but this time it does not live within our project, but on the web. If you look at the include line, you can see the actual url (web address) of the file.

```
<script type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?
  key=AIzaSyCSiWK2F2oq5yIZ69AwD4BRQY7nPs5gl9Y"></script>
```

The `src=` attribute tells us where it is getting it from.

You do not need to know anything about this. It just needs to be included.

##Creating the Google Maps object
So, now we know how to link in the Google Maps API, let's look at our killer statement again

```
gmap = new google.maps.Map(
   document.getElementById("map-canvas"), 
   mapOptions);
```

With `new google.maps.Map`, we are creating a new Map object, which is defined and managed by the Google Maps API.

But we need to tell the Maps API 

1. Where in our web page we want the map displaying
1. What the properties of the map should be (geographical location and zoom level in our simple example)

We tell it *where* to display it on our page with  `document.getElementById("map-canvas")`, which says "get me the HTML element with the id of `map-canvas`". We defined it with `<div id="map-canvas"/>` in `index.html`.

We tell it *how* to display using our nicely created `mapOptions` object

##What is going on precisely?
Don't worry too much about this as we will be convering this in our next module.

```
gmap = new google.maps.Map(
   document.getElementById("map-canvas"), 
   mapOptions);
```

For those interested, we are creating a new Map object variable `gmap`. What's special about this is that the creation of the object

- takes parameters (the HTML id and the mapOptions object)
- actually displays the map (we don't worry about this, the Google API does)
- give us back a regular Javascript object that we can store, use and refer to later.

@annotation:tour location
#Getting your current location
So Sydney, Australia may not be of much interest to you, but your current location in the world probably is.

So what we'll do now is to get the map to be positioned at your current location. The browser actually can give you your latitude and longitude coordinates fairly accurately, although not as accurately as GPS.

>Select 'Geolocation' from the ![](.guides/an-img/rocket.png) Rocket menu at the top.

Preview to see what should be your current location.

In order to explain the code, we need to introduce a new and important concept - *callbacks*.

@annotation:tour callbacks
#Callbacks
With the web and browsers, there are lots of occasions where you need to call a function that return a value to you *but* that function may take some time to return.

In our example, we want to get the browser to tell us our current global coordinates. The problem is that it can take millseconds or several seconds. 

And we don't want our code to call a function and block everything else while waiting for the called function to return. 

This is where we use a *callback function*.

##Blocking / Synchronous Functions
Take this simple code snippet

```
function squared(value) {
	return value*value;
}

function main() {
	var x = squared(7);
  display(x);
}
```

`squared()` is an example of a *blocking* or *synchronous* function. When `x = squared(7)` is called in the `main()` function, the `display()` function will not get called until `squared()` has finished and returned a value.

This is absolutely fine and in fact desirable.

@annotation:tour async
#Non-blocking / Asynchronous functions
Now consider this *pseudo-code*

```
function main() {
	displayMap();
  getFlightArrivals();
  getTemperature();
}
```

Let's assume that we are using *web services* (like the Google Maps API) to get the flight arrival and temperature. Each of these services might take 2 seconds to process. If we took a blocking approach, then we would wait until the map was displayed before getting the flight arrivals before getting the temperature.

In other words, we would wait 6 seconds in total.

However, if these are non-blocking, asynchronous functions, then we call `displayMap()`, which returns instantly. We then call `getFlightArrivals()` which returns instantly and finally `getTemperature()`.

But what about the data we expect back from them? This is what callback functions do. 

> A callback function is called upon completion of execution by an asynchronous function

So, our pseudo-code looks like this

```
function mapCompleted() {
	// makeSound
}
function arrivalsCompleted(arrivalsObject) {
	// display arrival times
}
function gotTemperature(temperatureObject) {
	// Show temperature on page
}

function main() {
	displayMap(mapCompleted);
  getFlightArrivals(arrivalsCompleted);
  getTemperature(gotTemperature);
}
```

In each case, we are passing a function name (which is a variable like most things in Javascript) as a parameter. 

The called function (`getFlightArrivals()` for example) will now do it's stuff and once finished, rather than returning a value in the way normal functions do, it will call `arrivalsCompleted()`, passing in any arrivals data as an object.

@annotation:tour locationexplained
#Geolocation code explained
Now we've covered callbacks, we're ready to look at our code again. Make sure you've selected 'Geolocation' from the ![](.guides/an-img/rocket.png) Rocket menu at the top.

Let's look at the code at the bottom of `example.js`

```
function getCurrentLocation(){
	navigator.geolocation.getCurrentPosition(
    gotPosCallback, errorFunction);	
}

function googleMapsPlay() {
  window.onload = getCurrentLocation;
}
```

This time our `googleMapsPlay()` function, called when the browser page is loaded, calls our function `getCurrentLocation()`.

To get our current coordinates, we make use of the `navigator` object, which is a standard browser object. 

Within `navigator` there is further object `geolocation` and that in turn gives us a function called `getCurrentPosition()`. You can read all about the [Navigator object](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) and the [Geolocation object](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) if you like.

##The Callbacks
Let's look at our `getCurrentLocation()` function. 

```
function getCurrentLocation(){
  navigator.geolocation.getCurrentPosition(
      gotPosCallback, errorFunction);    
}
```

We can see that `navigator.geolocation.getCurrentPosition()` expects to receive 2 parameters

1. A callback function that it should trigger once the position has been determined
2. A callback function that it should trigger if there was any error in getting the position

If you look higher up in the code, you will see that these 2 functions `gotPosCallback()` and `errorFunction()` are both defined.

##Displaying the map in the callback function
If you look at `gotPosCallback()`, our callback function, you will see that it is doing exactly what `displayMap()` did in our first, basic example. In fact, we could just have well have called the function `displayMap()` but we chose another function name to highligt its callback nature.

@annotation:tour markers
#Adding a Marker to the Map
The last thing we'll do with our application is to add a marker onto the page to pinpoint your current location.

>Select 'Add a Marker' from the ![](.guides/an-img/rocket.png) Rocket menu at the top.

If you preview it, we can see not only is there a marker on it, but if you click on the marker, you get a custom popup.

This is accomplished by adding some code to our main `gotPosCallback()` function.

```
infowindow = new google.maps.InfoWindow({
	content: "<div id='mycontent'>This is where I am
	<b>currently</b> sitting.</div>"
});

marker = new google.maps.Marker({
	position: coord,
  map: gmap,
  title: 'Here I Am!'
});

google.maps.event.addListener(
	marker, 'click', function() {
	infowindow.open(gmap,marker);
});
```

##Inline Objects
This code shows a shorthand way of writing code that is used a lot but makes the code a little harder to read. Rather than defininf a separate object variable, we code it *inline*.

Let's take this piece of code 

```
infowindow = new google.maps.InfoWindow({
	content: "<div id='mycontent'>This is where I am
	<b>currently</b> sitting.</div>"
});
```

This allows us to create a Google Maps InfoWindow object. We could have written the code like this

```
var objInfoWindow = {
	content: "<div id='mycontent'>This is where I am
	  <b>currently</b> sitting.</div>"
};
infowindow = new google.maps.InfoWindow(objInfoWindow);
```

Both are equally good ways of writing the same thing. The first one is more compact and takes up less space. The second one is easier to read.

You may ask why the object only has one property (`content`) so why not use a simple string variable? The answer is that you can pass over lots of other information such as maxWidth, maxHeight and more. In our simple use case, we only pass the `content` data.

Next, we create a marker object, also using an inline object. Notice how we use the `coord` object we created earlier in the `gotPosCallback()` function. You can also see how we associate the marker with the `gmap` object that is the actual map we displayed.

```
marker = new google.maps.Marker({
	position: coord,
  map: gmap,
  title: 'Here I Am!'
});
```

##Inline Functions
Finally, we pull it all together with this 

```
google.maps.event.addListener(
	marker, 'click', function() {
	infowindow.open(gmap,marker);
});
```

This is another example of an *event*, which we'll cover properly in the next module.

What we are doing here is to add a so-called *listener*. We want the application to *listen out for* a click on the marker, so when it is clicked, we can display the popup box.

The 3 parameters for the `addListener()` event are

1. The object that should be listened to
2. The event type (mouse click)
3. The callback function to execute when the click happens

This shows an example of an inline function. We could have written the above code nice and clearly like this

```
function infoClicked() {
	infowindow.open(gmap,marker);
}
google.maps.event.addListener(
	marker, 'click', infoClicked);
```

Anyway, what the code does is to display the popup window. It is handled by the Google API, not by any code we have written. 

`infowindow` is an object managed by the Google API and one of its properties is an `open()` function. Remember that we defined the properties of `infowindow` earlier, so it knows what to do.


@annotation:tour documentation
#API documentation
*How am I supposed to find out what parameters a 3rd party API expects?*,  you may ask.

The short answer is "Google it". Any API worth its salt comes with documentation.

Google "google maps api" and you will find your way into the documentation.

However, you can be more specific and search for something like "google maps api example". This will deliver you to [this page](https://developers.google.com/maps/documentation/javascript/examples/) where you can see lots of great examples.

A good way to get started is to look at code examples which, if well documented, give you a very clear idea. 

You might then want to find the API reference (try googling "google maps api reference") and you should [end up here](https://developers.google.com/maps/documentation/javascript/reference).

You will then end up looking at specific API object methods [like this one](https://developers.google.com/maps/documentation/javascript/reference#Map), properties and events. This can get be a little intimidating at first as it is usually very geeky. Over time you will learn how to read this comfortably.


@annotation:tour summary
#Summary
So that's it. This module was a very major step in terms in applying your coding knowlegde to something practical. 

It is very important that you fully understand these concepts as we build on these in he next modules.

Feel free to hack the code around as much as you like as you can always restore it from the Rocket menu.



















