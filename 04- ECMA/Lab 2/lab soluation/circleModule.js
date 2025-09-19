import { ShapeModule } from "./shapeModule.js";

export class Circle extends ShapeModule {
  constructor(_color, _radius, x, y) {
    super(_color);
    this.RADIUS = _radius;
    this.X = x;
    this.Y = y;
  }

  getArea() {
    this.shapeDraw();
    return Math.PI * this.RADIUS * this.RADIUS;
  }
}

// let circle = new Circle("black", 2, 5, 10);

// console.log("Circle Area:", circle.getArea());
// console.log("X and Y Values:", `X: ${circle.X}, Y: ${circle.Y}`);
