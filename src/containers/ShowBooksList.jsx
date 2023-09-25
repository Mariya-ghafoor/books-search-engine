import Card from "../components/Card/Card.jsx";
import styles from "../components/Card/Card.module.scss";
import { useContext, useEffect } from "react";
import { ErrorContext } from "../context/ErrorContextProvider";
import { ModalContext } from "../context/ModalContextProvider";
import { LoadingSpinnerContext } from "../context/LoadingSpinnerContextProvider.jsx";
import { LoadMoreContext } from "../context/LoadMoreContextProvider.jsx";

function ShowBooksList(data) {
  //qksjfksanfdjksnf

  //Setting data for Modal

  let { errorMessage, setErrorMessage } = useContext(ErrorContext);
  let { completeData, setCompleteData } = useContext(ModalContext);
  let { maxResults, setMaxResults, showLoadMore, setShowLoadMore } =
    useContext(LoadMoreContext);

  let booksDataArray = [];
  let booksObjArr = [];

  let title = "";
  let authors = "";
  let description = "";
  let thumbnail = "";

  // useEffect(() => {
  //   setCompleteData(booksDataArray);
  // }, [booksDataArray]);

  const booksDataObj = data.data;
  if (booksDataObj) console.log("the value of bookdataobj is ", booksDataObj);

  try {
    console.log("###### data keys receieved are ", booksDataObj.items);

    if (booksDataObj.items === undefined) {
      setErrorMessage(
        "Uh oh looks like there are no results for that search! Try a different one may be?"
      );
      console.log("Error message is: ", errorMessage);
      return;
    }

    booksDataArray = booksDataObj.items;

    console.log("^^^^^BOOKSDATA ARRAY VALUE IS, ", booksDataArray);
    setCompleteData(booksDataArray);

    console.log("i have set complete data. It is ", completeData);
  } catch (e) {
    console.log("error trying to get search results");

    console.log("Error message is: ", e.message);
    return <Card book={null} />;
  }

  booksObjArr = booksDataArray.map((book) => {
    console.log("**** Book info***");
    //console.log(book.volumeInfo.imageLinks.thumbnail);
    try {
      const full_title = book.volumeInfo.title;
      title = full_title.replace(/^(.{30}[^\s]*).*/, "$1");
      authors = book.volumeInfo.authors;
      //const averageRating = book.volumeInfo.averageRating;
      const full_description = book.volumeInfo.description;
      description = full_description.replace(/^(.{50}[^\s]*).*/, "$1"); //this shows only 50 characters plus any subsequent non-space characters.
      thumbnail = book.volumeInfo.imageLinks.thumbnail + "&fife=w20000-h20000";

      console.log("Clean up in ShowBooks: making error message null");
      setErrorMessage(null);
      console.log("Error message is now ", errorMessage);
      setShowLoadMore(true);
    } catch {
      (e) => {
        console.log(e.message);
        setErrorMessage("Uh oh that was unexpected? Try again may be?");
      };
    }

    return { title, authors, description, thumbnail };
  });

  return (
    <div className={styles.card__container}>
      {booksObjArr.map((book, index) => (
        <Card key={index} book={book} />
      ))}
    </div>
  );
}

export default ShowBooksList;
