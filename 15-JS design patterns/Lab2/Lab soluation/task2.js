//===> decorator 
class Pizza {
  constructor(_name, _price) {
    this.Name = _name;
    this.Price = _price;
  }

  getDescription() {
    return this.Name;
  }

  getCost() {
    return this.Price;
  }
}

class Margherita extends Pizza {
  constructor() {
    super("Margherita Pizza", 100);
  }
}

class Farmhouse extends Pizza {
  constructor() {
    super("Farmhouse Pizza", 150);
  }
}

class Peppy extends Pizza {
  constructor() {
    super("Peppy Paneer", 200);
  }
}

class Chicken extends Pizza {
  constructor() {
    super("Chicken Fiesta", 250);
  }
}

class ToppingDecorator extends Pizza {
  constructor(pizza) {
    super(pizza.getDescription(), pizza.getCost());
    this.pizza = pizza;
  }
}

class FreshTomato extends ToppingDecorator {
  getDescription() {
    return this.pizza.getDescription() + " ==> + fresh tomato";
  }
  getCost() {
    return this.pizza.getCost() + 20;
  }
}

class ExtraCheese extends ToppingDecorator {
  getDescription() {
    return this.pizza.getDescription() + " ==> + extra cheese";
  }
  getCost() {
    return this.pizza.getCost() + 30;
  }
}

let pizza1 = new Margherita();
pizza1 = new FreshTomato(pizza1); 
pizza1 = new ExtraCheese(pizza1); 

console.log(pizza1.getDescription()); 

console.log("total price:", pizza1.getCost()); 


let pizza2 = new Farmhouse();
pizza2 = new FreshTomato(pizza2); 

console.log(pizza2.getDescription()); 
console.log("total price:", pizza2.getCost()); 
