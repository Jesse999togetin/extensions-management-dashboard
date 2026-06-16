# Extensions Management Dashboard

A clean, high-performance frontend dashboard designed to monitor, filter, and manage browser extensions. This project dynamically renders data from a local JSON configuration file and updates the DOM interface in real-time based on user interaction.

## 🚀 Live Demo
[Insert your GitHub Pages or Vercel deployment link here]

---

## ✨ Features

* **Dynamic Card Generation:** Automatically parses asset configuration data from a `data.json` file to manufacture HTML component nodes in memory.
* **State-Driven Filtering:** Implements a global `currentFilter` state variable to conditionally show or hide cards matching active, inactive, or universal visibility criteria.
* **Responsive Flexbox Layout:** Utilizes a mobile-first, fluid CSS Flexbox design for optimized alignment and structural spacing.
* **Hardware-Accelerated UI Polish:** Leverages CSS `transform` and `transition` layers for smooth micro-interactions running at 60fps without triggering expensive browser layout reflows.
* **Dynamic Theme Switcher:** Features an integrated light/dark mode configuration that flips global utility tokens and updates asset vectors on the fly.

---

## 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic Architecture)
* **Styling:** CSS3 (Custom Properties / Flexbox Grid Layer)
* **Logic:** Vanilla JavaScript (ES6+ Architecture, DOM Manipulation)
* **Data:** Local JSON Array Matrix

---

## 💡 How It Works (Technical Deep Dive)

### 1. The Rendering Pipeline
The application triggers an asynchronous `fetch()` operation targeting the local `data.json` file immediately upon page load. The system loops through the payload array via a `forEach` iterator, executing the following pipeline for each entity:
1. Dynamically constructs a `div` wrapper node.
2. Formulates custom string attributes (`data-status`) to bind local state variables.
3. Appends localized event listener tripwires (e.g., individual card deletion triggers).
4. Injects template literal string structures containing targeted layout tokens before appending the node to the live DOM tree.

### 2. The Filter Engine
The core filtering mechanism is driven by conditional routing statements. The global tracking variable checks the element attributes against active parameters:

```javascript
if (currentFilter === 'all') {
    card.style.display = 'flex';
} else if (cardStatus === currentFilter) {
    card.style.display = 'flex';
} else {
    card.style.display = 'none';
}