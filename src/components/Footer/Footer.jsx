import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      All rights reserved. Background photo by{" "}
      <a href="https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Chris Lawton
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/zvKx6ixUhWQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
    </footer>
  );
}

export default Footer;
