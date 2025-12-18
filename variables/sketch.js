// var y = 60;
// var d = 80;

// var x = 25;
// var h = 20;
// var y = 25;

var y = 460;
var x = 60;
var bodyHeight = 260;
var neckHeight = 95;
var radius = 45;
var ny = y - bodyHeight - neckHeight - radius;

function setup() {
 createCanvas(170, 480);
//  strokeWeight(2);
//  noStroke();
fill(255);
stroke(102);

}

function draw() {
  background(123);

  // //draw three circles in a row
  // ellipse(75, y, d, d);
  // ellipse(175, y,d,d);
  // ellipse(275, y, d,d);

  // //adjust the canvas
  // line(0,0,width, height);
  // line(width, 0, 0, height);
  // ellipse(width/2, height/2, 60,60);

  // //basic arithmetic
  // x = 20;
  // rect(x,y,300,h);
  // x = x+100;
  // rect(x,y+h, 300, h);
  // x = x -250;
  // rect(x, y + h*2, 300, h);

  //repetation
  // for (var i = 20; i < 400; i+=20){
  //   line(i, 40, i+i/2, 80);
  // }

  // //kicking the lines
  // for (var i = 20; i < 400; i += 20){
  //   line(i, 0, i + i/2, 80);
  //   line(i + i/2, 80, i*1.2, 120);
  // }

  // // embed one for loop in another
  // for (var y = 0; y <= height ; y += 40){
  //   for (var x = 0; x <= width ; x += 40){
  //     fill(255, 140);
  //     ellipse(x,y,40,40);
  //   }
  // }

  // //pins and Lines
  // for (var y = 20; y <= height - 20; y+= 10){
  //   for (var x = 20; x <= width-20; x += 10){
  //     ellipse(x,y,4,4);
  //     line(x,y,240,60);
  //   }
  // }

  // //Halftone dots
  // for (var y = 32; y < height ; y += 8){
  //   for (var x = 12; x <= width; x += 15){
  //   ellipse(x+y, y, 16-y/10.0, 16-y/10.0);
  //   }
  // }

  //robots with loop
  //antennae
  stroke(102);
  line(x+12, ny, x - 18, ny - 43);
  line(x+12, ny, x + 42, ny - 99);
  line(x+12, ny, x + 78, ny + 15);

  //neck
  stroke(102);
  for (var i = 2; i <= 22; i += 10){
    line(x+i, y -bodyHeight, x+i, ny);
  }

  //head
  fill(0);
  // stroke();
  ellipse(x+12, ny, radius, radius);
  //eyes
  fill(152);
  ellipse(x,ny - 2, 5,5);
  ellipse(x + 15, ny - 15 , 5,5);
  ellipse(x + 25, ny + 7, 5,5);
  fill(255);
  ellipse(x + 15, ny - 2, radius/3,radius/3);
  fill(0);
  ellipse(x + 15, ny - 2, 5,5)

  //body
  noStroke();
  fill(102);
  ellipse (x, y -33, 33,33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
  fill(102);
  rect(x-45,y-bodyHeight+17,90,6);

}
