import { createContext, useReducer } from "react";

const INITIAL_STATE = { darkMode: false };
const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = (props) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
