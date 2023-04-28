import React, { useState, useContext } from "react";
// import "./Header.scss";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useContext(userContext);
  const cartItems = useSelector((Store) => Store.cart.items);

  return (
    <div className="bg-[#ff0099] wrapper flex gap-96  justify-center items-center mb-4">
      <div className="logo w-20   " >
        <Link to="/">
          <img data-testid="Logo" src={require("../assets/logo.jpg")} />
        </Link>
      </div>

      <div className="nav-items flex list-none gap-20   ">
        <li>Search</li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>

        <li>
          <Link to="/loginForm">{user.id}</Link>
        </li>
        <li>
          <Link to="/Cart">cart-{cartItems.length}</Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
