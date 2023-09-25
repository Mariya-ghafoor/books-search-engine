/* eslint-disable react/prop-types */
import { getBooksList } from "../../services/getBooksList";
import ShowBooksList from "../../containers/showBooksList";
import { useEffect, useState, useContext } from "react";
import { ErrorContext } from "../../context/ErrorContextProvider";
import { LoadMoreContext } from "../../context/LoadMoreContextProvider";
import LoadMore from "../LoadMore/LoadMore";

function BookLoader({ searchTerm }) {
  //const [query, setQuery] = useState(null);
  const [booksData, setBooksData] = useState(null);
  let { errorMessage, setErrorMessage } = useContext(ErrorContext);
  let { maxResults, setMaxResults } = useContext(LoadMoreContext);

  console.log("BookLoader receieved search term from App.jsx ", searchTerm);
  console.log(
    "BookLoader receieved maxResults from LoadMoreContext ",
    maxResults
  );

  // For first time search

  useEffect(() => {
    console.log("useEffect called");

    if (searchTerm != null) {
      setMaxResults(10);
      console.log("i am going to make a request to server");
      getBooksList(searchTerm, maxResults)
        .then((booksData) => {
          setBooksData(booksData);
          console.log(
            "*****Received books data from getBooksList**** ",
            booksData
          );
        })
        .catch(() => {
          console.log("AN ERROR OCCURED WHILE FETCHING BOOKS");
        });

      if (booksData === null) {
        setBooksData(null);
      }
    }
    return () => {
      console.log("Clean up: making error message null");
      setErrorMessage(null);
      setMaxResults(10);
    };
  }, [searchTerm]);

  //For load more button

  useEffect(() => {
    console.log("second useEffect called");

    if (searchTerm != null) {
      console.log("i am going to make a request to server");
      getBooksList(searchTerm, maxResults)
        .then((booksData) => {
          setBooksData(booksData);
          console.log(
            "*****Received books data from getBooksList**** ",
            booksData
          );
        })
        .catch((e) => {
          console.log("AN ERROR OCCURED WHILE FETCHING BOOKS", e.message);
        });
    }
  }, [maxResults]);

  return <ShowBooksList data={booksData} />;
}

export default BookLoader;
