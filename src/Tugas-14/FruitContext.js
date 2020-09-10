import React, { useState, createContext } from "react";
import "./Tugas14.css";
export const FruitContext = createContext();

export const FruitProvider = (props) => {
  const [fruit, setFruit] = useState([]);
  const [inputFruit, setinputFruit] = useState({
    name: "",
    price: "",
    weight: "",
    id: null,
  });

  return (
    <FruitContext.Provider value={[fruit, setFruit, inputFruit, setinputFruit]}>
      {props.children}
    </FruitContext.Provider>
  );
};
