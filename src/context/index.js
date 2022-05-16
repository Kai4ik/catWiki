import React from "react";
import { createContext } from "react";

export const AppContext = createContext([]);

export const ContextProvider = ({ children, data }) => {
  return <AppContext.Provider value={data}> {children} </AppContext.Provider>;
};
