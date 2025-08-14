export class ShapeModule {
  #color;
  constructor(_color) {
    if (typeof _color !==  "string") {
      throw new Error("Color must be a string.");
    }
    this.#color = _color;
  }
  set Color(_color) {
    this.#color = _color;
  }
  get Color() {
    return this.#color;
  }
  shapeDraw() {
    console.log(`color of shape is: ${this.#color}`);
  }
}

// let shape1 = new ShapeModule("blue");
// console.log("Shape Color :", shape1.Color);
