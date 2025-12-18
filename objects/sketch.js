var bug;
var jit;

function setup() {
  createCanvas(480, 120);
  background(204);
  jit = new JitterBug(width * 0.33, height/2, 50);
  bug = new JitterBug(width/2, height/2, 20);
}

function draw() {
  jit.move();
  jit.display();
  bug.move();
  bug.display();
}


