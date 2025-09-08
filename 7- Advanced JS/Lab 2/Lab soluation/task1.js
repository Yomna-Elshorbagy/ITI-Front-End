let Person = {
  ID: 1,
  Name: "Empty",
};
let Employee = {
  Salary: 10000,
};
let HREmployee = {
  location: "Cairo",
};

Object.setPrototypeOf(Employee, Person);
Object.setPrototypeOf(HREmployee, Employee);

//===> prototype chain
console.log(HREmployee);
console.log(HREmployee.__proto__); //==> ref to prototype object which constructor function refer to
console.log(HREmployee.__proto__.__proto__);

//===> access person id and name
console.log(HREmployee.ID);
console.log(HREmployee.Name);

//===> define properties for hr
HREmployee.ID = 250;
HREmployee.Name = "yousra";

console.log(HREmployee.ID); // ==> has its own one if Not => will take of parent
console.log(HREmployee.Name); 
console.log(Person.ID); // ==> property has its own ref Not affected 
console.log(Person.Name);

Person.Age = 30;
console.log(HREmployee.Age); // ==> Accessible through prototype chain  