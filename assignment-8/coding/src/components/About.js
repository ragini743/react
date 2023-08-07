// import {User ,User2} from "./User.js"
import { UserClass ,UserClass2 } from "./UserClass.js"

import React from "react"
// or
import {Component} from "react"
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
            <h1>welcome to about page</h1>
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