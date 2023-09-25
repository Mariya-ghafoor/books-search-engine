/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const LoadingSpinnerContext = createContext(null);

function LoadingSpinnerContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingSpinnerContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingSpinnerContext.Provider>
  );
}

export default LoadingSpinnerContextProvider;
