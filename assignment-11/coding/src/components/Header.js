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
    <div className="flex justify-between items-center bg-blue-200">
      <div className="w-52 ">
        <img src={LOGO_URL}></img>
      </div>
      <div>
        <h4 className="p-1 inline bg-amber-300" id="onlineStatus">{onlineStatus ? "online":"offline"}</h4>
        <ul className="m-4 flex ">
          <li className="mr-4"><Link to="/">
            home</Link></li>
          {/* using anchor tag */}
          <li className="mr-4"><a href="/About">
            About us</a></li>
          {/* using Link component provided by react-router-dom */}
          <li className="mr-4"><Link to="/Contacts">Contact us</Link></li>
          <li className="mr-4"><Link to ="Grocery">Grocery</Link></li>
          <li className="mr-4"><Link to ="Grocery">Grocery</Link></li>
          <li className="mr-4">Cart</li>
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
