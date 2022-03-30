
function preload() {
  myFont = loadFont('assets/SupermercadoOne-Regular.ttf');
}


//setting up
function setup() {
  createCanvas(800, 500);

}

function draw() {
  background(100);
  fill(r,g,b);
  textFont(myFont);
  textSize(26);
  text('3D Model', -380, -210);
  text('Dani Briggs', 240, 240);

}
