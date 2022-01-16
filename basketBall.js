class Ball {
    constructor(x, y, r) {
      let options = {
        restitution: 0.8,
        fricition: 0,
		    density: 0.01
      };
  this.x = x;
  this.y = y;
  this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
  
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    }
  }