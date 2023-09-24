import styles from "./Card.module.scss";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContextProvider";
import Modal from "../components/Modal/Modal";

function Card(book) {
  console.log("i am in Card");
  let thumbnail = "";
  let title = "";
  let authors = "";
  let description = "";
  let publisher = "";
  let categories = "";
  let { completeData, setCompleteData, modalData, setModalData } =
    useContext(ModalContext);

  try {
    // console.log(book.book);
    thumbnail = book.book.thumbnail;
    title = book.book.title;
    authors = book.book.authors;
    description = book.book.description;
  } catch {
    console.log("Error in Card");

    return;
  }

  const modalShowHandler = (id) => {
    console.log("This card was clicked, ", id);
    console.log("i also have whole modal data array", completeData);
    const volumeInfoArr = completeData.map((book) => {
      return book.volumeInfo;
    });
    const modalClickedDataArr = volumeInfoArr.filter((volume) =>
      volume.title.includes(id)
    );
    console.log("Modal clicked is ", modalClickedDataArr);
    modalClickedDataArr.map((book) => {
      try {
        title = book.title;
        authors = book.authors;
        publisher = book.publisher;
        categories = book.categories;
        description = book.description;
        thumbnail = book.imageLinks.thumbnail;
      } catch {}

      setModalData({
        title,
        authors,
        publisher,
        categories,
        description,
        thumbnail,
      });

      console.log("title of book is ", title);
    });
  };

  return (
    <div
      className={styles.card__container}
      id={book.book.title}
      onClick={() => modalShowHandler(book.book.title)}
    >
      <div className={styles.card}>
        {thumbnail && (
          <img
            className={styles.card__thumbnail}
            src={thumbnail}
            alt={book.book.title}
          />
        )}
        <div className={styles.card__text}>
          {title && <div className={styles.card__text__title}>{title}</div>}
          {authors && (
            <div className={styles.card__text__authors}>by {authors}</div>
          )}
          {description && (
            <div className={styles.card__text__description}>
              {description}...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
