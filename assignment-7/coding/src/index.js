import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import {Link} from "react-router-dom" ;
import RestaurantMenu from "./components/RestaurantMenu"


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
