import React, { useContext } from "react";
import { LoadingSpinnerContext } from "../../context/LoadingSpinnerContextProvider";

function LoadingSpinner() {
  const { isLoading, setIsLoading } = useContext(LoadingSpinnerContext);
  console.log("value of is loading is", isLoading);
  return <>{isLoading && <h2>Loading...</h2>}</>;
}

export default LoadingSpinner;
