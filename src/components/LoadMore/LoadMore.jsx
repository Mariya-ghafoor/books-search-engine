import React, { useContext } from "react";
import { LoadMoreContext } from "../../context/LoadMoreContextProvider";

function LoadMore() {
  let { maxResults, setMaxResults } = useContext(LoadMoreContext);

  const loadMoreHandler = () => {
    setMaxResults(maxResults + 10);
  };

  return (
    <>{maxResults && <button onClick={loadMoreHandler}>Load More</button>}</>
  );
}

export default LoadMore;
