import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom"

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render"
  )
  //if no dependency array =>useEffect is called on every render
  //if depedency array is empty =[] =>useEffect is called on initial render (just once)
  //if dependency array is [btnNameReactt]=>called everytime btnNameReact is updated
  useEffect(() =>{console.log("useEffect called")}, [btnNameReact])



  return (
    <div className="header">
      <div className="div">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">home</Link></li>
          {/* using anchor tag */}
          <li><a href="/About">About us</a></li>
          {/* using Link component provided by react-router-dom */}
          <li><Link to="/About">Contact us</Link></li>
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
