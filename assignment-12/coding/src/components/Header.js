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
    <div className="flex flex-wrap md:justify-between md:w-full md:items-center fixed top-0 bg-white z-30 pb-5 ">
      <div className="w-20 order-1 md:w-52 ">
        <img src={LOGO_URL}></img>
      </div>
      <div className="order-2 relative">
        <h4 className="fixed top-0 left-24 md:left-[40rem]  p-1 inline bg-amber-300" id="onlineStatus">{onlineStatus ? "online":"offline"}</h4>
        <ul className="md:m-4 flex flex-wrap ">
          <li className="mr-4"><Link to="/">
            home</Link></li>
          {/* using anchor tag */}
          <li className="mr-4"><a href="/About">
            About us</a></li>
          {/* using Link component provided by react-router-dom */}
          <li className="mr-4"><Link to="/Contacts">Contact us</Link></li>
          <li className="mr-4"><Link to ="Grocery">Grocery</Link></li>
          <li className="mr-4"><Link to ="Grocery">Grocery</Link></li>
          <li className="mr-4"><Link to = "/cart">Cart ({cartItems.length}items)</Link></li>
          <button
            className="login fixed top-0 right-14"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-2 bold fixed top-0 right-0">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
