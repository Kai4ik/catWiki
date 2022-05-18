import React from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
  return (
    <AppContext.Provider value={props.data}>
      {props.children}
    </AppContext.Provider>
  );
};
