import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ButtonContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

const ButtonProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ButtonContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ButtonContext.Provider>
  );
};

const useButton = () => {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error("useButtonState must be used within a ButtonProvider");
  }

  return context;
};

export { ButtonProvider, useButton };
