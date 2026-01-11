# 📘 TypeScript Guide

This README provides a **structured, beginner-to-advanced guide** to TypeScript, covering installation, configuration, typing system, interfaces, classes, and generics with **extra explanations and best practices**.

---

## 1️⃣ TypeScript Installation & Setup

### 1.1 Install TypeScript Globally

```bash
npm i -g typescript
```

Check installation:

```bash
tsc -v
```

---

### 1.2 Hello World Example

```ts
console.log("Hello World");
```

Compile:

```bash
tsc index.ts
node index.js
```

---

### 1.3 Watch Mode (Development Mode)

Install helper package:

```bash
npm install -D concurrently
```

Add script in `package.json`:

```json
"scripts": {
  "start:dev": "concurrently \"tsc --watch\" \"node --watch dist/index.js\""
}
```

Run:

```bash
npm run start:dev
```

✔ Automatically recompiles and runs on every change.

---

### 1.4 TypeScript Configuration (`tsconfig.json`)

Create config file:

```bash
tsc --init
```

Important options:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "removeComments": true,
    "strict": true
  }
}
```

---

### 1.5 `src` vs `dist` Folder

| Folder | Purpose                    |
| ------ | -------------------------- |
| src    | TypeScript source files    |
| dist   | Compiled JavaScript output |

✔ `rootDir` → source folder
✔ `outDir` → compiled output

---

### 1.6 Statically vs Dynamically Typed Languages

| Static Typing                 | Dynamic Typing              |
| ----------------------------- | --------------------------- |
| Types checked at compile time | Types checked at runtime    |
| Safer & fewer runtime errors  | More flexible               |
| Example: TypeScript, Java     | Example: JavaScript, Python |

---

## 2️⃣ Type Annotations & Data Types

### 2.1 Basic Types

```ts
let userName: string = "Yomna";
let age: number = 25;
let isAdmin: boolean = true;
let anything: any = "⚠ Avoid when possible";
```

---

### 2.2 Arrays & Union Types

```ts
let numbers: number[] = [1, 2, 3];
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
let mixed: (string | number)[] = ["Hello", 10];
```

---

### 2.3 Literal Types

```ts
let status: "success" | "error";
status = "success";
```

---

### 2.4 Array vs Tuple

```ts
let arr: string[] = ["a", "b"];
let tuple: [string, number] = ["Age", 25];
```

✔ Tuple has **fixed length & order**

---

### 2.5 Objects

```ts
let user: { name: string; age: number } = {
  name: "Yomna",
  age: 25,
};
```

---

### 2.6 Type Alias & Intersection (`&`)

```ts
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;
```

---

### 2.7 Enums

```ts
enum Role {
  Admin,
  Seller,
  User,
}
```

---

### 2.8 Type Assertions (`as`)

```ts
let x = ["hello world", 25];
for (let i = 0; i < x.length; i++) {
  let value = x[i] as string;
  console.log(value.split(" "));
}
```

⚠ Use only when **you are sure** about the type.

---

### 2.9 Functions

#### 2.9.1 Optional & Required Params

```ts
function greet(name: string, age?: number): string {
  return `Hello ${name}`;
}
```

#### 2.9.2 Arrow Function

```ts
const add = (a: number, b: number): number => a + b;
```

#### 2.9.3 `void` vs `never`

```ts
function log(): void {}
function throwError(): never {
  throw new Error("Error");
}
```

#### 2.9.4 Important TS Config Flags

- `noImplicitAny`
- `noImplicitReturns`
- `noUnusedLocals`
- `noUnusedParameters`

✔ Improves code quality & prevents silent bugs

---

## 3️⃣ Interfaces

### 3.1 Interface Declaration

```ts
interface IUser {
  name: string;
  age: number;
}
```

---

### 3.2 Methods & Params

```ts
interface IUser {
  login(email: string): boolean;
}
```

---

### 3.3 Reopen vs Extend

```ts
interface A {
  x: number;
}
interface A {
  y: number;
} // reopen

interface B extends A {
  z: number;
}
```

---

### 3.4 When to Use Interface vs Type

- ✔ Interface → Object shapes, APIs, classes
- ✔ Type → Unions, primitives, complex logic
- ✔ Inline `{}` → Quick, one-time usage

---

## 4️⃣ Classes

### 4.1 Class Declaration

```ts
class User {
  constructor(public name: string) {}
}
```

---

### 4.2 Access Modifiers

- `public` → accessible everywhere
- `private` → inside class only
- `protected` → class + subclasses

---

### 4.3 Getter, Setter & Static

```ts
class Counter {
  private static count = 0;

  static increment() {
    Counter.count++;
  }
}
```

---

### 4.4 Polymorphism & Method Override

```ts
class Animal {
  sound() {
    console.log("sound");
  }
}
class Dog extends Animal {
  sound() {
    console.log("bark");
  }
}
```

---

### 4.5 Implements Interface & `Partial<T>`

```ts
class User implements IUser {}
let updateUser: Partial<IUser> = { name: "Ali" };
```

---

### 4.6 Abstract Classes

```ts
abstract class Shape {
  abstract area(): number;
}
```

---

### 4.7 Generics

#### Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

#### Class

```ts
class Box<T> {
  content!: T;
}
```

#### Multiple Types

```ts
function pair<T, U>(a: T, b: U) {}
```

---

## ⭐ Extra Tips & Best Practices

- Prefer `unknown` over `any`
- Enable `strict` mode always
- Use `Readonly<T>` for immutability
- Combine TS with ESLint
- Type your API responses
- Avoid overusing type assertions

---

## ✅ Conclusion

TypeScript helps you:

- Catch bugs early
- Write scalable applications
- Improve readability & maintainability

🚀 Mastering these concepts prepares you for **React, Node.js, and large-scale apps**.
