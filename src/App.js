import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import LoginForm from "./components/LoginForm";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>)

};
export default App;
export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
      { path: "/loginForm", element: <LoginForm /> },
      { path: "/Cart", element: <Cart /> }
    ],
  },
]);
