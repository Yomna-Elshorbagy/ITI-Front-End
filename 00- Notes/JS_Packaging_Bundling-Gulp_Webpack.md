# 🔖 ITI - JS Packaging, Gulp & Bundling (Webpack)

## Introduction

- Modern JavaScript apps use **multiple files** (modules, assets, styles).
- Browsers prefer **optimized single bundles** for better performance.
- We need tools to **package, automate, and bundle** code.

> [!Tip]  
> **Goal:** Transform development files → optimized production files.

---

## JavaScript Packaging

### Why Packaging?

- Split code into smaller, maintainable modules.
- Reuse code across multiple files.
- Load only optimized code into browsers.
- Reduce redundancy and improve performance.

### Problems Without Packaging

- Too many `<script>` tags.
- Dependency ordering issues.
- Larger file sizes, slower load times.
- Harder to maintain.

---

## Task Runners

A **task runner** automates repetitive tasks (minify, optimize, compile).

### Popular Task Runners
- **Gulp** (stream-based, very popular).
- **Grunt** (older, configuration-heavy).
- **npm scripts** (lightweight alternative).

---

## Gulp

- A **task runner** built on Node.js.
- Uses a **stream-based pipeline**.
- Automates:
  - Minifying CSS/JS
  - Optimizing images
  - Compiling Sass/Less
  - Live-reload with browsersync

### Example Workflow

```js
import { src, dest, watch, series } from "gulp";
import terser from "gulp-terser";
import cleanCSS from "gulp-clean-css";
import optimizeImages from "gulp-optimize-images";

function jsTask() {
  return src("src/js/*.js")
    .pipe(terser())           //==> minify JS
    .pipe(dest("dist/js"));
}

function cssTask() {
  return src("src/css/*.css")
    .pipe(cleanCSS())         //==> minify CSS
    .pipe(dest("dist/css"));
}

function imgTask() {
  return src("src/images/*")
    .pipe(optimizeImages())   //==> optimize images
    .pipe(dest("dist/images"));
}

export default series(jsTask, cssTask, imgTask);
```

> [!Note]  
> Run `npx gulp` to execute tasks.

---

## Bundling

- **Definition:** Combining multiple files (JS, CSS, assets) into fewer optimized files.
- **Purpose:** Reduce HTTP requests + ensure dependencies are resolved.
- **Key Features:**
  - Module resolution
  - Minification
  - Code splitting
  - Tree shaking (remove unused code)

---

## Webpack

- A **module bundler** for modern JS applications.
- Handles JS, CSS, images, fonts, etc.
- Highly configurable with loaders & plugins.

### Core Concepts

1. **Entry** – Starting point of the app.
2. **Output** – Where bundled files are saved.
3. **Loaders** – Transform files (e.g., Sass → CSS).
4. **Plugins** – Extend Webpack (e.g., HTML generation, minification).
5. **Dev Server** – Local server with hot reloading.

### Example `webpack.config.js`

```js
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
};
```

### Advantages of Webpack

- Supports ES6, JSX, TypeScript.
- Tree-shaking (removes unused code).
- Code splitting (lazy loading).
- Plugins ecosystem.

---

## Gulp vs Webpack

| Feature           | Gulp (Task Runner)         | Webpack (Bundler)            |
|-------------------|----------------------------|-------------------------------|
| Primary Purpose   | Automates tasks            | Bundles modules               |
| Focus             | Build process              | Dependency management         |
| Handles           | Any file type              | Mainly JS + assets            |
| Best For          | Simple automation          | Complex apps (React, Angular) |

> [!Info]  
> You can use **Gulp + Webpack together**: Gulp automates tasks, Webpack bundles modules.

---

## Conclusion

- **Packaging** makes JS apps modular and maintainable.
- **Gulp** automates repetitive tasks.
- **Bundlers (Webpack)** solve dependency + optimization issues.
- Both tools can complement each other in real-world projects.

---

