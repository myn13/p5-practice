var angle = 0.0;
var angleDirection = 1;
var speed = 0.005;

var x = 60;
var y = 440;
var radius = 45;
var bodyHeight = 180;
var neckHeight = 40;

var easing = 0.04;

function setup() {
  // createCanvas(120, 120);
  // background(204);
  createCanvas(360,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  //translate
  // translate(mouseX, mouseY);
  // rect(0,0,30,30);
  // translate(35, 10);
  // rect(0,0,15,15);

  // //rotate
  // rotate(mouseX/100.0);
  // // rect(40,30,160,20);
  // rect(-80,-10,160,20);

  //translation then rotation
  // translate(mouseX, mouseY);
  // rotate(angle);
  // rect(-15, -15, 30,30);
  // angle += 0.1;

  //rotation then translation
  // rotate(angle);
  // translate(mouseX, mouseY);
  // rect(-15,-15,30,30);
  // angle += 0.1;

  //an articulating arm
  // background(204);
  // translate(20, 25); //move to start position
  // rotate(angle);
  // strokeWeight(12);
  // line(0,0,40,0);
  // translate(40,0); //move to next position
  // rotate(angle * 2.0);
  // strokeWeight(6);
  // line(0,0,30,0);
  // translate(30, 0);
  // rotate(angle * 2.5);
  // strokeWeight(3);
  // line(0,0,20,0);

  // angle += speed * angleDirection;
  // if ((angle > QUARTER_PI) || (angle < 0)) {
  //   angleDirection *= -1; //angkeDirectiion is always 1 or -1 to make the value of angle corresponding increase or decrease
  // }

  // //scaling
  // translate(mouseX, mouseY);
  // scale(mouseX /60.0);
  // rect(-15,-15,30,30);

  // //keep Strokes Consistent
  // translate(mouseX, mouseY);
  // var scalar = mouseX/60.0;
  // scale(scalar);
  // strokeWeight(1.0/scalar);
  // rect(-15,-15,30,30);

  //Isolating transformation
  // push();
  // translate(mouseX, mouseY);
  // rect(0,0,30,30);
  // pop();

  // translate(35, 10);
  // rect(0,0,15,15);

  //robot with translation, rotation and scaling
  var neckY = -1*(bodyHeight + neckHeight + radius);
  background(204);
  translate(mouseX, y); //move the robot

  if (mouseIsPressed) {
    scale(1.0);
  } else {
    scale(0.6);
  }

  //body
  noStroke();
  fill(102);
  ellipse(0,-33,33,33);
  fill(0);
  rect(-45,-bodyHeight, 90, bodyHeight - 33);

  //neck
  stroke(102);
  line(12, -bodyHeight, 12, neckY);

  //hair
  push();
  translate(12, neckY);
  var angle = -PI/30.0;
  for (var i = 0; i <= 30; i++){
    line(80, 0, 0, 0);
    rotate(angle);
  }
  pop()

  //head
  noStroke();
  fill(0);
  ellipse(12, neckY, radius, radius);
  fill(255);
  ellipse(24, neckY-6, 14, 14);
  fill(0);
  ellipse(24, neckY-6, 3,3);
}
