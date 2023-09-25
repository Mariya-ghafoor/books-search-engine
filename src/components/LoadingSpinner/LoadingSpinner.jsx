import React, { useContext } from "react";
import { LoadingSpinnerContext } from "../../context/LoadingSpinnerContextProvider";

function LoadingSpinner() {
  const { isLoading, setIsLoading } = useContext(LoadingSpinnerContext);
  console.log("value of is loading is", isLoading);
  return <>{isLoading && <div></div>}</>;
}

export default LoadingSpinner;
