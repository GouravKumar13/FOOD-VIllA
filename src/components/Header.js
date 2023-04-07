import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  const LogedIn = () => true;
  const [isLogedIn, setIsLogedIn] = useState("false");
  return (
    <div className="wrapper">
    
      <div className="logo">
      <Link to ="/">
          <img src="data:image/png;base64,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" />
        </Link>
      </div>
      
      <div className="nav-items">
        <li>Search</li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>Offers</li>
        <li>Help</li>
        <li>cart</li>
        <li>
          {isLogedIn ? (
            <button
              onClick={() => {
                setIsLogedIn(false);
              }}
            >
              LOG-OUT
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLogedIn(true);
              }}
            >
              LOG-IN
            </button>
          )}
        </li>
      </div>
    </div>
  );
}

export default Header;
