// var x = 0;
// var y = 0;
// var px = 0;
// var py = 0;
// var diameter = 380;
// var easing = 0.05;
// var x;
// var offset = 10;

// var x = 120;
// var y = 60;
// var radius = 12;

// var x = 80;
// var y = 30;
// var w = 80;
// var h = 60;

// var x = 215;
// var y = 45;
var x = 60;
var y = 440;
var radius = 45;
var bodyWeight = 160;
var neckHeight = 70;
var easing = 0.04;

function setup() {
  // createCanvas(480, 120);
  // fill(0, 102); //color black and transparency is 102
  // noStroke();

  // createCanvas(480,120);
  // strokeWeight(12);
  // stroke(0, 102);
  // x = width/2;
  // ellipseMode(RADIUS);

  // createCanvas(120, 120);
  // textSize(64);
  // textAlign(CENTER);
  // fill(255);

  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  // background(204);
  // ellipse(mouseX, mouseY, 9, 9);
  // var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  // strokeWeight(weight);
  // line(mouseX, mouseY, pmouseX, pmouseY);

  // //easing
  // var targetX = mouseX;
  // x += (targetX - x) * easing;
  // ellipse(x, 40,12,12);
  // print(targetX + " : " + x);

  // //smooth lines with easing
  // var targetX = mouseX;
  // x += (targetX - x) * easing;
  // var targetY = mouseY;
  // y += (targetY - y )*easing;
  // var weight = dist(x,y,px, py);
  // strokeWeight(weight);
  // line(x,y,px,py);
  // py = y;
  // px = x;

  // // click with mouse
  // background(204);
  // stroke(102);

  // if (mouseIsPressed == true) {
  //   stroke(255);
  // }
  // else{
  //   stroke(0);
  // }
  // line(40, 0, 70, height);
  // line(0, 70, width, 50);
  
  // //multiple mouse buttons
  // background(204);
  // stroke(102);
  // line(40, 0, 70, height);
  // if (mouseIsPressed) {
  //   if (mouseButton == LEFT) {
  //     stroke(255);
  //   }
  //   else {
  //     stroke(0); //mouseButton == RIGHT or CENTER
  //   }
  //   line(0, 70, width, 50);
  // }

  // background(204);
  // if (mouseX > x){
  //   x += 0.5; //higher x -> speed up the line movement
  //   offset = -10;
  // }
  // if (mouseX < x){
  //   x -= 0.5;
  //   offset = 10;
  // }
  // //draw arrow left or right depending on "offset" value
  // line(x, 0, x, height);
  // line(mouseX, mouseY, mouseX + offset, mouseY - 10); //top
  // line(mouseX, mouseY, mouseX + offset, mouseY + 10); //bottom
  // line(mouseX, mouseY, mouseX + offset*3, mouseY); //body

  //The bounds if a circle
  // background(204);
  // var d = dist(mouseX, mouseY, x,y);
  // if (d < radius) {
  //   radius++;
  //   fill(0);
  // } 
  // else{
  //   fill(255);
  // }
  // ellipse(x, y, radius, radius);

  // //the bounds of a rectangle
  // background(204);
  // if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)) {
  //   fill(0);
  // }
  // else {
  //   fill(255);
  // }
  // rect(x,y,w,h);

  //Tap a key
  // background(204);
  // line(20,20,420,100);
  // if (keyIsPressed) {
  //   line(420,20,20,100);
  // }

  //draw letters
  // background(0);
  // text(key, 60, 80);

  // //check for the specific keys
  // background(204);
  // if (keyIsPressed) {
  //   if ((key == "h") || (key == "H")) {
  //     line(30, 60, 90, 60);
  //   }
  //   if (( key == "n") || (key == 'N')) {
  //     line(30,20,90,100);
  //   }
  // }
  // line(30,20,30,100);
  // line(90,20,90,100);

  // //move with the arrow keys
  // if (keyIsPressed) {
  //   if (keyCode == LEFT_ARROW) {
  //     x--;
  //   } else if (keyCode == RIGHT_ARROW) {
  //     x++;
  //   } else if (keyCode == UP_ARROW) {
  //     y--;
  //   } else if (keyCode == DOWN_ARROW) {
  //     y++;
  //   }
  // }
  // rect(x, y, 50, 50);

  // //touch the screen
  // background(204);
  // line(20,20,220,100);
  // if (touchIsDown) {
  //   line(220,20,20,100);
  // }

  // //map values to a range
  // background(204);
  // stroke(102);
  // line(mouseX,0,mouseX, height);
  // stroke(0);
  // var mx = mouseX/2 + 60;
  // line(mx, 0, mx, height);

  // //map with the map() function
  // background(204);
  // stroke(255);
  // line(120,60,mouseX,mouseY);
  // stroke(0);
  // var mx = map(mouseX, 0, width, 60, 180);
  // line(120, 60, mx, mouseY);

  //ROBOT - RESPONSE
  var targetX = mouseX;
  x += (targetX - x) * easing;
  if (mouseIsPressed) {
    neckHeight = 16;
    bodyHeight = 90;
  } else {
    neckHeight = 70;
    bodyHeight = 160;
  }
  var neckY = y - bodyWeight - neckHeight - radius;

  background(204);
  //neck
  stroke(102);
  line(x+12, y - bodyHeight, x + 12, neckY);

  //Antennae
  line(x + 12, neckY, x - 18, neckY - 43);
  line(x + 12, neckY, x + 42, neckY - 99);
  line(x + 12, neckY, x + 78, neckY + 15);

  //body
  noStroke();
  fill(102);
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y - bodyHeight, 90, bodyHeight -33);

  //head
  fill(0);
  ellipse(x+12,neckY,radius, radius);
  fill(255);
  ellipse(x+24,neckY-6,14,14);
  fill(0);
  ellipse(x+24,neckY-6,3,3);
}
