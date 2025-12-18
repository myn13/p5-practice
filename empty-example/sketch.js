function setup() {
  createCanvas(720, 480); //width, height
//  angleMode(DEGREES);
  strokeWeight(2);
}

function draw() {
  // draw an circle with r = 40
  // background(204);
  // ellipse(50, 50, 80, 80); // 50,50 on x-y coordinates width and height of 80 pixels.   

  //draw many circles
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);

  // draw a point
  // background(204);
  // point(240, 60);

  //draw shapes
  // background(204);
  // line(20,40,80,90);
  // arc(50,30,60,10,PI/4 ,PI);
  
  // quad(158, 55, 199, 14, 392, 66, 351, 107);
  // triangle(347,54,392,9,392,66);
  // triangle(158,55,290,91,290,112);

  // arc(90,60,80,80,0,90);
  // arc(190,60,80,80,0,270);

  // ellipse(140, 0, 190, 190);
  // rect(160, 30, 260, 20); //on top of the other shape

  // ellipse(50,80,60,120);
  // strokeWeight(10);
  // strokeWeight(6); //ellipse has a stroke 6 pixels, not show 10 pixels

  // rect(120, 90, 40, 20);
  // strokeJoin(BEVEL);

  // rectMode(CORNERS);
  // fill(255);
  // rect(25,25,50,50);

  /*paint with grays*/
  // background(0); 
  // fill(204);
  // ellipse(132, 82, 200, 200);
  // fill(0,0,255, 100);
  // ellipse(228, -16, 200, 200);
  // noStroke();
  // fill(0,255,0,200);
  // stroke(0);
  // ellipse(268, 118, 200,200);
  
  //draw an arrow
  // background(204);
  // beginShape();
  // vertex(180,82);
  // vertex(207,36);
  // vertex(214,63);
  // vertex(407,11);
  // vertex(412,30);
  // vertex(219,82);
  // vertex(226,109);
  // endShape(CLOSE);

  // create creatures
  // background(204);

  // //left creature
  // fill(255);
  // beginShape();
  // vertex(50,120);
  // vertex(100,90);
  // vertex(110,60);
  // vertex(80,20);
  // vertex(210,60);
  // vertex(160,80);
  // vertex(200,90);
  // vertex(140,100);
  // vertex(130,120);
  // endShape();

  // fill(0); //black eye
  // ellipse(155,60,8,8);

  // //right creature
  // fill(0,0,255);
  // beginShape();
  // vertex(370,120);
  // vertex(360,90); 
  // vertex(290,80);
  // vertex(340,70);
  // vertex(280,50); 
  // vertex(420,10);
  // vertex(390,50);
  // vertex(410,90); 
  // vertex(460,120);
  // endShape();

  // fill(0);
  // ellipse(345,50,10,10);

  //draw a robot
  background(204);

  //neck
  stroke(102); //set stroke to gray
  line(266, 257, 266, 162);
  line(276, 257, 276, 162);
  line(286, 257, 286, 162);

  //Antennae
  line(276, 155, 246, 112);
  line(276, 155, 306, 56);
  line(276, 155, 342, 170);

  //body
  noStroke();
  fill(102);
  ellipse(264,377,33,33);
  fill(0);
  rect(219, 257, 90, 120);
  fill(102);
  rect(219, 274, 90,6);

  //head
  fill(0);
  ellipse(276,155,45,45);
  fill(255);
  ellipse(280,150,14,14);
  fill(0);
  ellipse(280,150,3,3);
  fill(153);
  ellipse(270,148,5,5);
  ellipse(280,140,4,4);
  ellipse(290,150,3,3);
}
