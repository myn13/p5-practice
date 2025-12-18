// var radius = 40;
// var x = -radius;
// var speed = 0.5;
// var radius = 40;
// var x = 110;
// var speed = 0.5;
// var direction = 1;

// var startX = 20;
// var stopX = 240;
// var startY = 30;
// var stopY = 120;
// var x = startX;
// var y = startY;
// var step = 0.005;
// var pct = 0.0; //percentage traveled form 0.0 to 1.0

// var speed = 2.5;
// var diameter = 20;
// var x;
// var y;

var time1 = 2000;
var time2 = 4000;
var x = 0;

function setup() {
    createCanvas(480, 240);
    x = width/2;
    y = height/2;
    background(204);
    // ellipseMode(RADIUS);
}

function draw() {
    // var fr = frameRate();
    // print(fr);
    // background(204); //this backgound is not used, the past locations are traced
    // x += speed;
    // x += speed * direction;
    // arc(x, 60, radius, radius, 0.52, 5.76);
    // if (x > width+radius) {
    //     x = -radius;
    // }
    // arc(x, 60, radius, radius, 0.52, 5.76);
    // if ((x > width - radius) || (x < radius)) {
    //     direction = -direction;
    // }
    // if (direction == 1) {
    //     arc(x, 60, radius, radius, 0.52, 5.76);
    // } else {
    //     arc(x, 60, radius, radius, 3.76, 8.9);
    // }
    // if (pct < 1.0) {
    //     x = startX + ((stopX - startX) * pct);
    //     y = startY + ((stopY - startX) * pct);
    //     pct += step;
    // }
    // ellipse(x, y, 10, 10);
    
    //draw randomly
    // for (var x = 20; x < width; x += 20) {
    //     var mx = mouseX / 10;
    //     var offsetA = random(-mx, mx);
    //     var offsetB = random(-mx, mx);

    //     line(x + offsetA, 20, x - offsetB, 100);
    // }
    // x += random(-speed, speed);
    // y += random(-speed, speed);
    // x = constrain(x, 0, width);
    // y = constrain(y, 0, height);
    // ellipse(x, y, diameter, diameter);

    // timer
    // var timer = millis();
    // print(timer);

    var currentTime = millis();
    background(204);
    if (currentTime > time2) {
        x -= 0.5;
    } else if (currentTime > time1) {
        x += 2;
    }
    ellipse(x, 60, 90, 90);
}


