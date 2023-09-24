import Searchbar from "./components/Searchbar/Searchbar";
import "./App.css";
import Header from "./Components/Header/Header";
import { useContext, useState } from "react";
import Error from "./components/Error/Error";

import BookLoader from "./components/BookLoader.jsx/BookLoader";
import Footer from "./components/Footer/Footer";
import ErrorContextProvider, {
  ErrorContext,
} from "./context/ErrorContextProvider";

function App() {
  console.log("Im in App");
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (searchTerm) => {
    console.log("App received searchterm ", searchTerm); //Need to send this searchTerm to Bookloader

    setSearchTerm(searchTerm);
  };

  return (
    <ErrorContextProvider>
      <div className="main">
        <div className="container__header">
          <Header />
          <Searchbar handleSubmit={handleSubmit} />
        </div>
        <Error />
      </div>

      <div className="books__container">
        {searchTerm && <BookLoader searchTerm={searchTerm} />}
      </div>
      <Footer />
    </ErrorContextProvider>
  );
}

export default App;
