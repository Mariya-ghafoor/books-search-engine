import Searchbar from "./components/Searchbar/Searchbar";
import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import Error from "./components/Error/Error";

import BookLoader from "./components/BookLoader.jsx/BookLoader";

function App() {
  console.log("Im in App");
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchError, setSearchError] = useState(null);

  const handleSubmit = (searchTerm) => {
    console.log("App received searchterm ", searchTerm); //Need to send this searchTerm to Bookloader

    setSearchTerm(searchTerm);
  };

  const handleError = (searchError) => {
    console.log("App received error ", searchError);
  };
  return (
    <>
      <div className="main">
        <div className="container__header">
          <Header />
          <Searchbar handleSubmit={handleSubmit} />
        </div>
      </div>
      <div>
        <Error />
      </div>

      {/* {errorEmptySearch
          ? `Search term cannot be empty`
          : `<div className="books__container">
        <BookLoader searchTerm={searchTerm} />`}
      </div> */}

      <div className="books__container">
        {searchTerm && <BookLoader searchTerm={searchTerm} />}
      </div>
    </>
  );
}

export default App;
