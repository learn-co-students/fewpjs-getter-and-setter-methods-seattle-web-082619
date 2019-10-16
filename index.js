class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.diameter = circumference / Math.PI;
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI)
  }
  
  get diameter() {
    return 2 * this.radius;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * this.radius ** 2
  }
}
