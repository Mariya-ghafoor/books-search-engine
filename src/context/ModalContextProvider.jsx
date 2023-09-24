/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalContext = createContext(null);

function ModalContextProvider({ children }) {
  const [modalData, setModalData] = useState(null);
  const [completeData, setCompleteData] = useState(null);
  return (
    <ModalContext.Provider
      value={{ completeData, setCompleteData, modalData, setModalData }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
