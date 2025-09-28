//Q4 Singleton pattern
class ConfigureVals {
  static instance = null;

  constructor(xPoint = 0, yPoint = 0, shape = null) {
    if (ConfigureVals.instance == null) {
      this.xPoint = xPoint;
      this.yPoint = yPoint;
      this.shape = shape;
      ConfigureVals.instance = this;
    } else {
      return ConfigureVals.instance;
    }
  }
}

let firstConfigure = new ConfigureVals(10, 20, "circle");
let secondConfigure = new ConfigureVals(30, 40, "square");

console.log(firstConfigure);
console.log(secondConfigure);
