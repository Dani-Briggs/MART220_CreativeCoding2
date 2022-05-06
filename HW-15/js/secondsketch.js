//setup
var mainColor = 255;
var scams;
var img;
var names = [];
var myImages;
var i = 0;
var imagesToDisplay = [];
var imageClassObject;


function preload() {
  names = loadStrings('./assets/scam.txt');
}
function setup() {
    createCanvas(640, 480);
    background(0);
    frameRate(25);
    noStroke();
    rectMode(CENTER);

    for(var k = 0; k < names.length; k++){
      img = loadImage('./assets/scams/' + names[k]);
      imageClassObject = new movieclass(img, -240, -200, 500, 350);
      imagesToDisplay[k] = imageClassObject;
    }

    //try to make it slower
    //frameRate(10);
    setInterval(changePic, 1000);
}
function draw() {

}
let image(imagesToDisplay[i].getImage(),
imagesToDisplay[i].getX(),
imagesToDisplay[i].getY(),
imagesToDisplay[i].getW(),
imagesToDisplay[i].getH()
);

    saveFrames("myMovie",".png",1,25);

    if (frameCount > 25) { // 1 second * 25 fps = 25
        noLoop();
    }

function changePic(){
  i+=1;
  if (i >= imagesToDisplay.length)
  {
    i = 0;
  }
}
