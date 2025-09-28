//Q1 singleton Pattern
class CEO {
  static instance = null;

  constructor(_name, _age, _address) {
    if (CEO.instance == null) {
      this.Name = _name;
      this.Age = _age;
      this.Address = _address;
      CEO.instance = this;
    } else {
      return CEO.instance; 
    }
  }
}

let firstCeo = new CEO("yomna", 50, "Cairo");
let SecondCeo = new CEO("mohamed", 55, "cairo");

console.log(firstCeo); 
console.log(SecondCeo);
