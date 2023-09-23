import Searchbar from "./components/Searchbar/Searchbar";
import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";

import BookLoader from "./components/BookLoader.jsx/BookLoader";

function App() {
  console.log("Im in App");
  const [searchTerm, setSearchTerm] = useState(null);
  const [errorEmptySearch, setErrorEmptySearch] = useState(null);

  const handleSubmit = (searchTerm) => {
    console.log("App received searchterm ", searchTerm); //Need to send this searchTerm to Bookloader
    // if (searchTerm === "") {
    //   console.log("search term is empty");
    //   setErrorEmptySearch("Search term cannot be empty");
    //   return;
    // }
    setSearchTerm(searchTerm);
  };
  return (
    <>
      <div className="main">
        <div className="container__header">
          <Header />
          <Searchbar handleSubmit={handleSubmit} />
        </div>
      </div>

      {/* {errorEmptySearch
          ? `Search term cannot be empty`
          : `<div className="books__container">
        <BookLoader searchTerm={searchTerm} />`}
      </div> */}

      <div className="books__container">
        <BookLoader searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
