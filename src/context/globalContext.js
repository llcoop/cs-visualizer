import React, { useEffect, useReducer, createContext } from "react";

export const globalContext = createContext({});

export const types = {
  TEST: "test",
  VIEW: "view",
};

const initialState = {
  test: false,
  view: "home",
};

const GlobalContext = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case types.TEST:
        return { ...state, test: action.value };
      case types.VIEW:
        return { ...state, view: action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Global State: ", state);
  }, [state]);

  return <globalContext.Provider value={{ state, dispatch }}>{children}</globalContext.Provider>;
};

export default GlobalContext;
