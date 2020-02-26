import { createContext, useContext, useState, useMemo } from "react";

const HeaderContext = createContext(null);

const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHeader must be used within a success provider");
  }

  return useHeaderContext;
};

const HeaderContextProvider = () => {
  const [headerContext, setHeaderContext] = useState();

  const value = useMemo(() => [headerContext, setHeaderContext], [
    headerContext
  ]);

  return <HeaderContext.Provider value={value} />;
};

export default {
  HeaderContextProvider,
  useHeaderContext
};
