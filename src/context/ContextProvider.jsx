/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("Hello world!");

  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};
