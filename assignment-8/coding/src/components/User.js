import Contact from "./Contacts";
import {useState} from "react";
export const User = () =>{
    const [count,setCount]= useState(0)
    const [count2 ] = useState(1)
    return (
   <div className="user-card">
    <h1>{count}</h1>
    <button onClick={()=>{
        setCount(count+1)
    }}>click me</button>
    <h1>{count2}</h1>
    <h2>name: ragini</h2>
    <h3>location : UP</h3>
    <h4>Contact:@raginiv</h4>
   </div>
    );
};
// how to use props in functional component
export const User2 = (props) =>{
    const {contact}=props
// {location}= props
    return (
   <div className="user-card">
    <h2>name: {props.name}</h2>
    <h3>location : {props.location}</h3>
    <h4>Contact:{contact}</h4>
   </div>
    );
};




