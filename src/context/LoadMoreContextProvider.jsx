/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LoadMoreContext = createContext(null);

function LoadMoreContextProvider({ children }) {
  const [maxResults, setMaxResults] = useState(null);
  return (
    <LoadMoreContext.Provider value={{ maxResults, setMaxResults }}>
      {children}
    </LoadMoreContext.Provider>
  );
}

export default LoadMoreContextProvider;
