import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Book Search Engine</h1>
      <h4>Find the books that you will love</h4>
    </div>
  );
}

export default Header;
