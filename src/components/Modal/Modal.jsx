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
    // classes += ` ${styles.show}`;
    setIsShown(true);
  }, [modalData]);

  const closeModalHandler = () => {
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
            <div className={styles.modal__content__details}>
              <img
                src={modalData.thumbnail}
                alt=""
                className={styles.modal__content__thumbnail}
              />

              <div>
                {modalData.title && (
                  <p className={styles.modal__content__title}>
                    {modalData.title}
                  </p>
                )}
                {modalData.authors && (
                  <p className={styles.modal__content__authors}>
                    {modalData.authors}
                  </p>
                )}
                {modalData.publisher && (
                  <p className={styles.modal__content__publisher}>
                    Published by: {modalData.publisher}
                  </p>
                )}
                {modalData.publishedDate && (
                  <p className={styles.modal__content__publishedDate}>
                    Published on: {modalData.publishedDate}
                  </p>
                )}
                {modalData.categories && (
                  <p className={styles.modal__content__categories}>
                    Category: {modalData.categories}
                  </p>
                )}
                {modalData.description && (
                  <p className={styles.modal__content__description}>
                    {modalData.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
