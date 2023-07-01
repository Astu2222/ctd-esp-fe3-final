import { createContext, useContext, useState, useMemo } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("light")

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const providerValue = useMemo(() => ({
    theme,
    handleChangeTheme
  }), [theme, handleChangeTheme])

  return (
    <ContextGlobal.Provider value={ providerValue }>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useGlobalState = () => {
  return useContext(ContextGlobal)
}