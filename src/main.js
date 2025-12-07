import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout/>,
    children:[
      {
    path: "/",
    element: <Body/>
  },
      {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
    ],
    errorElement: <Error/>,
  },
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
 