class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
//pi number?
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
class AreaCalculator {
  static calculate(geometricFigure) {
    if (geometricFigure instanceof Square) {
      return geometricFigure.side * geometricFigure.side;
    } else if (geometricFigure instanceof Rectangle) {
      return geometricFigure.width * geometricFigure.height;
    } else if (geometricFigure instanceof Circle) {
      return Math.PI * (geometricFigure.radius ** 2);
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));