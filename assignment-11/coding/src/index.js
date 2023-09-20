import React ,{Suspense, lazy, useEffect} from "react";
import { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import {Link} from "react-router-dom" ;
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery"
const Grocery = lazy(() => import("./components/Grocery"))
const About =lazy(() => import("./components/About"))

const AppLayout = () => {
  // authentication
  const [userName,setUserName] =useState()

  useEffect(() => {
    // make an API call
    const data={
      name:"rudra"
    };
    setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <div>Hello world</div>
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [{
        path: "/",
        element: <Body /> ,
    },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/grocery",
        element:(<Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>),
      },
      {
        path: "/RestaurantMenu/:resId",
        element: <RestaurantMenu />,
      },

    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
