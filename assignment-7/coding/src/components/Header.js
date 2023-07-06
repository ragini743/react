import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect} from "react";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render"
  )
  //if no dependency array =>useEffect is called on every render
  //if depedency array is empty =[] =>useEffect is called on initial render (just once)
  //if dependency array is [btnNameReactt]=>called everytime btnNameReact is updated
  useEffect(() =>{console.log("useEffect caalled")}, [btnNameReact])



  return (
    <div className="header">
      <div className="div">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>About us</li>
          <li>Contact us</li>
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
