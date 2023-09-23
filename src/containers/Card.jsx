import styles from "./Card.module.scss";

function Card(book) {
  console.log("i am in Card");
  let thumbnail = "";
  let title = "";
  let authors = "";
  let description = "";

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

  return (
    <div className={styles.card__container}>
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
