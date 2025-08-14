import { Circle } from "./circleModule.js";
import { ShapeModule } from "./shapeModule.js";
import { Rectangle, Square } from "./squaresModule.js";

// =====> for shape
let shape1 = new ShapeModule("blue");
console.log("Shape Color :", shape1.Color);
console.log("==============================");

// =====> for circle
let circle = new Circle("black", 2, 5, 10);

console.log("circle area:", circle.getArea());
console.log(`X and Y Values:, X: ${circle.X}, Y: ${circle.Y}`);
console.log("==============================");

//=====> for square and rectangle
let rectangle = new Rectangle("red", 2, 5);
console.log("rectangle area:", rectangle.getArea());

let square = new Square("yellow", 2);
console.log("square area:", square.getArea());
console.log("==============================");
