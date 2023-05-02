import React, { useState, useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header() {
  
  const cartItems = useSelector((Store) => Store.cart.items);
  const id = useSelector((state) => state.userInfo[0].user);
  console.log(id)
  

  return (
    <div className="bg-[#5aa1ff] wrapper flex gap-96  justify-center items-center mb-4 p-5">
      <div className="logo w-40   " >
        <Link to="/">
          <LocalDiningIcon sx={{ fontSize: 40 }}/>
        </Link>
      </div>

      <div className="nav-items flex list-none gap-20  text-white font-semibold text-base ">
        <li>Search</li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>
        <li>
          <Link to="/Cart" className="absolute"><ShoppingCartIcon sx={{ color: "white" }} /><span className="text-white font-bold bg-slate-900 rounded-full relative right-2 bottom-2" >{cartItems.length}</span></Link>
        </li>
        <li>
          <Link to="/loginForm">{id}</Link>
        </li>
       
      </div>
    </div>
  );
}

export default Header;
