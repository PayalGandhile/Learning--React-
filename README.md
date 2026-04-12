# parcel

- **Dev bulid**
- **Local server** - A private, local network environment on a computer used to test and develop websites or apps without hosting them online
- **HRM - Hot Module Replacement** - Exchanges, adds, or removes modules while an application is running without a full page reload
- **File Watching Algorithm** - Written in c++
- **caching** - Faster Builds
- **Image Optimization**
- **Minification**
- **Bundling**
- **Compress**
- **Consistant Hashing**
- **Code Splitting**
- **Differential Bundling** - Support Older Browser
- **Tree Shaking** - Remove unused code
- **HHTPs**
- **Error Handling**
- **Diagonostic** - describe errors and warnings in a Format-independent way.
- **Different Dev and production bundles**

# Babel

- Babel is a JavaScript compiler.
- often more accurately called a transpiler
- **JSX and React Support:** Babel is essential for React development because it converts JSX (JavaScript XML) into standard React.createElement calls that browsers can execute.

# JSX(JavaScript XML)

- HTML-like Syntax
- Uses camelCase for attributes (e.g., className instead of class)
- JSX expressions must have a single root element, often wrapped in a <div> or a React Fragment <>...</> or(...).
- Browsers do not understand JSX; it is compiled into React elements before rendering.

# Functional Component

- React functional component are function that return JSX code or React Element.
- The component name always start with the capital letter.
- Render one component to another called the component composition.
- why to write a component in another component
  - <component_name/>
  - <component_name></component_name>
  - {component_name()}

# Props

- Short form for properties.
- To dynamically send data to a component we use props.
- Passing a prop to a component is like passing an argument to a function

# Config Driven UI.
- It allows developers to create user interface based on a configuration file or data structure
such as JSON file or TypeScript file 
- It change the interface accoording to the configuration file or data structure like (color design etc.)

# key (Reserved Word)
- Unique Key id while using map
- Each item in the list must be uniquely identified
- Note* Never use index as keys in map. It is not recommended.

# React Hook
- It's simply a regular JavaScript function.
- These pre-built functions
- Two crucial hooks we frequently utilize are:
  1. useState()
  2. useEffect()

# useState()
- when we want to used it we have to import as a named import from ‘react’.
- It help to create a **state variable**

# state variable
- state variable return an array with two items. The current state value and setter function to update
- syntax : const [state, setstate] = useState(initialValue);
- **state** is a **state variable** and **setstate** is the **setter function**.
- whenever the state variable update react re-render the componet.

# virtual DOM
- It is the memory javascript representation of the actual DOM used by framework like react and vue to optimize react rendering.
- It like ocject of the actual DOM.

# Reconciliation 
- It is the process React used to update user interface (UI) efficiently.
- something change in UI that known as the Reconciliation.

# diffing algorithm (diff algorithm)
- It core of Reconciliation 
- It compare new virtual DOM with the previous version (old virtual DOM) to identify exactly what changed.
- It compare both old and new virtual DOM and re-render the update.


# why there are two value in the useState
- the first value represent the old virtual DOM and second represent new virtual DOM
- where the diff algorithm work and re-render the update.

# React Fiber
React Fiber is the core reconciliation engine introduced in React 16. It is a complete rewrite of React's internal algorithm designed to improve rendering performance and responsiveness



\*\*

- Header
- -Logo
- -Nav Item
- Body
- -Search
- -ReastaurantContainer
-        -ReastaurantCard
-          -Image
-          - Name of Reastaurant, Star Rating, Cuisine,
- Footer
- -copyright
- -links
- -Address
- -contact
\*
