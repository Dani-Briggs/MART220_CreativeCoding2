//particle class
class Particle {

  constructor() {
    this.x = random(-300, 800);
    this.y = 490;
    this.vx = random(-60, 60);
    this.vy = random(-5, -100);
    this.alpha = 155;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }

}
