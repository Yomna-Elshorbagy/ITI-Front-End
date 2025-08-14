import { ShapeModule } from "./shapeModule.js";

export class Rectangle extends ShapeModule {
  constructor(_color, _width, _height) {
    super(_color);
    this.WIDTH = _width;
    this.HEIGHT = _height;
  }
  getArea() {
    this.shapeDraw();
    return this.WIDTH * this.HEIGHT;
  }
}
export class Square extends Rectangle {
  constructor(_color, _line) {
    super(_color, _line, _line);
  }
}

// let rect = new Rectangle("red", 2, 5);
// console.log("Rectangle Area:", rect.getArea());

// let square = new Square("blue", 2);
// console.log("Square Area:", square.getArea());
