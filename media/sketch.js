var img1;
var img2;

// function preload() {
//     img1 = loadImage("p5/media/lunar.jpg.jpg");
//     img2 = loadImage("p5/media/moon.jpg.jpg");
// }

function setup() {
    createCanvas(480, 120);
    // textFont("Arial");
    textFont("Source Code Pro");
    //set text stroke and fill
    fill(120); //fill text color
    stroke(255);
    strokeWeight(10);
}

function draw() {
    background(204);
    // ellipse(10,10,5,5);
    // image(img1, 0, 0);
    // image(img1, 130, 0, 240, 120);
    // image(img2, 300, 0, 240, 120);

    textSize(32);
    text("one small step for man ...", 25, 60); 
    textSize(16);
    text("one small step for man ...", 27, 90,240,100); //draw text in a box with start and end coordinate
}
