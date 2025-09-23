# 🔖 ITI - Node.js - Deep Dive & Advanced Patterns

## Introduction

- **Node.js** is a JavaScript runtime built on **Chrome's V8 engine**.
- It allows running JavaScript on the server and building scalable network applications.
- Node.js is **event-driven**, **non-blocking I/O**, designed for high concurrency.

> [!Tip]  
> Great for I/O-heavy applications (APIs, proxies, realtime apps). Use CPU-heavy tasks carefully (offload to workers).

---

## Architecture Overview

- **V8**: JS engine that compiles JS to machine code.
- **libuv**: C library that provides the event loop and async I/O (thread pool for certain ops).
- **Node API**: Native bindings that connect JS to OS features (filesystem, network, threads).
- **Event Loop**: Core mechanism that drives asynchronous callbacks and job queues.

### Node Process Layers

1. JavaScript (your code + npm modules)
2. C++ bindings (Node internals)
3. libuv (event loop, threadpool)
4. OS

---

## The Event Loop (detailed)

Understanding the event loop is crucial for performance and correctness.

Phases (simplified):

1. **Timers**: `setTimeout`, `setInterval` callbacks.
2. **Pending Callbacks**: I/O callbacks deferred to next loop.
3. **Poll**: Retrieve new I/O events; execute I/O callbacks.
4. **Check**: `setImmediate` callbacks run here.
5. **Close callbacks**: `socket.on('close')` etc.
6. **Microtask queue**: Promises (`.then`) and `process.nextTick` run _before_ next phase continues.
   - `process.nextTick` runs before promise microtasks (special queue) — be cautious: starving the event loop is possible.

> [!Note]  
> Long-running synchronous code blocks the event loop → prevents processing pending events. Prefer async APIs.

---

## Modules: CommonJS vs ESM

### CommonJS (require/module.exports)

```js
const fs = require("fs");
module.exports = { add };
```

- Synchronous loading.
- Default in many Node versions historically.

### ESM (import/export)

```js
import fs from "fs";
export function add() {}
```

- Async loading, static analysis friendly.
- Use `"type": "module"` in `package.json` or `.mjs` extension.

> [!Tip] Prefer ESM for modern code; interop pitfalls exist (default exports, **dirname, **filename).

---

## Asynchrony Patterns

### Callbacks

```js
fs.readFile("file.txt", (err, data) => {});
```

- Error-first callbacks are common in Node APIs.

### Promises & async/await

```js
async function read() {
  const data = await fs.promises.readFile("file.txt", "utf8");
}
```

- Easier control flow and error handling.

### Streams (backpressure & high-performance I/O)

- **Readable**, **Writable**, **Duplex**, **Transform** streams.
- Use streams for large files to avoid buffering whole content in memory.

```js
const stream = fs.createReadStream("large.bin");
stream.pipe(process.stdout);
```

- Handle `error`, `end`, `data`, and `drain` events for robust flow control.

### Buffers

- `Buffer` is Node's binary data container (useful for TCP, file I/O).
- Node.js is designed for networking & I/O → lots of raw binary data.
- Buffers make it efficient to:
    - Manipulate binary protocols.
    - Process images, audio, or video.
    - Handle streaming data without converting everything to strings.
---

## Advanced I/O: TCP, HTTP, and Clustering

### TCP & net module

```js
import net from "net";
const server = net.createServer((socket) => {
  socket.on("data", (chunk) => {});
});
server.listen(3000);
```

### HTTP/2 and HTTP/1.1

- Use `http2` for multiplexing and performance benefits (ALPN, TLS integration).

### Clustering & scaling across CPU cores

- `cluster` module or external process managers (PM2) to utilize multiple cores.
- Use `worker_threads` for heavy CPU-bound tasks (better isolation than cluster messaging).

---

## Worker Threads vs Child Processes

- **child_process**: separate OS process, heavy but isolated, communicates via stdio or IPC.
  - `fork` useful for running Node scripts with IPC channels.
- **worker_threads**: lightweight threads within same process sharing memory (ArrayBuffer, SharedArrayBuffer).
  - Use for CPU-intensive tasks without blocking event loop.

### Worker Threads

```js
import { Worker } from "worker_threads";

const worker = new Worker("./worker.js");
worker.on("message", (msg) => console.log(msg));
```

### Child Processes

```js
import { fork } from "child_process";
const child = fork("child.js");
child.on("message", (msg) => console.log(msg));
```

> [!Note] Worker threads are preferable when you need shared-memory and lower overhead than full processes.

---

## Performance & Profiling

### Tools

- `node --inspect` + Chrome DevTools for CPU and heap profiling.
- `clinic` (clinic.js) for Flame graphs and bottleneck analysis.
- `0x` for flamegraphs.

### Tips

- Avoid frequent synchronous filesystem or crypto calls.
- Use streaming APIs for large data sets.
- Implement caching (in-memory LRU or Redis) for expensive ops.
- Use HTTP keep-alive and gzip/brotli compression at the server or reverse proxy layer.
- Use `res.flushHeaders()` and `Transfer-Encoding: chunked` for streaming responses.

---

## Memory Management

- V8 garbage collection tunables: `--max-old-space-size=4096` to increase heap.
- Monitor with `process.memoryUsage()` and heap snapshots.
- Beware of closures holding large objects or forgotten timers/references causing leaks.

---

## Security Best Practices

- Validate and sanitize all inputs. Use libraries like `joi` or `zod` for validation.
- Avoid `eval`, `Function()` and dynamic code execution.
- Use helmet (for Express) to set secure HTTP headers.
- Rate-limit endpoints to prevent abuse (e.g., `express-rate-limit`).
- Secure dependencies: run `npm audit`, use `npm audit fix`, use Snyk or Dependabot.
- Use TLS/HTTPS in production; terminate TLS at load balancer if needed.
- Manage secrets with environment variables or secret managers (avoid committing `.env`).

---

## Testing & Tooling

### Testing frameworks

- **Jest**: Full-featured, great for unit & integration tests.
- **Mocha + Chai**: Flexible test runner + assertion library.
- **AVA**: Concurrency-focused testing.

### Mocking & Integration

- Use `nock` for HTTP mocking.
- Use `sinon` for spies, stubs, mocks.
- For database tests, prefer isolated test DBs or in-memory databases (sqlite, mongodb-memory-server).

### Linting & Formatting

- ESLint with recommended rules and Prettier for consistent formatting.
- Use Husky + lint-staged to run linters on pre-commit hooks.

---

## Packaging & Distribution

- `package.json` fields: `main`, `exports`, `bin`, `files`, `engines`.
- Use `npm pack` to preview published content.
- Semantic Versioning (semver) for releases. Use `semantic-release` for automated versioning.

---

## Native Addons & N-API

- Native addons (C/C++) via **N-API** or older `nan` API to implement performance-critical or system-level features.
- Use `node-gyp` to build native modules; ensure correct toolchains across OSs.
- Prefer N-API for stable ABI and less maintenance across Node versions.

---

## Observability & Production Readiness

- Logging: use structured logs (JSON) with pino or bunyan. Avoid `console.log` in high-volume apps.
- Tracing: integrate OpenTelemetry for distributed tracing.
- Metrics: export Prometheus metrics using prom-client.
- Health checks & readiness probes for Kubernetes deployment.
- Graceful shutdown: listen to `SIGINT`/`SIGTERM`, stop accepting new requests, and wait for connections to close.

---

## Deployment Patterns

- Use containers (Docker) with multi-stage builds for smaller images.
- Use process managers: `systemd`, `pm2`, or Kubernetes to ensure auto-restart and scaling.
- CI/CD: lint → test → build → deploy. Use GitHub Actions, GitLab CI, or Jenkins pipelines.
- Static analysis & dependency scanning in CI.

---

## Debugging Recipes

- `node --enable-source-maps --inspect-brk index.js` to debug with source maps.
- `console.trace()` for stack traces.
- Use `try/catch` with meaningful errors and avoid swallowing errors silently.
- Use `domain`? Avoid — deprecated. Prefer structured error handling and per-request contexts.

---

## Common Design Patterns

- **Middleware** (Express/Koa) for composable request processing.
- **Repository pattern** for data-layer abstraction.
- **Factory pattern** for configurable components (e.g. DB connections).
- **Circuit Breaker** (with `opossum`) for resilient external calls.
- **Bulkhead & Rate limiter** to protect resources.

---

## Example: High-Performance File Upload Handler (stream-based)

```js
import fs from "fs";
import express from "express";
import busboy from "busboy";

const app = express();

app.post("/upload", (req, res) => {
  const bb = busboy({ headers: req.headers });
  bb.on("file", (name, file, info) => {
    const saveTo = `./uploads/${info.filename}`;
    const writeStream = fs.createWriteStream(saveTo);
    file.pipe(writeStream);
    writeStream.on("close", () => {
      console.log("file saved", saveTo);
    });
  });
  bb.on("finish", () => res.end("ok"));
  req.pipe(bb);
});

app.listen(3000);
```

---

## Useful CLI Commands & Flags

- `node --inspect index.js` — enable inspector for debugging.
- `node --trace-warnings app.js` — show warnings stack traces.
- `node --max-old-space-size=2048 app.js` — increase heap size.
- `npm ci` — clean install using package-lock.json for CI.

---

## Resources

- Official docs: https://nodejs.org/en/docs/
- libuv: https://libuv.org/
- V8 blog & docs for optimization tips.
- `Node.js Design Patterns` Searching-read for architecture patterns.

---

## Summary

- Node.js is powerful for scalable network applications when used with non-blocking design.
- Focus on async patterns, proper error handling, observability, and security.
- Use profiling tools to find bottlenecks; scale with clustering or worker threads for CPU-bound operations.

---
