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
var mX = -300;
var mY = -225;
//planet
var locationX = 100;
var locationY = 100;
var spheres = [];

//rocket starting point
var rectX = 20;
var rectY = 27;
var meteor;
var ship;
//var star;
//var img;
var timerValue = 10;
var timerX = 290;
var timerY = -205;

//animations
var star;
var img;
var names = [];
var myImages;
var i = 0;
var imagesToDisplay = [];
var imageClassObject;

const particles = [];
//remember to start the server
//for images to show start server
function preload() {
//  meteor = loadImage('assets/meteor.png');
//  rocket = loadImage('assets/ship.png');
//star = loadImage('assets/star.png');
  myFont = loadFont('assets/SupermercadoOne-Regular.ttf');

  //for animations
  names = loadStrings('./assets/star-color.txt');
}


//setting up
function setup() {
  createCanvas(800, 500, WEBGL);
  speedX = random(1,10);
  speedY = random(1,10);
  setInterval(timeIt, 1000);

  //planet
  //add a texture 
  for(let m = 0; m < 5; m++)
  {
     let myP = new planetclass(50, 24, 24, locationX, locationY);
     spheres.push(myP);
    // locationX += 50;
    // locationY += 50;
  }


  //meteor position
  meteor = createSprite(130, 30);
  meteor.addImage(loadImage('assets/meteor.png'));

  //ship sprite
  ship = createSprite(-340, 3);
  ship.addImage(loadImage('assets/ship.png'));

  //star class
  for(var k = 0; k < names.length; k++){
    img = loadImage('./assets/stars/' + names[k]);
    imageClassObject = new starclass(img, -240, -200, 500, 350);
    imagesToDisplay[k] = imageClassObject;
  }

  //try to make it slower
  //frameRate(10);
  setInterval(changeStarColor, 1000);
}

function draw() {
  background(100);
  fill(r,g,b);
  //text
  textFont(myFont);
  textSize(26);
  text('Space Game', -380, -210);
  text('Dani Briggs', 240, 240);

  //Star animation
    image(imagesToDisplay[i].getImage(),
    imagesToDisplay[i].getX(),
    imagesToDisplay[i].getY(),
    imagesToDisplay[i].getW(),
    imagesToDisplay[i].getH()
  );

  // Planet
  //the push and pop need to STAY
  for(let n = 0; n < spheres.length; n++)
{
  push();
  //spheres[i].translatePlanet();
  spheres[n].rotatePlanet(frameCount * .01);
  spheres[n].show();
  pop();


}
  //Particles
  for (let i = 0; i < 5; i++) {
   let p = new Particle();
   particles.push(p);
 }
 for (let i = particles.length - 1; i >= 0; i--) {
   particles[i].update();
   particles[i].show();
   if (particles[i].finished()) {
     // remove this particle
     particles.splice(i, 1);
   }
 }


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
    text("game over", width / 2 - 547, height / 2 - 250);
  }



  //fill(150,60,29);
  //image(meteor, x, y, size);
  //if statements for meteors
  //either velocity or position
  //maybe change it to particle class
  meteor.velocity.x = speedX;
  meteor.velocity.y = speedY;

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



//  moveRocket();
if(keyDown('d'))
 {
   ship.velocity.x +=.5;
   if(ship.collide(meteor))
      {
        ship.velocity.x = 0;
      }
 }

else if(keyDown('a'))
  {
    ship.velocity.x -=.5;
    if(ship.collide(meteor))
       {
         ship.velocity.x = 0;
       }
  }

 else if(keyDown('w'))
  {
    ship.velocity.y -=.5;
    if(ship.collide(meteor))
       {
         ship.velocity.y = 0;
       }
  }

else if(keyDown('s'))
  {
    ship.velocity.y +=.5;
    if(ship.collide(meteor))
       {
         ship.velocity.y = 0;
       }
  }
  else
  {
    ship.velocity.y = 0;
    ship.velocity.x = 0;
  }



  //meteor & ship
  drawSprites();

  backButton();

}


function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

//animation for star color
function changeStarColor(){
  i+=1;
  if (i >= imagesToDisplay.length)
  {
    i = 0;
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
