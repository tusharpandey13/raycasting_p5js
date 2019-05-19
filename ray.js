class ray {
  constructor(pos, theta) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(theta);
  }

	draw_(){
		stroke('rgba(0,255,0,0.25)');
		push();
    translate(this.pos.x, this.pos.y);
    // line(0, 0, this.dir.x * 10, this.dir.y * 10);
    pop();

	}

  cast(w) {
    const x1 = w.p1.x;
    const y1 = w.p1.y;
    const x2 = w.p2.x;
    const y2 = w.p2.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    if (t > 0 && t < 1 && u > 0) {
      const pt = new p5.Vector(x1 + t * (x2 - x1), y1 + t * (y2 - y1), 0);
      return pt;
    } else {
      return;
    }
  }
}
