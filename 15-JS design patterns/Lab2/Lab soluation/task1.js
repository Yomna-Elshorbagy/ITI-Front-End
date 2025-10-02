// ===> solution with observable 
class Store {
  constructor() {
    this.subscribers = [];
    this.newProduct = "";
  }

  subscribe(customer) {
    this.subscribers.push(customer);
  }

  unsubscribe(customer) {
    this.subscribers = this.subscribers.filter(sub => sub !== customer);
  }

  addNewProduct(product) {
    this.newProduct = product;
    this.notify();
  }

  notify() {
    this.subscribers.forEach(sub => sub.update(this));
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }

  update(store) {
    console.log(`${this.name}, new product added: ${store.newProduct}`);
  }
}

let store = new Store();
let Yomna = new Customer("Yomna");
let Yousra = new Customer("Yousra");

store.subscribe(Yomna);
store.subscribe(Yousra);

store.addNewProduct("iPhone 16");
store.addNewProduct("TV LG 6");

store.unsubscribe(Yousra);
store.addNewProduct("smart watch 7");
