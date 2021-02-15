/***********************************************************************************
	SimpleStateMachine - applied
	by Ashley Lee

	Applied simple state machine template with 5 mood pngs. 
	
	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/Anxious.png');
  images[1] = loadImage('assets/Blank.png');
  images[2] = loadImage('assets/Excited.png');
  images[3] = loadImage('assets/Frustrated.png');
  images[4] = loadImage('assets/Worried.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawOpening;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(255);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

drawOpening = function() {
	textSize(30);
	fill(38,40,190);
	text("Welcome to my moood states", width/2, 60);
	text("Please press any number from 1-5 to start", width/2, 120);

//Drawing flower variables
	var petalSize = 70;
	var flowerX =width / 2;
	var flowerY = height / 2; 

//Stem
	fill(0, 100, 0);
	rect(flowerX-5, flowerY, 10, 200);

//Petals 
	fill(255, 192, 203);
	ellipse(flowerX - petalSize / 2, flowerY - petalSize / 2, petalSize);
	ellipse(flowerX + petalSize / 2, flowerY - petalSize / 2, petalSize);
  	ellipse(flowerX - petalSize / 2, flowerY + petalSize / 2, petalSize);
  	ellipse(flowerX + petalSize / 2, flowerY + petalSize / 2, petalSize);
//Center of flower
	fill (204, 57, 123);
	ellipse(flowerX, flowerY, petalSize);

}

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(65,105,225);
   text("#1: State Anxious", width/2, height - gTextOffset - 50);
   text("Press any number from 1-5",width/2 , height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(76,81,109);
   text("#2:State Blank", width/2, height - gTextOffset - 50);
   text("Press any number from 1-5",width/2 , height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(4255,173,47);
   text("#3:State Excited", width/2, height - gTextOffset - 50);
   text("Press any number from 1-5",width/2 , height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(255,0,0);
   text("#4:State Frustrated", width/2, height - gTextOffset - 50);
   text("Press any number from 1-5",width/2 , height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(51,171,249);
   text("#5:State Worried", width/2, height - gTextOffset -50);
   text("Press any number from 1-5",width/2 , height - gTextOffset);
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }
}