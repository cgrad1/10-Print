var x = 0;
var y = 0;
var spacing = 20;

function setup() {
  createCanvas(400, 400);
  background(0);
}
function draw() {
  stroke(x);
  if (random(1) < 0.5) {
    line(x, y, x+spacing*2, y+spacing*2);
  } else {
    line(x, y+spacing*2, x+spacing*2, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}