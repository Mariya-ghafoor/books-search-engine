import { useContext } from "react";
import { ErrorContext } from "../../context/ErrorContextProvider";
import styles from "./Error.module.scss";

function Error() {
  console.log("I AM IN ERROR");
  const { errorMessage } = useContext(ErrorContext);
  console.log({ errorMessage });
  return (
    <>
      {errorMessage && (
        <div className={styles.error__message}>{errorMessage}</div>
      )}
    </>
  );
}

export default Error;
