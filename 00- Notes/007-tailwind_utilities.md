# 🎨 Tailwind CSS Utilities Deep Dive

This guide focuses on **essential Tailwind utilities**:  
**Spacing, Layout, Sizing, Typography, Backgrounds, Borders**, and **Variants** (`group`, `peer`, etc.).  
It also covers **important directives** like `@tailwind`, `@apply`, and `@theme`.

---

## 📏 Spacing

Spacing utilities control **margin (m)** and **padding (p)**.

### Margin (`m`)
```html
<div class="m-4">Margin all sides</div>
<div class="mt-2 mb-4">Top & bottom margin</div>
<div class="mx-8">Horizontal margin</div>
<div class="my-6">Vertical margin</div>
```

### Padding (`p`)
```html
<div class="p-4">Padding all sides</div>
<div class="px-6">Left & right padding</div>
<div class="py-2">Top & bottom padding</div>
```

📌 **Tip:** Values go from `0 → 96` (`p-0` → `p-96`) and also support fractions like `p-1/2`.  

---

## 📐 Layout

Utilities to control how elements are placed.

### Flexbox
```html
<div class="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>
```

- `flex` → enables flexbox  
- `justify-between` → space between children  
- `items-center` → align vertically  

### Grid
```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

- `grid-cols-3` → 3 equal columns  
- `gap-4` → spacing between items  

### Positioning
```html
<div class="relative">
  <div class="absolute top-0 right-0">Top Right</div>
</div>
```

- `relative` → makes container positioning reference  
- `absolute` → child positioned relative to parent  

---

## 📏 Sizing

Control **width and height**.

```html
<div class="w-1/2 h-32 bg-blue-200">50% width, 8rem height</div>
<div class="w-full h-screen bg-gray-200">Full screen section</div>
```

Common units:
- `w-1/2` → 50% width  
- `w-full` → 100% width  
- `h-32` → 8rem height  
- `h-screen` → full viewport height  

---

## ✍️ Typography

Text utilities for **font size, weight, alignment, spacing**.

```html
<p class="text-xl font-bold">Big Bold Text</p>
<p class="text-gray-600 italic">Muted italic text</p>
<p class="uppercase tracking-wide">Spaced Uppercase</p>
<p class="text-center">Centered Text</p>
```

- `text-xl` → font size  
- `font-bold` → bold weight  
- `tracking-wide` → letter spacing  
- `uppercase` → transform text  

---

## 🌈 Backgrounds

Background utilities for **color, gradients, images**.

### Colors
```html
<div class="bg-blue-500 text-white p-4">Blue background</div>
```

### Gradients
```html
<div class="bg-gradient-to-r from-blue-500 to-green-400 p-6 text-white">
  Gradient background
</div>
```

### Background images
```html
<div class="bg-[url('/img/hero.png')] bg-cover bg-center h-64">
  Hero Section
</div>
```

---

## 🔲 Borders

Border utilities for **width, color, radius, style**.

```html
<div class="border border-gray-400 p-4">Default border</div>
<div class="border-2 border-dashed border-blue-500 p-4 rounded-lg">
  Dashed Rounded
</div>
```

- `border` / `border-2` → thickness  
- `border-blue-500` → color  
- `rounded-lg` → radius (corner rounding)  

---

## 👥 Variants: `group`, `peer`, etc.

Variants let you style based on **state of parent or sibling elements**.

### `group`
```html
<div class="group p-6 bg-gray-100 hover:bg-gray-200">
  <p class="text-gray-800 group-hover:text-blue-600">Hover Parent</p>
</div>
```

- `group` applied to parent  
- `group-hover:` used on child  

### `peer`
```html
<label>
  <input type="checkbox" class="peer hidden" />
  <span class="peer-checked:text-green-600">Checked turns green</span>
</label>
```

- `peer` applied to input  
- `peer-checked:` applies styles when input is checked  

###  `Pseudo-class Variants`

  - hover: → when hovered
  - focus: → when focused
  - active: → when clicked
  - disabled: → when disabled

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 disabled:opacity-50">
  Button
</button>
```

### `Responsive Variants`

Tailwind uses mobile-first breakpoints:
  - sm: → ≥640px
  - md: → ≥768px
  - lg: → ≥1024px
  - xl: → ≥1280px
  - 2xl: → ≥1536px

```html
<p class="text-sm md:text-lg lg:text-xl">
  Responsive text
</p>
```

### `🌙 Dark Mode Variants (Tailwind v4.1)`

- In **v4**, `darkMode: "class"` / `"media"` is **removed** from `tailwind.config.js`.
- Instead, define the dark variant in your **CSS** with:

  ```css
  @import "tailwindcss";
  @custom-variant dark (&:where(.dark, .dark *));
  ```
  ```html
  <body class="bg-white dark:bg-gray-900 text-black dark:text-white">
    <h1 class="text-gray-800 dark:text-gray-200">Hello Dark Mode</h1>
  </body>
  ```

### `Accessibility & State Variants`

  -  first: → first child
  - last: → last child
  - odd: / even: → table rows/lists
  - focus-within: → parent when any child is focused
  - aria-checked: → ARIA state-based styling
  - motion-safe: / motion-reduce: → respect motion preferences

```html
<ul>
  <li class="odd:bg-gray-100 even:bg-gray-200">Item</li>
</ul>

<div class="focus-within:ring-2">
  <input type="text" class="outline-none" />
</div>
```

---

## ⚙️ Important Tailwind Directives

### `@tailwind`
Used to include base, components, and utilities in CSS.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `@apply`
Reuse Tailwind classes inside custom CSS.

```css
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700;
}
```

### `@layer`
Extend Tailwind layers (`base`, `components`, `utilities`).

```css
@layer components {
  .card {
    @apply bg-white shadow-md rounded-lg p-6;
  }
}
```

### `@theme` (new in Tailwind v4)
Expose values from Tailwind config into CSS.

```css
.button {
  color: theme('colors.blue.500');
  padding: theme('spacing.4');
}
```
### `@config`

Load an external **JS config file** (for backward compatibility).

```css
@import "tailwindcss";
@config "./tailwind.config.js";
```

### `@custom-variant`

Replaces the old @variants directive.
You can define custom variants and apply them inside CSS.

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.btn {
  @apply bg-white text-black;

  @variant dark {
    @apply bg-black text-white;
  }
}
```

### `Responsive Styles (instead of @responsive)`

Responsive utilities are no longer generated with @responsive.
Instead, use prefixes (sm:, md:, lg:) or CSS @media.

```html
<button class="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base">
  Responsive button
</button>
```
```css
@layer components {
  .btn {
    @apply px-2 py-1 text-sm;
  }

  @media (min-width: theme('screens.md')) {
    .btn {
      @apply px-4 py-2 text-base;
    }
  }
}
```

### `Breakpoints (instead of @screen)`
```css
@screen is removed in v4.1. Use media queries or utility prefixes.

@layer components {
  @media (min-width: theme('screens.md')) {
    .text-md {
      font-size: 20px;
    }
  }
}
```
Or directly in HTML:

```html
<p class="md:text-lg">Responsive text</p>
```
---

# 📱 Tailwind v4.1 Breakpoints Guide

In **Tailwind v4.1**, the `@screen` directive was removed.  
Now, you should use either **utility prefixes** or **media queries** for responsive design.

---

##  1. Utility Prefixes (Recommended)

Tailwind provides **responsive prefixes** built-in (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).

```html
<p class="text-base md:text-lg lg:text-xl">
  Responsive text with prefixes
</p>
```

- `text-base` → default (mobile-first)  
- `md:text-lg` → applies at `min-width: 768px`  
- `lg:text-xl` → applies at `min-width: 1024px`  

👉 This is the **cleanest and most common** approach.

---

##  2. Media Queries (Custom CSS)

If you need custom styles not covered by utilities, use `@media` with Tailwind’s `theme()` tokens.

```css
@layer components {
  @media (min-width: theme('screens.md')) {
    .text-md {
      font-size: 20px;
    }
  }
}
```

This will generate a custom class `.text-md` that only applies at the `md` breakpoint.

---

## 🔑 When to Use Which?

- **Utility prefixes (`md:`, `lg:`)** → Use for **95% of cases** (cleaner, no custom CSS).  
- **Media queries** → Use only when **Tailwind utilities aren’t enough** or you need special components.

---

## 📊 Side-by-Side Example

### Using Utility Prefixes
```html
<p class="text-sm md:text-lg lg:text-xl">
  Responsive Text (Prefix Method)
</p>
```

### Using Media Queries
```css
@layer components {
  @media (min-width: theme('screens.md')) {
    .text-md {
      font-size: 20px;
    }
  }
}
```

```html
<p class="text-md">
  Responsive Text (Media Query Method)
</p>
```

---
## 🎯 Conclusion

- Use **Spacing, Layout, Sizing** utilities for structure.  
- Control **Typography, Backgrounds, Borders** for design.  
- Master **group, peer, and state variants** for interactivity.  
- Leverage **directives** (`@tailwind`, `@apply`, `@layer`, `@theme`) for customization.  

📌 With these, you can build **responsive, scalable, and maintainable UIs** faster with Tailwind CSS.  
