//vars & lets
let myModel;
let myTexture;
var img;


function preload() {
  img = loadImage('assets/red.jpg');
  myFont = loadFont('assets/SupermercadoOne-Regular.ttf');
  myModel = loadModel('assets/cam.obj', true);
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
  scale(1); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  model(myModel);

}
