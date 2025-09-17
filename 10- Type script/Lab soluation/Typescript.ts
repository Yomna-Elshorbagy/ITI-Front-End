//*====>1- make your own data type and use it
type traveler = {
  id: number;
  name: string;
  destination: string;
};

let travelers: traveler[] = [
  { id: 20, name: "yomna", destination: "spain" },
  { id: 21, name: "yousra", destination: "roma" },
  { id: 20, name: "yara", destination: "trabzon" },
];
console.log(travelers);

//*====>2- Create array that accept numbers only and print them.
let numbersArray: number[] = [5, 20, 25, 40, 50];
console.log(numbersArray);

//*====>3- Create array that accept string or number and print them
let dataStrNum: (number | string)[] = ["yomna", 2000, "ola", 4000];
console.log(dataStrNum);

//*====>4- Create function with default parameters create function with optional parameters
// with default
function isActive(status: boolean = true): void {
  console.log(`user is active: ${status}`);
}
isActive();
isActive(false);
// with optional
function calculatePrice(price: number, discount?: number): number {
  return discount ? price - discount : price;
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 20));

//*====>5- Create function with two parameter try to call it without any parameter.
function adding(x?: number, y?:  ): number {
  return (x ?? 0) + (y ?? 0);
}
console.log(adding());
console.log(adding(2));
console.log(adding(2, 5));

function adding2(x: number = 0, y: number = 0): number {
  return x + y;
}
console.log(adding2());
console.log(adding2(2));
console.log(adding2(2, 5));

function adding3(x: number, y: number): number {
  return x + y;
}
//console.log(adding3()); // Nan expected 2 arguments
//console.log(adding3(2)); // Nan expected the same 2
console.log(adding3(2, 5)); //7

//*====>6- Create Class Employee Implements employee.. And Create Class Manager Inherit From Employee Class
interface IEmployee {
  id: number;
  name: string;
  salary: number;
}

class Employee implements IEmployee {
  constructor(public id: number, public name: string, public salary: number) {}

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  department: string;

  constructor(id: number, name: string, salary: number, department: string) {
    super(id, name, salary);
    this.department = department;
  }

  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

let emp = new Employee(1, "Yomna", 5000);
let mgr = new Manager(2, "Yousra", 10000, "IT");

console.log(emp.getDetails());
console.log(mgr.getDetails());


//*====>7- Create Class Product Implements product:(Has: Discount Method.. Return Boolean, Discount Method Return Number if a Product has discount 25%, Take an object from product and show the product Details)

interface IProduct {
  id: number;
  productName: string;
  price: number;
  description: string;
}

class Product implements IProduct {
  constructor(
    public id: number,
    public productName: string,
    public price: number,
    public description: string
  ) {}

  discount(): boolean {
    return this.price > 100;
  }

  discountValue(): number {
    return this.price * 0.25;
  }

  showDetails(): void {
    console.log(
      `ID: ${this.id}, Name: ${this.productName}, Price: ${this.price}, Desc: ${this.description}`
    );
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

//*====>8- Use Record, Pick, Omit, Partial
//===> record ==>
type Branches = Record<string, string>;
let itiBranches: Branches = {
  Tanta: "tanta",
  Damnhour: "Damnhour",
};

//===> pick ==> add keys needed
type ProductNameAndPrice = Pick<IProduct, "productName" | "price">;
let product1: ProductNameAndPrice = {
  productName: "iphone",
  price: 7500
};
console.log(product1);

//===> omit ==> remove key description
type ProductWithoutDescription = Omit<IProduct, "description">;
let product2: ProductWithoutDescription = {
  id: 1,
  productName: "Laptop",
  price: 70000,
};
console.log(product2);

//===> partial ==> optional
type PartialProduct = Partial<IProduct>;
let product3: PartialProduct = { productName: "Phone" };
let product4: PartialProduct = {};
console.log(product3, product4);

//*====>9- Make Enum for ITI Branches that contain group of branches Try to get The Branches names in console
enum ITIBranches {
  Branch1 = "Tanta",
  Branch2 = "Smart",
  Branch3 = "Mansoura",
}
console.log(Object.entries(ITIBranches));
console.log(Object.keys(ITIBranches));
console.log(Object.values(ITIBranches));
