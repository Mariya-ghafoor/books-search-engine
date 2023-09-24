import Card from "./Card";
import styles from "./Card.module.scss";
import { useContext } from "react";
import { ErrorContext } from "../context/ErrorContextProvider";

function ShowBooksList(data) {
  //qksjfksanfdjksnf

  let { errorMessage, setErrorMessage } = useContext(ErrorContext);

  let title = "";
  let authors = "";
  let description = "";
  let thumbnail = "";

  const booksDataObj = data.data;
  if (booksDataObj) console.log("the value of bookdataobj is ", booksDataObj);

  let booksDataArray = [];
  let booksObjArr = [];

  try {
    console.log("###### data keys receieved are ", booksDataObj.items);

    if (booksDataObj.items === undefined) {
      setErrorMessage(
        "Uh oh looks like there are no results for that search. Try a different one may be?"
      );
      console.log("Error message is: ", errorMessage);
      return;
    }

    booksDataArray = booksDataObj.items;
    console.log(booksDataArray);
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
      thumbnail = book.volumeInfo.imageLinks.thumbnail;
    } catch {
      (e) => {
        console.log(e.message);
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
