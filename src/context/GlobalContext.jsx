import { createContext } from "react";
import React from "react";

export const dummy = createContext();

const GlobalContext = (children) => {
  return <div></div>;
};

export default GlobalContext;
