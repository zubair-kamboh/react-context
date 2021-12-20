import React, { createContext, useContext, useState } from 'react';

const NameContext = createContext();
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// custom hooks
export const NameContext = () => {
  return useContext(NameContext);
};
export const ThemeContext = () => {
  return useContext(ThemeContext);
};
export const ThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <NameContext.Provider value="zubair">
      <ThemeContext.Provider value={dark}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
          {children}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    </NameContext.Provider>
  );
};
