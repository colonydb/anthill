import { useContext } from "react";
import FrameworkContext from "./FrameworkContext.js";

const useFrameworkContext = () => {
  const context = useContext(FrameworkContext);
  if (context === null) {
    throw Error("useFrameworkContext must be used within a FrameworkContext.Provider");
  }
  return context;
};

export default useFrameworkContext;
