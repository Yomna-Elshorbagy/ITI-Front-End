function Shape(_color) {
  this.Color = _color;
}

Shape.prototype.printColor = function () {
  console.log(`${this.Color}`);
};
Shape.prototype.calcArea = function () {
  return 0;
};
Shape.prototype.calcPerimeter = function () {
  return 0;
};

function Rect(_color, _width, _height) {
  Shape.call(this, _color);
  this.Width = _width;
  this.Height = _height;
}
//==> rect constructor function will inherit methods from Shape.prototype
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;

Rect.prototype.calcArea = function () {
  return this.Width * this.Height;
};
Rect.prototype.calcPerimeter = function () {
  return 2 * (this.Width + this.Height);
};
Rect.prototype.printColor = function () {
  console.log(`${this.Color}`);
};
Rect.prototype.toString = function () {
  return `color of rectangle : ${
    this.Color
  }, area: ${this.calcArea()}, perimeter: ${this.calcPerimeter()}`;
};
function Square(_color, _side) {
  Rect.call(this, _color, _side, _side);
}
//==> square constructor function will inherit methods from Rect.prototype
Square.prototype = Object.create(Rect.prototype);
Square.prototype.constructor = Square;

Square.prototype.printColor = function () {
  console.log(`${this.Color}`);
};
Square.prototype.toString = function () {
  return `color of square: ${
    this.Color
  }, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
};

let rec1 = new Rect("red", 11, 22);
let squ1 = new Square("red", 2);
let rec2 = new Rect("black", 3, 4);
let squ2 = new Square("black", 5);

let shapes = [rec1, rec2, squ1, squ2];
for (const element of shapes) {
  console.log(element.toString());
}
