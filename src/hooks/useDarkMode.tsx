import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface DarkmodeContextProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkmodeContextProps | undefined>(undefined);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("useButtonState must be used within a ButtonProvider");
  }

  return context;
};

export { DarkModeProvider, useDarkMode };
