import Card from "./Card";
import styles from "./Card.module.scss";

function ShowBooksList(data) {
  console.log("i am in show books list. I receieved data ", data);
  const booksDataObj = data.data;
  let booksDataArray = [];
  let booksObjArr = [];

  if (booksDataObj === (undefined || null) || !Object.keys(booksDataObj)) {
    console.log("caught undefined/null in show books list");
    return (
      <>
        <Card book={null} />
      </>
    );
  } else {
    try {
      console.log("###### data keys receieved are ", typeof booksDataObj.items);
      booksDataArray = booksDataObj.items;
      console.log(booksDataArray);
    } catch {
      console.log("error trying to get search results");
      return (
        <>
          <Card book={null} />
        </>
      );
    }
  }

  booksObjArr = booksDataArray.map((book) => {
    console.log("**** Book info***");
    //console.log(book.volumeInfo.imageLinks.thumbnail);
    const title = book.volumeInfo.title;
    const authors = book.volumeInfo.authors;
    const averageRating = book.volumeInfo.averageRating;
    const publisher = book.volumeInfo.publisher;
    let thumbnail = "";
    try {
      thumbnail = book.volumeInfo.imageLinks.thumbnail;
    } catch {}

    return { title, authors, averageRating, publisher, thumbnail };
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
