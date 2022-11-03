import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <h1>W.</h1>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Home</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">New</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Popular</a>
          </li>
          <li className="option " onClick={closeMobileMenu}>
            <a href="#">Trending</a>
          </li>
          <li className="option " onClick={closeMobileMenu}>
            <a href="#">Catagories</a>
          </li>
          
        </ul>
      </div>
      
        
        
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
