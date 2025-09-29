# 🔖 ITI

# 🎯 JavaScript Design Patterns

## Introduction

- **Design Pattern** = a **general, reusable solution** to a common
  software design problem.\
- It's not finished code but a **template/blueprint** you can adapt.\
- Popularized by the **Gang of Four (GoF)** in their 1994 book:\
  _Design Patterns: Elements of Reusable Object-Oriented Software_.\
- Translated into many languages: C#, Java, C++, and **JavaScript**.

---

## Why Use Design Patterns?

1.  **Don't reinvent the wheel** -- use proven solutions.\
2.  **Boost object-oriented skills** -- better at
    abstraction/organization.\
3.  **Recognize patterns** -- spot them in frameworks/libraries.\
4.  **Shared vocabulary** -- improves communication with developers.\
5.  **Proven, reliable solutions** -- reduce bugs and speed up
    development.

---

## Categories of Design Patterns

1.  **Creational** -- Deal with object/class creation.
    - Example: **Singleton**, **Factory**, **Builder**.\
    - Focus: flexibility and reuse in creating new objects.
2.  **Structural** -- Deal with organizing classes/objects into larger
    structures.
    - Focus: maintainability, readability, efficiency.
3.  **Behavioral** -- Deal with communication/interaction between
    objects.
    - Focus: how objects/classes **collaborate**.

---

## Common JavaScript Patterns (from lecture)

### 🔹 Singleton Pattern

- Ensures only **one instance** of an object exists.\
- Provides a **global access point**.\
- Use cases: config management, logging, caching.

**Code Example:**

```js
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.value = Math.random();
    Singleton.instance = this;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
console.log(a.value, b.value); // same value
```

---

### 🔹 Factory Pattern

- A **creational pattern** for object creation.\
- Hides complex logic and returns the right object type.

**Code Example:**

```js
class Car {
  constructor(model) {
    this.model = model;
  }
}

class Bike {
  constructor(model) {
    this.model = model;
  }
}

class VehicleFactory {
  static createVehicle(type, model) {
    switch (type) {
      case "car":
        return new Car(model);
      case "bike":
        return new Bike(model);
      default:
        throw new Error("Unknown type");
    }
  }
}

const car = VehicleFactory.createVehicle("car", "BMW");
const bike = VehicleFactory.createVehicle("bike", "Yamaha");
console.log(car, bike);
```

---

### 🔹 Mixin Pattern

- Adds functionality to classes **without inheritance**.

**Code Example:**

```js
const canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

const canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};

class Person {}

Object.assign(Person.prototype, canEat, canWalk);

const p = new Person();
p.eat();
p.walk();
```

---

### 🔹 Builder Pattern

- **Step-by-step construction** of complex objects.

**Code Example:**

```js
class Computer {
  constructor({ cpu, ram, storage }) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
  }
}

class ComputerBuilder {
  constructor() {
    this.cpu = "i3";
    this.ram = "4GB";
    this.storage = "256GB";
  }
  setCPU(cpu) {
    this.cpu = cpu;
    return this;
  }
  setRAM(ram) {
    this.ram = ram;
    return this;
  }
  setStorage(storage) {
    this.storage = storage;
    return this;
  }
  build() {
    return new Computer(this);
  }
}

const pc = new ComputerBuilder()
  .setCPU("i7")
  .setRAM("16GB")
  .setStorage("1TB")
  .build();
console.log(pc);
```

---

### 🔹 Dependency Injection (DI) Pattern

- Dependencies are **injected** into a class/function instead of
  hardcoding them.

**Code Example:**

```js
class Logger {
  log(msg) {
    console.log("LOG:", msg);
  }
}

class UserService {
  constructor(logger) {
    this.logger = logger; // injected
  }

  createUser(name) {
    this.logger.log(`User ${name} created`);
  }
}

const logger = new Logger();
const userService = new UserService(logger);
userService.createUser("Alice");
```

---

## Summary

- **Design Patterns** = reusable blueprints for solving recurring
  coding problems.\
- They make code **cleaner, more maintainable, and scalable**.\
- Categories: **Creational**, **Structural**, **Behavioral**.\
- Key patterns in JS: **Singleton, Factory, Mixin,
  Builder, Dependency Injection**.
