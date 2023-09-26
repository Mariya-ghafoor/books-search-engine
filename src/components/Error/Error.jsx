import { useContext } from "react";
import { ErrorContext } from "../../context/ErrorContextProvider";
import styles from "./Error.module.scss";

function Error() {
  const { errorMessage } = useContext(ErrorContext);

  return (
    <>
      {errorMessage && (
        <div className={styles.error__message}>{errorMessage}</div>
      )}
    </>
  );
}

export default Error;
