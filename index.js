class Circle {
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
  return (this.radius * 2);
  } 

  get circumference(){
    let diameter = (this.radius * 2)
   return (diameter * Math.PI)
  }
  
 get area(){
   return Math.PI * Math.pow((this.radius),2)
   //power of two with radius * pie
 }

set diameter(newDiameter){
  //set radius in here, going in reverse.
  this.radius = (newDiameter/2);
  return this.radius;
}

set circumference(newCircumference){
  //set radius in here, going in reverse, math style.
  this.radius = ((newCircumference/Math.PI)/2)
  return this.radius;
}

}