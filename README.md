# Dynamic Feature Guard & Maintenance Router

A production-ready client-side routing and gatekeeper system built with React and Vite. This project simulates an enterprise-level maintenance mode interception driven securely by local environment variables (`.env`), featuring smooth, responsive vector animations from Storyset.

## Key Engineering Highlights

- **Modular Folder Architecture:** Zero clutter. Separates global app state, routing engines, and feature modules (`features/maintenance`) using scalable, enterprise-level directory patterns.
- **Environment-Driven Control Panel:** Implements `import.meta.env` flags to toggle application access instantly without touching or redeploying core codebase files.
- **Global Design Token System:** Built using native CSS Custom Properties (`:root`) to handle unified professional color palettes, responsive flexbox positioning, and typography scales across individual feature modules.
- **Semantic Web Layouts:** Designed strictly with structural HTML5 tags (`<main>`, `<section>`) for optimal web accessibility (a11y) and browser rendering performance.

## System Architecture

```text
src/
├── assets/          # Scalable vector graphics (SVGs) and media layouts
├── components/      # Global, highly reusable UI presentation blocks
├── features/        # Independent app contexts isolated by business logic
│   └── maintenance/ # Local maintenance view components and isolated styles
├── routes/          # Central Gatekeeper Routing Engine (AppRouter.jsx)
├── index.css        # Root foundational resets and global design tokens
└── main.jsx         # Absolute application mounting entry point
```

## 🛠️ Local Installation & Development

Follow these steps to run this project locally on your machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com
   ```

2. **Navigate into the project directory:**

   ```bash
   cd feature-flag-guard
   ```

3. **Install modern package configurations:**

   ```bash
   npm install
   ```

4. **Configure your Local Control Switch:**
   Create a `.env` file in the absolute root folder and paste the control key:

   ```env
   VITE_PORTAL_MAINTENANCE_MODE=true
   ```

   _(Toggle between `true` and `false` to test the dynamic gatekeeper router behavior live in the browser)._

5. **Boot up the local development engine:**
   ```bash
   npm run dev
   ```

## What I Mastered Building This Project

As a junior web developer, building this project independently helped me gain a deep, practical understanding of:

1. **The Modern JSX Transform:** Moving from Create React App (CRA) to Vite, and mastering how modern bundlers compile code without needing bloated, unused runtime imports.
2. **Deterministic Conditional Rendering:** Using JavaScript ternary operators and React Fragments safely to manage rendering states without breaking the DOM tree or exposing private data blocks.
3. **Debugging the Build Pipeline:** Independently resolving pathing anomalies, configuration overrides, and tracking file extensions during complex asset bundling sequences.
