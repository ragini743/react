import React from "react"
import ReactDOM from "react-dom/client"
//with React.createElement
const header=React.createElement("header",{},
[
    React.createElement("h1",{},"I am h1"),
React.createElement("h2",{},"I am h2"),
React.createElement("h3",{},"I am h3")
]
)

let Title=ReactDOM.createRoot(document.querySelector(".Title"))
Title.render(header)

//with JSX
let heading= (<h1 id="heading1">hey ram</h1>)

const JSXheader = (
<header>
<h1>hello h1</h1>
<h2>hello h2</h2>
<h3>hello h3</h3>
</header>
);

Title.render(JSXheader)


//functional component with jsx

const TitleComponent= () => (
    <header>
        {heading}
        {JSXheader}
        <h1 id="header1">hey h1</h1>
        <h2 id="header2">hey h2</h2>
        <h3 id="header3">hey h3</h3>
    </header>
)

Title.render(<TitleComponent/>)

//composition of component

const Header1=() => (<h1>hey h1</h1>)
const Header2=() => <h2>hey h2</h2>
const Header3=() => <h3>hey h3</h3>
const TitleComponent2 =() =>(
    <React.Fragment>
        {<TitleComponent></TitleComponent>}
      <TitleComponent />
    </React.Fragment>
)

Title.render(<TitleComponent2/>)
