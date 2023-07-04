
import {LOGO_URL} from "../utils/constants"
import{ useState } from "react";

export const Header=() =>{
   const[btnNameReact, setBtnNameReact]=useState("Login")
    return (
        <div className="header">
            <div className="div">
                <img className="logo"src={LOGO_URL}>

                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login"onClick ={()=>{
                    btnNameReact==="Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login")
                    }}>
                        {btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

