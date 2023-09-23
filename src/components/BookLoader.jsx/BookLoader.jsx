/* eslint-disable react/prop-types */
import { getBooksList } from "../../services/getBooksList";
import ShowBooksList from "../../containers/showBooksList";
import { useEffect, useState } from "react";

function BookLoader({ searchTerm }) {
  //const [query, setQuery] = useState(null);
  const [booksData, setBooksData] = useState(null);

  console.log("BookLoader receieved search term from App.jsx ", searchTerm);

  useEffect(() => {
    console.log("useEffect called");

    if (searchTerm != null) {
      console.log("i am going to make a request to server");
      getBooksList(searchTerm)
        .then((booksData) => {
          setBooksData(booksData);
          console.log(
            "*****Received books data from getBooksList**** ",
            booksData
          );
        })
        .catch(() => console.log("AN ERROR OCCURED WHILE FETCHING BOOKS"));

      if (booksData === null) {
        setBooksData(null);
      }
    }
  }, [searchTerm]);

  return <ShowBooksList data={booksData} />;
}

export default BookLoader;
