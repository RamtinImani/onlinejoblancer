import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //! Dark Mode Handler
  const toggleDarkMode = () => setIsDarkMode((prevTheme) => !prevTheme);

  //! Root Element Class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const themeContext = useContext(DarkModeContext);

  if (themeContext === undefined) {
    throw new Error("DarkModeContext was used outside of DarkModeContext Provider");
  }

  return themeContext;
}
