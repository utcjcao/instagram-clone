import React, { createContext, useContext, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    description: "",
  });

  const showToast = (title, description) => {
    setToastContent({ title, description });
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}

      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShow(false)} show={show} autohide delay={3000}>
          <Toast.Header>
            <strong className="me-auto">{toastContent.title}</strong>
          </Toast.Header>
          <Toast.Body>{toastContent.description}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useShowToast = () => {
  return useContext(ToastContext);
};

export default { useShowToast, ToastProvider };
