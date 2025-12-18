/*
functiosn allows a complex sequence of statements to be abstracted.
*/
function setup() {
  createCanvas(480,120);
}

// function rollDice(numSides) {
//   var d = 1 + int(random(numSides));
//   print("Rolling... " + d);
// }

function draw() {
  background(204);
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40){
    var gray = int(random(0, 102));
    var scalar = random(0.25, 1.0);
    owl(i, 110, gray, scalar);
  }
  
}

function owl(x, y, g, s) { //g gray value, s scale
  push();
  translate(x, y);
  scale(s);
  stroke(g);
  strokeWeight(70);
  line(0, -35, 0, -65);
  noStroke();
  fill(255 - g);
  ellipse(-17.5, -65, 35, 35);
  ellipse(17.5, -65, 35, 35);
  arc(0, -65, 70, 70, 0, PI);
  fill(g);
  ellipse(-14, -65, 8,8);
  ellipse(14,-65, 8, 8);
  quad(0, -58, 4, -51, 0, -44, -4, -51);
  pop();
}
