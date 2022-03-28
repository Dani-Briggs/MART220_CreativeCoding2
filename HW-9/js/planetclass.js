///planet class
class planetclass{

  constructor(radius, detailX, detailY, locationX, locationY){
    this.radius = radius;
    this.detailX = detailX;
    this.detailY = detailY;
    this.locationX = locationX;
    this.locationY = locationY;
  }

  show()
  {

      sphere(this.radius,this.detailX, this.detailY);
  }

  translatePlanet()
  {
      translate(this.locationX,this.locationY);
  }

  rotatePlanet(amount)
  {
      rotateX(amount);
      rotateY(amount);
  }
}
