function Rect(_color, _width, _height) {
  this.Color = _color;
  this.Width = _width;
  this.Height = _height;

  //===> 1- static property
  Rect.NumberOfObjects++;
}
//==> 2- initialization to rect constructor
Rect.NumberOfObjects = 0;

//==> 3- return how many instance created
Rect.DisplayNumberOfObjects = function () {
  return Rect.NumberOfObjects;
};

function Square(_color, _side) {
  //4- explicit bind this => inherit deep copy
  Rect.call(this, _color, _side, _side);

  Square.NumberOfObjects++;
}

Square.NumberOfObjects = 0;

Square.DisplayNumberOfObjects = function () {
  return Square.NumberOfObjects;
};

Square.prototype = Object.create(Rect.prototype);
Square.prototype.constructor = Square;

let rec1 = new Rect("black", 1, 2);
let rec2 = new Rect("blue", 6, 3);

let squ1 = new Square("blue", 4);
let squ2 = new Square("black", 7);
let squ3 = new Square("white", 5);

console.log(Rect.DisplayNumberOfObjects());
console.log(Square.DisplayNumberOfObjects());
console.log(squ1.DisplayNumberOfObject); // undefined => could not use static methods on instances
