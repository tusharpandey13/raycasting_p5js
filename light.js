class light {
  constructor(x, y, walls) {
    this.pos = new p5.Vector(x, y, 0);
    this.walls = walls;
    this.rays = [];
    for (let a = 0; a < 360; a += 1) {
      this.rays.push(new ray(this.pos, radians(a)));
    }
  }

  draw_() {
    ellipse(this.pos.x, this.pos.y, 5, 5);
    for (let r of this.rays) {
      r.draw_();
      let closest = null;
      let record = Infinity;
      for (let w of this.walls) {
        const pt = r.cast(w);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        // colorMode(HSB);
        // stroke((frameCount * 2) % 360, 255, 255, 50);
        stroke(255, 100);
				// strokeWeight(2);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }
  move_(x, y) {
    this.pos = new p5.Vector(x, y, 0);
    for (let r of this.rays) {
      r.pos = this.pos;
      r.draw_();
    }
    this.draw_();
  }
}
