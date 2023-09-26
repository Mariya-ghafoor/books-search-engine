/* eslint-disable react/prop-types */
import { getBooksList } from "../../services/getBooksList";
import ShowBooksList from "../../containers/showBooksList";
import { useEffect, useState, useContext } from "react";
import { LoadMoreContext } from "../../context/LoadMoreContextProvider";

function BookLoader({ searchTerm }) {
  //const [query, setQuery] = useState(null);
  const [booksData, setBooksData] = useState(null);

  let { maxResults, setMaxResults, showLoadMore, setShowLoadMore } =
    useContext(LoadMoreContext);

  // For first time search

  useEffect(() => {
    setMaxResults(10);

    if (searchTerm != null) {
      getBooksList(searchTerm, maxResults)
        .then((booksData) => {
          setBooksData(booksData);
        })
        .catch(() => {
          console.log("AN ERROR OCCURED WHILE FETCHING BOOKS");
        });

      if (booksData === null) {
        setBooksData(null);
      }
    }
    return () => {};
  }, [searchTerm]);

  //For load more button

  useEffect(() => {
    if (searchTerm != null) {
      getBooksList(searchTerm, maxResults)
        .then((booksData) => {
          setBooksData(booksData);
        })
        .catch((e) => {
          console.log(
            "AN ERROR OCCURED WHILE FETCHING BOOKS IN LOAD MORE USE EFFECT",
            e.message
          );
        });
    }
  }, [maxResults, searchTerm]);

  return (
    <>
      <ShowBooksList data={booksData} />
    </>
  );
}

export default BookLoader;
