import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect ,useContext} from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom"
{BrowserRouter,Route,Router}
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  
  useEffect(() =>{console.log("useEffect called")}, [btnNameReact])
const onlineStatus = useOnlineStatus()

const {loggedInUser} = useContext(UserContext);
console.log("loggedInUser",loggedInUser);
// subscribing to the store using a selector
const cartItems = useSelector((store) => store.cart.items)
;
console.log("cartItems",cartItems)
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
          <li className="mr-4">Cart ({cartItems.length})</li>
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
          <li className="px-2 bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
