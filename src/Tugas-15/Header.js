import React from "react";
import { NavProvider } from "./NavContext";
import "./Header.css";
import "./Switch.css";
import Navset from "./Nav" 

const Header = () => {
  return (
    <NavProvider>
      <Navset/>
    </NavProvider>
  );
};

export default Header;
