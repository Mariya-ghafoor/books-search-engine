import { createContext, useState } from "react";

export const ErrorContext = createContext(null);

function ErrorContextProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorContextProvider;
