/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LoadMoreContext = createContext(null);

function LoadMoreContextProvider({ children }) {
  const [maxResults, setMaxResults] = useState(10);
  const [showLoadMore, setShowLoadMore] = useState(false);
  return (
    <LoadMoreContext.Provider
      value={{ maxResults, setMaxResults, showLoadMore, setShowLoadMore }}
    >
      {children}
    </LoadMoreContext.Provider>
  );
}

export default LoadMoreContextProvider;
