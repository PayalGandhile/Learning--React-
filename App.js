import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h3 id="heading" className="head">
    Namsate React using the JSX
  </h3>
);

//React functional component
// The function that return jsx called the functional component.
// both function are the same 

// const HeadingComponent = () => {
//   return <h1 className="Heading"> This is the functional component with return keyword</h1>
// }


const Title = () => (<h1>let render it in the HeadingComponent2</h1>);
const HeadingComponent2 = () => (
  <div className="container">
    {/* reactCompnet in the component or way to write it*/}
    <Title />
    <Title></Title>
    {Title()};
    <h1 className="Heading"> This is the functional component without return keyword</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />)
// root.render(jsxHeading);
