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

//function preload() {
  //meteor = loadImage('assets/meteor.png');
//  rocket = loadImage('assets/rocket.png');
//  star = loadImage('assets/star.png');
//}


//setting up
function setup() {
  createCanvas(800, 500);
  speedX = random(1,10);
  speedY = random(1,10);
  loadImage('assets/meteor.png', img => {
    image(img, 0, 0);
  });
}

function draw() {
  background(200);
  fill(r,g,b);
  //text
  text('Homework 3', 10, 21);
  text('Dani Briggs', 650, 490);

  //Square --> makes into the rocket
  //  fill(100,100,29);
  image(rocket, mX, mY);


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

  moveRect();

  backButton();
}

//try to fix this
function moveRect(){
  //rect will move with wasd
  //rect
  fill(20,100,29);
  rect(320, 420, 40, 70);
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


//backbutton
function backButton(){
  fill(35, 22, 180);
  rect(12, 450, 70, 40);
  fill(r, g, b);
  textSize(25);
  text('Back', 19, 475);
}
