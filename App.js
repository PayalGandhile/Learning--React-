// **************Create an Element h1 Tag inside React**************** 
const Heading = React.createElement("h1",
    { id: "heading" },
    "Hello React"
);

console.log(Heading); // it is an object 
// const root = ReactDOM.createRoot(document.getElementById("root"));

/*the render function are used the to take this object and make it the
 heading tag and put inside the the dom.
*/
// root.render(Heading);



// ****************************Create nested React Elements************

/**
 * how make a nested structure usign the react
 * 
 * the React.createElement() take three argument 
    first is tag name second is attribute and third one is the data should be inside in that tag
    so  when we create a nested dom so we want to get tag inside the tag so 
    to create the nested dom so we take third argument of createElement() as an another createElement()
 * 
 * 
 * 
 * like
 * <div id="parent">
        <div id="child">
            <h1>I am h1 Tag</h1>
        </div>
    </div>
 */
/*when we add the sibling in tag like
 <div id="child">
        <h1>I am h1 Tag</h1>
        <h>I am h2 Tag</h2>
</div>
so we create an array of third agrument 

*/

// const parent = React.createElement("div",
//     { id: "parent" },
//     React.createElement("div",
//         { id: "child" }, [React.createElement("h1", {}, "I am h1 Tag"),
//         React.createElement("h2", {}, "I am h2 Tag")]
//     ),
// )



/**
 * like
 * <div id="parent">
        <div id="child">
            <h1>I am h1 Tag</h1>
            <h>I am h2 Tag</h2>
        </div>
         <div id="child2">
            <h1>I am h1 Tag</h1>
            <h>I am h2 Tag</h2>
        </div>
    </div>

 */



const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, " I am h1 Tag"),
        React.createElement("h2", {}, "I am h2 Tag ")
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am h1 Tag "),
        React.createElement("h2", {}, "I am h2 Tag ")
        ])
])
console.log(parent);// it is an object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);