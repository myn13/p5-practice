// var x = [];
// var gray = [];
var num = 60;
var x = [];
var y = [];

function setup() {
  createCanvas(240, 120);
  noStroke();
  // fill(255, 200);
  // for (var i = 0; i < 3000; i++) {
  //   x[i] = random(-1000, 200);
  // }
  // for (var i = 0; i < width; i++) {
  //   gray[i] = random( 0, 255);
  // }
  for (var i = 0; i < num; i ++) {
    x[i] = 0;
    y[i] = 0;
  }

}

function draw() {
  background(0);
  // for (var i = 0; i < x.length; i++) {
  //   x[i] += 0.5;
  //   var y = i * 0.4;
  //   arc(x[i], y, 12, 12, 0.52, 5.76);
  // }
  // for (var i = 0; i < gray.length; i++) {
  //   stroke(gray[i]);
  //   line(i, 0, i, height);
  // }
  
  for (var i = num - 1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }

  x[0] = mouseX;
  y[0] = mouseY;

  for (var i = 0; i < num; i++) {
    fill(i * 4);
    ellipse( x[i], y[i], 40, 40);
  }
}
