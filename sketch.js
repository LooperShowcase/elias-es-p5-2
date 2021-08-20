function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("gray");
  translate(width / 2, height / 2);
  rotate(-90);
  push();
  rotate(90);
  strokeWeight(1);
  textSize(20);
  stroke(255, 208, 0);
  text("12", 0, -160);
  text("3", 160, 0);
  text("6", 0, 165);
  text("9", -165, 0);
  pop();
  let hr = hour();
  let mn = minute();
  let sc = second();
  let color = [[255, 208, 0], "cyan"];
  let i = 150;
  noFill();
  strokeWeight(10);

  let secondAngle = map(sc, 0, 60, 0, 360);
  push();
  stroke(255, 208, 0);
  arc(0, 0, 300, 300, 0, secondAngle);
  pop();

  push();
  rotate(secondAngle);
  stroke(255, 208, 0);
  line(0, 0, 100, 0);
  pop();

  push();
  let minAngle = map(mn, 0, 60, 0, 360);
  stroke(32, 32, 32);
  arc(0, 0, 280, 280, 0, minAngle);
  pop();
  push();
  rotate(minAngle);
  stroke(32, 32, 32);
  line(0, 0, 75, 0);
  pop();

  push();
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  stroke("#ffee36");
  arc(0, 0, 260, 260, 0, hourAngle);
  pop();

  push();
  rotate(hourAngle);
  stroke("#ffee36");
  line(0, 0, 50, 0);
  pop();

  push();
  strokeWeight(15);
  stroke("black");
  point(0, 0);
  pop();
}
