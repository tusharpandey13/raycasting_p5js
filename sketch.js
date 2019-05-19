var l1;
var walls = [];
function setup() {
	frameRate(60);
	createCanvas(640, 480);
	for (var i = 0; i < random(5,10); i++) {
		walls.push(new wall(random(0, 640), random(0,480), random(0,640), random(0,480)));
	}
	walls.push(new wall(0, 0, 640, 0))
	walls.push(new wall(640, 0, 640, 480))
	walls.push(new wall(640, 480, 0, 480))
	walls.push(new wall(0, 480, 0, 0))

	l1 = new light(100, 100, walls);
	noLoop();
}

function draw() {
	background(0, 0, 0);
	for (let w of walls) {
		w.draw_();
	}
	l1.draw_();
}

function mouseMoved(){
	l1.move_(mouseX, mouseY);
		redraw();
	return false;
}
