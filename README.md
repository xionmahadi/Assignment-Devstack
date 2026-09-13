# 🧱 Dev Stack
---
A responsive web app where developers can explore technologies and build their own personal tech stack.

📖 **About The Project**

Dev Stack is a React-based web application for exploring different technologies.
Users can browse technologies from different categories like frontend, backend, database, programming language, styling, and DevOps.
Each technology card shows useful information such as:

- Technology name
- Icon
- Description
- Category
- Difficulty level
- Star rating
- Badge

Users can also add technologies to their own stack. They can remove a single item or remove everything at once.

The app also shows toast messages when an item is added, removed, or added more than once.

---

🛠️ **Technologies Used**

React.js - Used to build the user interface with reusable components.
Vite - Used for a fast development server and production build.
JavaScript ES6+ - Used for the main application logic.
Tailwind CSS - Used for styling, layout, spacing, and responsive design.
React-Toastify - Used to show messages when users add or remove technologies.
JSON - Used to store the technology data locally in src/data/technologies.json.

---

# 🚀 Getting Started

**1. Clone the Repository**

```
git clone https://github.com/ProgrammingHero1/B14-A05-DevStack.git
```

**2. Install Dependencies**

```
npm install
```

**3. Run the Project**

```
npm run dev
```
The project will start on the local development server.

4. Build for Production

```
npm run build
```
---

# ✨ Main Features

**1. Browse Technology Cards**

The app shows 12+ technology cards in a responsive layout.

- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Each card shows the technology icon and name
- Shows category and difficulty
- Shows a star rating
- Shows a short description
- Has an add button

**2. Your Personal Stack**

There is a Your Stack sidebar next to the technology cards.

It shows:

- Total selected technologies
- Selected technology name
- Technology icon
- Technology category
- Remove button

When no technology is selected, an empty state is shown.

The stack count also updates automatically when technologies are added or removed.

**3. Add and Remove Technologies**

Users can add any technology to their stack by clicking Add to Stack.

After adding an item:

- The button changes to ✓ Added to Stack
- The button becomes disabled
- The technology appears in the sidebar
- The app also checks for duplicate items.

If the same technology is already in the stack, another copy will not be added.
Users can remove an item by clicking the ✕ button.
There is also a Remove All button to clear the full stack.
Toast messages are shown for these actions.

---

# 💡 React Conceptual Questions & Answers

**1. What is JSX, and why is it used in React?**

Answer:
JSX means JavaScript XML. It is like html but it is used in javascript.

For example:

```javascript
<h1>Dev Stack</h1>
```

JSX makes React code easier to read and write.

**2. What is the difference between props and state?**

Answer:
Props are used to send data from a parent component to a child component.Here, technology is passed to the TechnologyCard component as a prop.State is data that a component needs to remember and update.

For example:

```javascript
const [stack, setStack] = useState([]);
```

Here, stack stores the selected technologies.

When the state changes, React renders the updated UI.

**3. What does the useState hook do, and where did you use it in this project?**

Answer:
useState lets us add state to a React component.It gives us two things: The current state value & A function to update the state

For example:

```javascript
const [stack, setStack] = useState([]);
```

In this project, state is used for things like:

- Storing the technology list
- Tracking the loading state
- Storing the user's selected stack
- Opening and closing the mobile menu

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**

Answer:
useEffect is used when a component needs to do something outside the normal rendering process.

For example, it can be used for:

- Fetching data
- Working with browser APIs
- Setting up timers
- Connecting to external systems

In this project, useEffect is used to load the technology data from the JSON file.

For example:

```javascript
useEffect(() => {
  fetch("/data/technologies.json")
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```

The empty [] means the Effect does not depend on changing values, so it does not run again because of normal state or prop changes.
React also supports using Effects for fetching data.

**5. Why does every item in a .map() list need a unique key prop?**

Answer:
When we use .map() to create a list of React elements, each item needs a unique key.

For example:

```javascript
{technologies.map((tech) => (
  <TechnologyCard key={tech.id} technology={tech} />
))}
```

The key helps React know which item is which.
This is useful when an item is added, removed, or changed.
In this project, tech.id is used as the unique key.

**6. What is conditional rendering? Show one place you used it.**

Answer:
Conditional rendering means showing different UI based on a condition.

For example, in the stack sidebar:

```javascript
{count === 0 ? (
  <div className="empty-state">
    Your stack is empty.
  </div>
) : (
  <div>
    {stack.map((item) => (
      <StackItem
        key={item.id}
        item={item}
        onRemove={onRemove}
      />
    ))}

    <button onClick={onRemoveAll}>
      Remove All
    </button>
  </div>
)}
```

Here, we check the value of count.
If count is 0, we show the empty message.
If there are technologies in the stack, we show the selected items and the Remove All button.

**7. How do you pass data from a parent component to a child, and how does a child send something back to the parent?**

Answer:
A parent sends data to a child using props.

For example:

```javascript
<TechnologyCard
  technology={tech}
  isSelected={isSelected}
/>
```

Here, the parent sends technology and isSelected to the child.A child can send information back by using a callback function passed from the parent.

For example:

```javascript
<TechnologyCard
  technology={tech}
  onAddToStack={handleAddToStack}
/>
```

Inside the child component, we can call:

```javascript
onAddToStack(technology);
```

This calls the function from the parent and sends the technology back to it.
So, the basic idea is:

- Parent → Child: Props
- Child → Parent: Callback function

This keeps the project easier to read and manage.

📄 **License & Attribution**
This project was built based on the DevStack Figma Design and the given assignment requirements.
Made with React, Tailwind CSS, and JavaScript.