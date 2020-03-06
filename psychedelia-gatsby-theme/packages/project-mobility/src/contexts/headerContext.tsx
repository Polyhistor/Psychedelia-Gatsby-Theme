import React, { createContext, useContext, useState, useMemo } from "react";

const HeaderContext = createContext(null);

const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHeader must be used within a success provider");
  }

  return context;
};

const HeaderContextProvider = props => {
  const [headerContext, setHeaderContext] = useState(false);

  const value = useMemo(() => [headerContext, setHeaderContext], [
    headerContext
  ]);

  return <HeaderContext.Provider value={value} {...props} />;
};

export default {
  HeaderContextProvider,
  useHeaderContext
};
