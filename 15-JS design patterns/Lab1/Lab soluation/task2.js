// Q2 factory pattern 
class Car {
  constructor(_price, _engine) {
    this.Price = _price;
    this.Engine = _engine;
  }
}
class BMW extends Car {
  constructor(_price, _engine) {
    super(_price, _engine);
  }
}

class Mercedes extends Car {
  constructor(_price, _engine) {
    super(_price, _engine);
  }
}

class CarFactory {
  constructor(type) {
    this.type = type;
    switch (type) {
      case "bmw":
        return new BMW(1000000, 250000);
      case "mercedes":
        return new Mercedes(800124, 624);
      default:
        throw "car type not exist";
    }
  }
}

let bmw = new CarFactory("bmw");
let mercedes = new CarFactory("mercedes");

console.log(bmw);
console.log(mercedes);
