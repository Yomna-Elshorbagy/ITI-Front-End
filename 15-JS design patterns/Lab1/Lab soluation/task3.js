
// Q3 factory pattern 
class Toy {
  constructor(_color, _price) {
    this.Color = _color;
    this.Price = _price;
  }
}

class ToyDuck extends Toy {
  constructor(_color, _price) {
    super(_color, _price);
  }
}

class ToyCar extends Toy {
  constructor(_color, _price, _name) {
    super(_color, _price);
    this.Name = _name;
  }
}

class ToyFactory {
  constructor(type) {
    this.type = type;
    switch (type) {
      case "duck":
        return new ToyDuck("yellow", 100);
      case "car":
        return new ToyCar("red", 500, "Sports Car");
      default:
        throw "This toy type doesn't exist";
    }
  }
}

let duck = new ToyFactory("duck");
let car = new ToyFactory("car");
// let cat = new ToyFactory("cat");
console.log(duck);
console.log(car);
// console.log(cat);
