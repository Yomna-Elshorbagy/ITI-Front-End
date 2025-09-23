# 🔖 ITI - Node.js - Advanced Patterns & Best Practices

## 🛠 Performance & Profiling

- Run Node.js in **debug mode**  

**Bash (Linux/macOS):**
```bash
node --inspect index.js
```

**CMD (Windows):**
```cmd
node --inspect index.js
```

- CPU & memory flamegraphs with **clinic.js**  

```bash
npx clinic flame -- node index.js
```

```cmd
npx clinic flame -- node index.js
```

---

## 🧠 Memory Management

- Check heap usage  

```js
console.log(process.memoryUsage());
```

- Increase memory allocation (e.g., 4GB):  

**Bash:**
```bash
node --max-old-space-size=4096 index.js
```

**CMD:**
```cmd
node --max-old-space-size=4096 index.js
```

---

## 🔒 Security Best Practices

- Validate inputs with **Joi**  

```js
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const { error } = schema.validate({ email: "user@mail.com", password: "12345678" });
if (error) throw error;
```

- Enable security headers with Helmet  

```js
import express from "express";
import helmet from "helmet";

const app = express();
app.use(helmet());
```

---

## ✅ Testing & Tooling

### Jest Example
```js
test("adds numbers", () => {
  expect(1 + 2).toBe(3);
});
```

### Mocha Example
```js
import { strict as assert } from "assert";
describe("Math", () => {
  it("should add", () => assert.equal(1 + 2, 3));
});
```

### Supertest (API Testing)
```js
import request from "supertest";
import app from "../app.js";

test("GET / should return 200", async () => {
  await request(app).get("/").expect(200);
});
```

---

## 📦 Packaging & Distribution

- Add `exports` in `package.json`  

```json
{
  "name": "my-lib",
  "version": "1.0.0",
  "exports": {
    "./math": "./lib/math.js"
  }
}
```

- Install exact dependencies  

**Bash:**
```bash
npm ci
```

**CMD:**
```cmd
npm ci
```

---

## ⚡ Native Addons & N-API

- Install build tools  

**Bash:**
```bash
npm install -g node-gyp
```

**CMD:**
```cmd
npm install -g node-gyp
```

- Example C++ addon usage  

```cpp
// hello.cc
#include <napi.h>
Napi::String Hello(const Napi::CallbackInfo& info) {
  return Napi::String::New(info.Env(), "Hello from C++");
}
```

---

## 📊 Observability

- Logging with Pino  

```js
import pino from "pino";
const logger = pino();
logger.info("Application started");
```

- Metrics with Prometheus  

```js
import client from "prom-client";
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
```

---

## 🚀 Deployment

- Run app with PM2  

**Bash:**
```bash
pm2 start index.js
```

**CMD:**
```cmd
pm2 start index.js
```

- Docker multi-stage build  

```dockerfile
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18
WORKDIR /app
COPY --from=build /app .
CMD ["node", "index.js"]
```

---

## 🐞 Debugging

- Trace warnings  

```bash
node --trace-warnings index.js
```

```cmd
node --trace-warnings index.js
```

- Debug with `console.trace()`  

```js
function buggy() {
  console.trace("Trace Example");
}
buggy();
```

---

## 🎨 Design Patterns

- **Middleware (Express)**  

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

- **Repository Pattern**  

```js
class UserRepository {
  constructor(model) {
    this.model = model;
  }
  async findByEmail(email) {
    return this.model.findOne({ email });
  }
}
```

- **Circuit Breaker (opossum)**  

```js
import CircuitBreaker from "opossum";

function riskyCall() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve("Success");
    else reject("Failure");
  });
}

const breaker = new CircuitBreaker(riskyCall, { timeout: 3000 });
breaker.fallback(() => "Fallback result");

breaker.fire().then(console.log).catch(console.error);
```

---

## 📂 Example: High-Performance File Upload

```js
import fs from "fs";
import express from "express";
import busboy from "busboy";

const app = express();

app.post("/upload", (req, res) => {
  const bb = busboy({ headers: req.headers });
  bb.on("file", (name, file, info) => {
    const saveTo = `./uploads/${info.filename}`;
    file.pipe(fs.createWriteStream(saveTo));
  });
  bb.on("finish", () => res.end("Upload completed"));
  req.pipe(bb);
});

app.listen(3000);
```

---

## 🔧 Useful CLI Commands

**Bash:**
```bash
node --inspect index.js
node --trace-warnings index.js
npm ci
```

**CMD:**
```cmd
node --inspect index.js
node --trace-warnings index.js
npm ci
```

---

## 📚 Resources

- [Node.js Docs](https://nodejs.org/en/docs/)
- [libuv](https://libuv.org/)
- [Node.js Design Patterns Book](https://www.nodejsdesignpatterns.com/)
