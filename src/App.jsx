import Searchbar from "./components/Searchbar/Searchbar";
import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import Error from "./components/Error/Error";

import BookLoader from "./components/BookLoader.jsx/BookLoader";
import Footer from "./components/Footer/Footer";
import ErrorContextProvider from "./context/ErrorContextProvider";
import Modal from "./components/Modal/Modal";
import ModalContextProvider from "./context/ModalContextProvider";
import LoadMore from "./components/LoadMore/LoadMore";
import LoadMoreContextProvider from "./context/LoadMoreContextProvider";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import LoadingSpinnerContextProvider from "./context/LoadingSpinnerContextProvider";

function App() {
  console.log("Im in App");
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (searchTerm) => {
    console.log("App received searchterm ", searchTerm); //Need to send this searchTerm to Bookloader

    setSearchTerm(searchTerm);
  };

  return (
    <ErrorContextProvider>
      <ModalContextProvider>
        <LoadMoreContextProvider>
          <LoadingSpinnerContextProvider>
            <div className="main">
              <div className="container__header">
                <Header />
                <Searchbar handleSubmit={handleSubmit} />
              </div>
            </div>
            <LoadingSpinner />

            <div className="books__container">
              {searchTerm && <BookLoader searchTerm={searchTerm} />}

              <LoadMore />
              <Modal />
              <Error />
              <Footer />
            </div>
          </LoadingSpinnerContextProvider>
        </LoadMoreContextProvider>
      </ModalContextProvider>
    </ErrorContextProvider>
  );
}

export default App;
