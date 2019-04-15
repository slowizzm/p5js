class SlideScale {
	constructor(_x, _y, _n) {
		this.pos = createVector(_x, _y);
		this.n = _n;
		this.s = 3;
	}

	update() {
		let d = dist(this.pos.x, this.pos.x, slider.pos.x, slider.pos.x);
		this.s = constrain(d, 1, 300);
		return this;
	}

	display() {
		noStroke();
		fill(217);
		textSize(map(this.s, 1, 300, 33, 1));
		textFont('Avenir');
		textAlign(CENTER, CENTER);
		text(this.n, this.pos.x, this.pos.y);
		return this;
	}

	render() {
		return this.update().display();
	}
}