class wall{
	constructor(x1, y1, x2, y2,){
			this.p1 = new p5.Vector(x1,y1,0);
			this.p2 = new p5.Vector(x2,y2,0);

	}

	draw_(){
		stroke(255,80);
		line(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
	}
}
