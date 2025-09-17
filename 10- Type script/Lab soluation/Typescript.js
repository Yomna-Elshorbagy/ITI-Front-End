let travelers = [
    { id: 20, name: "yomna", destination: "spain" },
    { id: 21, name: "yousra", destination: "roma" },
    { id: 20, name: "yara", destination: "trabzon" },
];
console.log(travelers);
//*====>2- Create array that accept numbers only and print them.
let numbersArray = [5, 20, 25, 40, 50];
console.log(numbersArray);
//*====>3- Create array that accept string or number and print them
let dataStrNum = ["yomna", 2000, "ola", 4000];
console.log(dataStrNum);
//*====>4- Create function with default parameters create function with optional parameters
// with default
function isActive(status = true) {
    console.log(`user is active: ${status}`);
}
isActive();
isActive(false);
// with optional
function calculatePrice(price, discount) {
    return discount ? price - discount : price;
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 20));
//*====>5- Create function with two parameter try to call it without any parameter.
function adding(x, y) {
    return (x !== null && x !== void 0 ? x : 0) + (y !== null && y !== void 0 ? y : 0);
}
console.log(adding());
console.log(adding(2));
console.log(adding(2, 5));
function adding2(x = 0, y = 0) {
    return x + y;
}
console.log(adding2());
console.log(adding2(2));
console.log(adding2(2, 5));
function adding3(x, y) {
    return x + y;
}
//console.log(adding3()); // Nan expected 2 arguments
//console.log(adding3(2)); // Nan expected the same 2
console.log(adding3(2, 5)); //7
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(id, name, salary, department) {
        super(id, name, salary);
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}
let emp = new Employee(1, "Yomna", 5000);
let mgr = new Manager(2, "Yousra", 10000, "IT");
console.log(emp.getDetails());
console.log(mgr.getDetails());
class Product {
    constructor(id, productName, price, description) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.description = description;
    }
    discount() {
        return this.price > 100;
    }
    discountValue() {
        return this.price * 0.25;
    }
    showDetails() {
        console.log(`ID: ${this.id}, Name: ${this.productName}, Price: ${this.price}, Desc: ${this.description}`);
    }
}
// create product objects
let p1 = new Product(1, "mobile", 20000, "High performance mobile");
let p2 = new Product(2, "Mouse", 800, "Wireless mouse");
p1.showDetails();
p2.showDetails();
console.log("p1 have discount?", p1.discount());
console.log("Discount value for p1:", p1.discountValue());
console.log("p2 have discount?", p2.discount());
console.log("Discount value for p2:", p2.discountValue());
let itiBranches = {
    Tanta: "tanta",
    Damnhour: "Damnhour",
};
let product1 = {
    productName: "iphone",
    price: 7500
};
console.log(product1);
let product2 = {
    id: 1,
    productName: "Laptop",
    price: 70000,
};
console.log(product2);
let product3 = { productName: "Phone" };
let product4 = {};
console.log(product3, product4);
//*====>9- Make Enum for ITI Branches that contain group of branches Try to get The Branches names in console
var ITIBranches;
(function (ITIBranches) {
    ITIBranches["Branch1"] = "Tanta";
    ITIBranches["Branch2"] = "Smart";
    ITIBranches["Branch3"] = "Mansoura";
})(ITIBranches || (ITIBranches = {}));
console.log(Object.entries(ITIBranches));
console.log(Object.keys(ITIBranches));
console.log(Object.values(ITIBranches));
