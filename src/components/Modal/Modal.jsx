import { useEffect, useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import styles from "./Modal.module.scss";

function Modal() {
  let { completeData, setCompleteData, modalData, setModalData } =
    useContext(ModalContext);
  let [isShown, setIsShown] = useState(false);
  let classes = `${styles.modal}`;

  useEffect(() => {
    console.log("I am in useEffect of Modal");
    console.log("model data receieved by Modal is: ", modalData);
    // classes += ` ${styles.show}`;
    setIsShown(true);
  }, [modalData]);
  console.log("In Modal. Receieved modalData", modalData);

  const closeModalHandler = () => {
    console.log("i am in close modal handler");
    setIsShown(false);
  };
  return (
    <>
      {modalData && isShown && (
        <div id="myModal" className={styles.modal}>
          {/* <!-- Modal content --> */}
          <div className={styles.modal__content}>
            <span className={styles.close} onClick={closeModalHandler}>
              &times;
            </span>
            <p>{modalData.title}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
