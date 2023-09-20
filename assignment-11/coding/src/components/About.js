import React from "react";
import UserContext from "../utils/UserContext.js";

import {Component} from "react";
import { UserClass , UserClass2 } from "./UserClass.js";
// import {User ,User2} from "./User.js"
// or
// const About=()=>{
//     return (
//         <div>
//             <h1>welcome to about page</h1>
//             <User />
//             <User2 name={"ravi"} 
//             location={"MP"}
//             contact={"@raginiravi"}
//             />
            
//             <UserClass />
//             <UserClass2 name={"ravi"} location={"MP"}/>
//         </div>
//     )
    
// }
// export default About

// using class component
class About extends Component{
constructor(props){
    super(props)
    console.log("parent constructor")
}


componentDidMount(){
    // console.log("parent componentDidMount")
   
}
render(){
    console.log("parent render")
     return (
        <div>
            <h1>welcome to about class component page</h1>
            <div>loggedInUser <UserContext.Consumer>{({loggedInUser}) =><h1>{loggedInUser}</h1>}</UserContext.Consumer></div>
            {/* <User />
            <User2 name={"ravi"} 
            location={"MP"}
            contact={"@raginiravi"}
            /> */}
            
            <UserClass />
            <UserClass2 name={"ravi"} location={"MP"}/>
            {/* <UserClass />
            <UserClass2 name={"rkv"} location={"MP"}/> */}
        </div>
    )
}
}

export default About