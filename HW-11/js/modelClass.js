//modelClass
class modelClass {
  constructor (locationX, locationY, locationZ, scalesize,){
    this.locationX = locationX;
    this.locationY = locationY;
    this.locationZ = locationZ;
    this.scalesize = scalesize;

  }
  show()
  {

      model(this.scalesize);
  }
  translateModel()
  {
      translate(this.locationX,this.locationY);
  }

  rotateModel(amount)
  {
      rotateX(amount);
      rotateY(amount);
      rotateZ(amount);
  }
}
