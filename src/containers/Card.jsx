import styles from "./Card.module.scss";

function Card(book) {
  console.log("i am in Card");
  let thumbnail = "";

  try {
    console.log(book.book);
    thumbnail = book.book.thumbnail;
  } catch {
    console.log("Error in Card");
    return (
      <h2 className={styles.card__container}>Please enter valid search term</h2>
    );
  }

  return (
    <div className={styles.card__container}>
      <div className={styles.card}>
        {thumbnail && <img src={thumbnail} alt={book.book.title} />}
        <div>Title: {book.book.title}</div>

        <div>Avg. Rating: {book.book.averageRating}</div>
        <div>Publisher: {book.book.publisher}</div>
      </div>
    </div>
  );
}

export default Card;
