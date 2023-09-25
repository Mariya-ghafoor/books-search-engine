import React, { useContext } from "react";
import { LoadMoreContext } from "../../context/LoadMoreContextProvider";
import styles from "./LoadMore.module.scss";

function LoadMore() {
  let { maxResults, setMaxResults, showLoadMore, setShowLoadMore } =
    useContext(LoadMoreContext);

  const loadMoreHandler = () => {
    setMaxResults(maxResults + 10);
  };

  return (
    <div className={styles.container}>
      {showLoadMore && (
        <button onClick={loadMoreHandler} className={styles.container__button}>
          Load More
        </button>
      )}
    </div>
  );
}

export default LoadMore;
