import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect} from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom"
{BrowserRouter,Route,Router}
import useOnlineStatus from "../utils/useOnlineStatus"

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  //if no dependency array =>useEffect is called on every render
  //if depedency array is empty =[] =>useEffect is called on initial render (just once)
  //if dependency array is [btnNameReactt]=>called everytime btnNameReact is updated
  useEffect(() =>{console.log("useEffect called")}, [btnNameReact])
const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="div">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <h4 id="onlineStatus">{onlineStatus ? "online":"offline"}</h4>
        <ul>
          <li><Link to="/">
            home</Link></li>
          {/* using anchor tag */}
          <li><a href="/About">
            About us</a></li>
          {/* using Link component provided by react-router-dom */}
          <li><Link to="/Contacts">Contact us</Link></li>
          <li><Link to ="Grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
