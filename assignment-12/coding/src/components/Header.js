import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
{
  BrowserRouter, Route, Router;
}
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isShow,isShowSet] = useState(false)

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log("loggedInUser", loggedInUser);
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  return (
    <div className="flex justify-between items-center md:justify-between md:w-full md:items-center fixed top-0 bg-white z-30 pb-4 sm:pb-2 left-0 right-0">
      <div className="w-[20%] sm:w-[15%]  md:w-[15%] ">
        <img src={LOGO_URL}></img>
      </div>
      <div className="">
        <h4
          className="fixed top-2 rounded-lg left-[10rem] md:left-[40rem]  px-1 inline bg-amber-300"
          id="onlineStatus"
        >
          {onlineStatus ? "online" : "offline"}
        </h4>
      </div>
      <div className="hidden sm:flex sm:text-xs md:text-sm">
      
        <ul className="md:m-4 sm:flex flex-wrap ">
          <li className="mr-4">
            <Link to="/">home</Link>
          </li>
          {/* using anchor tag */}
          <li className="mr-4">
            <a href="/About">About us</a>
          </li>
          {/* using Link component provided by react-router-dom */}
          <li className="mr-4">
            <Link to="/Contacts">Contact us</Link>
          </li>
          <li className="mr-4">
            <Link to="Grocery">Grocery</Link>
          </li>
          <li className="mr-4">
            <Link to="Grocery">Grocery</Link>
          </li>
          <li className="mr-4">
            <Link to="/cart">Cart ({cartItems.length}items)</Link>
          </li>
        
        </ul>
      </div>
      <div className="text-xs sm:text-sm flex flex-wrap absolute top-0 right-14 bg-white"> <button
            className="login "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-2 bold right-0 list-none">{loggedInUser}</li></div>

      <div className="sm:hidden absolute flex flex-row-reverse items-center">
        <div className="w-[10%]"> <img
          src="https://i.pinimg.com/originals/b5/4d/f1/b54df198d21ac86bedead6c4a364ef32.png"
          alt="" onClick={() => isShowSet(!isShow)}
        ></img>
        </div>
        {isShow===true?(<ul className="md:m-4 flex flex-wrap text-xs mt-[6rem] pl-4 pb-2 bg-white">
          <li className="mr-4">
            <Link to="/">home</Link>
          </li>
          {/* using anchor tag */}
          <li className="mr-4">
            <a href="/About">About us</a>
          </li>
          {/* using Link component provided by react-router-dom */}
          <li className="mr-4">
            <Link to="/Contacts">Contact us</Link>
          </li>
          <li className="mr-4">
            <Link to="Grocery">Grocery</Link>
          </li>
          <li className="mr-4">
            <Link to="Grocery">Grocery</Link>
          </li>
          <li className="mr-4">
            <Link to="/cart">Cart ({cartItems.length}items)</Link>
          </li>
         
        </ul>):null}
       
      </div>
    </div>
  );
};
