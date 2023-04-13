import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantDetails from "./components/RestaurantDetails";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;
export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact/> },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
    ],
  },
]);
