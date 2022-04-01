//vars & lets
let myModel;
let myTexture;
var img;


function preload() {
  myFont = loadFont('assets/SupermercadoOne-Regular.ttf');
  myModel = loadModel('assets/bust-2.obj', true);
}


//setting up
function setup() {
  createCanvas(800, 500, WEBGL);

}

function draw() {
  background(100);
  textFont(myFont);
  textSize(26);
  text('3D Model', -380, -210);
  text('Dani Briggs', 240, 240);
  scale(0.04); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(myModel);

}
