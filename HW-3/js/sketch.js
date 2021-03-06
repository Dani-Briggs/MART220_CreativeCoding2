//vars
var x = 0;
var y = 100;
var size = 25;
var speedX = 0;
var speedY = 0;
var speedMX = 0;
var speedMY = 0;
var r = 0;
var g = 0;
var b = 0;
var mX = 100;
var mY = 25;
var rectX = 0;
var rectY = 0;
var meteor;
var rocket;
var star;
var img;
var timerValue = 10;
var timerX = 750;
var timerY = 25;

//for images to show start sever
function preload() {
  meteor = loadImage('assets/meteor.png');
  rocket = loadImage('assets/rocket.png');
  star = loadImage('assets/star.png');
  myFont = loadFont('assets/SupermercadoOne-Regular.ttf');
}


//setting up
function setup() {
  createCanvas(800, 500);
  speedX = random(1,10);
  speedY = random(1,10);
  setInterval(timeIt, 1000);
}

function draw() {
  background(200);
  fill(r,g,b);
  //text
  textFont(myFont);
  text('Homework 3', 10, 21);
  text('Dani Briggs', 650, 490);


  //Square --> makes into the star
  //  fill(100,100,29);
  image(star, 0, 0);
  //timer
  if(timerValue >= 10){
    text("0:" + timerValue, timerX, timerY);
  }
  if(timerValue < 10){
    text("0:0" + timerValue, timerX, timerY );
  }
  if(timerValue == 0){
    fill(200,0,0);
    textSize(76);
    text("game over", width / 2 - 167, height / 2);
  }

  //circle --> get a meteor img for this
  //fill(150,60,29);
  image(meteor, x, y, size);
  //if statements for circle
  if (x >= 800){
    speedX = (1,10);
    speedX = -speedX;
  }
  else if (x<0) {
    speedX = random(1,10);
  }
  else if (y >= 500){
    speedY = random(1,10);
    speedY = -speedY;
  }
  else if (y<0) {
    speedY = random(1,10);
  }
  ////////////
  //if statements for square
  if (x >= 800){
    speedMX = (1,10);
    speedMX = -speedMX;
  }
  else if (x<0) {
    speedMX = random(1,10);
  }
  else if (y >= 500){
    speedMY = random(1,10);
    speedMY = -speedMY;
  }
  else if (y<0) {
    speedMY = random(1,10);
  }

  //for circle
  x = x + speedX;
  y = y + speedY;
  //for Square
  mX = mY + speedX;
  mY = mX + speedY;

  moveRocket();

  backButton();
}

//try to fix this
//change to moveRocket
function moveRocket(){
  //rect will move with wasd
  //rect
  fill(20,100,29);
  image(rocket,rectX, rectY, 40, 70);
  if(keyIsPressed){
    if(key == 'a'){
      rectX-=5;
    }
    else if (key == 'd') {
      rectX+=5;
    }
    else if (key == 'w') {
      rectY-=5;
    }
    else if (key == 's') {
      rectY+=5;
    }
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

//backbutton
function backButton(){
  fill(35, 22, 180);
  rect(12, 450, 70, 40);
  fill(r, g, b);
  textSize(25);
  text('Back', 19, 475);
}
