class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.diameter = this.radius * 2
  }

  get circumference() {
    return this.circumference = Math.PI * this.radius * 2
  }

  get area() {
    return this.area = this.radius ** 2 * Math.PI
  }

  set diameter(newDiameter) {
    return this.radius = newDiameter / 2
  }

  set circumference(newCircum) {
    return this.radius = newCircum / Math.PI / 2
  }

  set area(newArea) {
    return this.radius = (newArea / Math.PI) ** (1 / 2) 
  }
}
