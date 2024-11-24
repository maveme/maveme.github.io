let walker;
function setup() {
  createCanvas(400, 400);
  walker = new Walker(width/2, height/2);
  background(255);
}

function draw() {
  walker.show();
  walker.update();
  
  if (walker.pos.x > width || walker.pos.x < 0) {
    walker.vel.x = walker.vel.x * (-1); 
  }
  if (walker.pos.y > height || walker.pos.y < 0) {
    walker.vel.y = walker.vel.y * (-1); 
  }
}