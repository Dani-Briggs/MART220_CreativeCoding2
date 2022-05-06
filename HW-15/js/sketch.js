//setup
function setup() {
  let img = createImage(800, 600);
  img.loadPixels();
  createCanvas(800, 600);


  function draw(){
    background(0);
    fill(200,0,0);
    textSize(100);
    text('DB', 15, 79);
  }



  function writeColor(image, x, y, red, green, blue, alpha)
  {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }


  function drawShapes(number1, number2) {
    let startX = floor(random(number1-10)) + 10;
    let startY = floor(random(number2-20)) + 20;
    // draw shapes
    for (x = startX; x < startX + 70; x++) {
      for (y = startY; y < startY + 70; y++) {
        if (x > startX + 10 && x < startX + 25 && y > startY + 10 && y < startY + 25) {
          writeColor(img, x, y, 50, 10, 50, floor(random(255)));
        } else {
          writeColor(img, x, y, 55, 200, 125, floor(random(255)));
        }
      }
    }
  }

  let x, y;


  for (y = 0; y < img.height; y++) {
    for (x = 0; x < img.width; x++) {
      let red = random(55);
      let green = random(175);
      let blue = random(155);
      let alpha = 255;
      writeColor(img, x, y, red, green, blue, alpha);
    }
  }

  //  upper border line
  for(y = 0; y < 5; y++)
  {
    for (x = 0; x < img.width; x++)
    {
      writeColor(img, x, y, 55, 0, 0, 55);
    }
  }

  //bottom border line
  y = img.height - 1;
  for(let i = 0; i < 5; i++)
  {
    for (x = 0; x < img.width; x++)
    {
      writeColor(img, x, y, 55, 0, 0, 55);
    }
    y--;
  }

  // draw shapes
  for (var i = 0; i < 70; i++) {
    drawShapes(floor(random(width)), floor(random(height)));
  }

  img.updatePixels();
  image(img, 0, 0);
}
