import React from "react" ;
import ReactDOM from "react-dom" ;

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1"),
        React.createElement("h2",{},"I am h2") , 
      ]),
      React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),

      ]),
]);

console.log(parent)
let root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
