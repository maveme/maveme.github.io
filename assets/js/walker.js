class Walker {
      constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(12.5, 2);
      }
      
      update() {
        this.pos.add(this.vel)
      }
      
      show() {
        stroke(238, 67, 127);
        fill(29, 135,182);
        rect(this.pos.x, this.pos.y, 5, 5);
      }
    }