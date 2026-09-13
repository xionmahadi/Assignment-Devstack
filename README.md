# 🧱 Dev Stack

> A responsive technology discovery and personal technology stack builder application built with React, Vite, and Tailwind CSS.

---

## 📖 Project Description

**Dev Stack** is an interactive web application that allows developers to explore different frontend, backend, database, language, styling, and DevOps technologies. Users can view detailed information for each technology (ratings, difficulty levels, descriptions, category chips, and badges), add technologies to their personal stack sidebar, prevent duplicate additions, and easily remove individual items or clear the entire stack with real-time feedback powered by React-Toastify.

---

## 🛠️ Technologies Used

- **React.js**: JavaScript library for building user interfaces with reusable components and reactive state.
- **Vite**: Modern frontend build tool providing fast local development and optimized production bundles.
- **JavaScript (ES6+)**: Core programming language utilizing modern syntax like arrow functions, destructuring, and array methods.
- **Tailwind CSS**: Utility-first CSS framework for layout, spacing, and styling matching the Figma design.
- **React-Toastify**: Notification library for real-time user feedback on add, remove, and duplicate actions.
- **JSON**: Local data storage for technology items (`src/data/technologies.json`).

---

## ✨ Main Features

1. **Browse Technology Cards**:
   - Explore 12+ curated technologies displayed in a responsive grid (3 columns on desktop, 2 columns on tablet, 1 column on mobile).
   - Each card displays its icon, badge, name, description, category chip, difficulty level, star rating, and action button.

2. **Personal Technology Stack Sidebar**:
   - Interactive "Your Stack" sidebar panel placed beside the technology grid.
   - Shows the selected technology count dynamically (e.g., `2 Technology Selected`).
   - Displays a clean dashed empty state when no technologies are selected.
   - Lists selected technologies in a 1-column layout with their icon, name, category, and individual remove (✕) button.

3. **Add & Remove with Duplicate Prevention & Toast Notifications**:
   - Clicking "Add to Stack" adds the technology and disables the card button with a `✓ Added to Stack` label.
   - Prevents duplicate items from being added, showing a warning toast if attempted.
   - Clicking the ✕ button removes that specific technology and re-enables its "Add to Stack" button.
   - Includes a "Remove All" button to clear the entire stack at once with instant toast alerts.

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ProgrammingHero1/B14-A05-DevStack.git
   cd B14-A05-DevStack
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 💡 React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It is a syntax extension that allows us to write HTML-like code inside JavaScript.  
JSX is used in React because it makes creating and visualizing UI components much easier and cleaner. Instead of using complex `React.createElement()` functions, JSX lets us write declarative markup alongside our component logic in one place.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (short for properties)**: Data passed from a parent component down to a child component. Props are read-only (immutable) for the child component receiving them.
- **State**: Data that is managed internally within a component using hooks like `useState`. Unlike props, state is mutable and when state changes, React automatically re-renders the component to update the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components to create, hold, and update reactive state variables. It returns an array with two elements: the current state value and a setter function to update that value.  
**In this project, `useState` was used in `App.jsx` to:**
- Store the list of technologies (`technologies`) loaded from JSON.
- Track the loading state (`loading`) while data is being fetched.
- Maintain the user's selected stack (`stack`) for adding and removing technologies.
- Control the mobile menu open/closed state (`mobileMenuOpen`) inside `Navbar.jsx`.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook is used to perform **side effects** in React components, such as fetching data from an external file or API, setting up timers, or manually modifying the DOM.  
We needed `useEffect` to fetch `technologies.json` once when the application first loads (mounts). By using `useEffect` with an empty dependency array `[]`, the fetch call runs only once when the page loads, preventing infinite fetching loops and keeping the component pure.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React uses the `key` prop to identify which items in a list have changed, been added, or been removed.  
Having unique keys allows React's Virtual DOM to efficiently update and re-render only the specific list items that changed, rather than re-rendering the entire list. In this project, we used `tech.id` as the unique key.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering means displaying different UI elements or components based on certain conditions (like checking if an array is empty or if data is still loading).  
**Example from `StackSidebar.jsx`:**
```jsx
{count === 0 ? (
  <div className="empty-state">
    Your stack is empty.
  </div>
) : (
  <div>
    {stack.map((item) => (
      <StackItem key={item.id} item={item} onRemove={onRemove} />
    ))}
    <button onClick={onRemoveAll}>Remove All</button>
  </div>
)}
```
Here, if `count === 0`, we render the dashed empty stack message. If items exist, we render the list of selected technologies and the "Remove All" button.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child**: The parent passes data downwards through **Props**. For example, `<TechnologyCard technology={tech} isSelected={isSelected} />` passes the technology data and selected state to the card.
- **Child to Parent**: The parent passes a **callback function** as a prop to the child (e.g. `onAddToStack={handleAddToStack}`). When the user clicks the button inside the child component, the child executes that function and sends data back up to the parent as arguments (e.g. `onAddToStack(technology)`).

---

## 📄 License & Attribution
- Built based on the **DevStack Figma Design** & Assignment specifications.
