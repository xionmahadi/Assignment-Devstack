# 🧱 DevStack Builder - Modern Web Architecture Customizer

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Toastify](https://img.shields.io/badge/React--Toastify-10.0-FF2A6D)](https://github.com/fkhadra/react-toastify)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> An interactive, responsive developer workspace to explore, curate, compare, and assemble production-grade technology stacks with real-time feedback and state persistence.

---

## 📌 Project Overview

**DevStack Builder** is a modern web application built for engineers, indie creators, and teams to design their ideal development stack. Users can browse curated technologies across frontend, backend, database, language, styling, and DevOps categories, review ratings and difficulty tiers, assemble custom stacks in a reactive sidebar panel, and export configuration blueprints instantly.

---

## 🚀 Key Features

1. **Interactive Stack Management & Duplicate Prevention**
   - Seamlessly add technologies to your stack with one click.
   - Dynamic button state updates to `✓ Added to Stack` and disables itself once selected.
   - Intelligent duplicate detection alerts users if they attempt to add the same tool twice.
   - Individual item removal and bulk `Remove All` actions with reactive counter updates.

2. **Real-Time Toast Alerts via React-Toastify**
   - Instant visual feedback for stack operations: success toasts on additions, warning toasts on duplicates, info toasts on removals, and custom alerts on stack clear.

3. **Dynamic Filtering, Search & Persistent Storage**
   - Instant live search across technology names, descriptions, categories, and badges.
   - Category filtering (All, Frontend, Backend, Database, Language, Styling, DevOps, Tools).
   - Custom stack state persists automatically in browser `localStorage`.

4. **Responsive Glassmorphism & Unified Brand Theme**
   - Dark-mode first aesthetics with glassmorphic cards and subtle gradient glows.
   - Centralized theme gradient (`#FF5E3A` → `#FF2A6D` → `#8B5CF6`) defined uniformly across typography, buttons, and badges.
   - Mobile navigation drawer and responsive 3-column / 2-column / 1-column layouts.

---

## 🛠️ Technologies Used

- **Core**: React.js (Hooks, Component Architecture, JSX)
- **Styling**: Tailwind CSS (Custom Gradients, Glassmorphism, Theme Tokens)
- **Build Tool**: Vite (Lightning fast HMR & Rollup production bundle)
- **Notifications**: React-Toastify
- **Icons**: Lucide React + Inline SVG Brand Icons
- **Data Source**: Local JSON Dataset (`/technologies.json`) fetched asynchronously

---

## ⚙️ Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ProgrammingHero1/B14-A05-DevStack.git
   cd B14-A05-DevStack
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 💡 React Questions & Conceptual Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript files.  
JSX is used in React because it makes component templates visual, declarative, and easy to read. Under the hood, build tools (like Vite or Babel) compile JSX into standard `React.createElement()` JavaScript calls, combining markup structure and UI logic seamlessly.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties)**: Read-only inputs passed from a parent component down to a child component. Props are immutable within the receiving component and serve as the primary mechanism for top-down data flow.
- **State**: An internal, mutable memory managed directly inside a component. When state values change via state updater functions (e.g. `useState`), React automatically re-renders the component to update the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook enables functional components to maintain local reactive state. It returns an array containing the current state value and a setter function to update that value and trigger a re-render.  
**In this project, `useState` was used in:**
- `App.jsx` for managing the `technologies` list, `loading` indicator, `error` state, and the user's `selectedStack` array.
- `TechGrid.jsx` for tracking `selectedCategory` filter and the search `searchQuery`.
- `Navbar.jsx` for controlling `mobileMenuOpen` state and sticky scroll status.
- `AuthModals.jsx` for handling form input fields (`email`, `password`, `name`).

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook lets functional components perform side effects such as data fetching, subscribing to events, or synchronizing with browser APIs after rendering.  
We used `useEffect` with an empty dependency array (`[]`) in `App.jsx` to load `/technologies.json` once when the component mounts. Because network fetching is an asynchronous operation, running it inside `useEffect` prevents blocking the initial UI render and prevents infinite fetch loops.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React's Virtual DOM reconciliation algorithm relies on unique `key` props to identify which items in a list have been added, updated, reordered, or removed.  
Without unique keys, React would have to re-render the entire list from scratch upon every change, resulting in degraded performance and potential UI state bugs with form inputs or animations.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering is the practice of rendering different UI elements or components based on specific conditions or state values (using ternary operators `? :`, logical AND `&&`, or if/else checks).  
**Example used in this project (`YourStack.jsx` and `TechCard.jsx`):**
```jsx
{/* Empty state conditional rendering in YourStack.jsx */}
{selectedStack.length === 0 ? (
  <div className="empty-state">
    <p>No technologies selected</p>
  </div>
) : (
  <div className="stack-list">
    {selectedStack.map((tech) => (
      <StackItem key={tech.id} tech={tech} />
    ))}
  </div>
)}
```
We also used conditional rendering on the technology card button to switch between the active **"Add to Stack"** button and the disabled **"✓ Added to Stack"** badge.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child**: Data is passed downwards via **Props** (e.g. `<TechCard tech={item} isSelected={true} />`).
- **Child to Parent**: The parent passes a **callback function** as a prop (e.g. `<TechCard onAddToStack={handleAddToStack} />`). When an event occurs inside the child (such as clicking the button), the child invokes that callback function, passing data arguments back up to the parent component.

---

## 📄 Submission Details
- **Assignment**: A-5 Dev Stack Builder Website
- **Batch**: Programming Hero Batch 14
- **License**: MIT
