import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Set initial dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Pass the dark mode state and toggle function to the context value
  const darkModeValue = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={darkModeValue}>
      {children}
    </ThemeContext.Provider>
  );
};
