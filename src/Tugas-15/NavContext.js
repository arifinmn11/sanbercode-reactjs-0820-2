import React, { useState, createContext } from "react";
// import "./Tugas14.css";
export const NavContext = createContext();

export const NavProvider = (props) => {
  const [navColor, setColorNav] = useState({text: "black", color:"white", checked:"true"});
  return (
    <NavContext.Provider value={[navColor, setColorNav]}>
      {props.children}
    </NavContext.Provider>
  );
};
