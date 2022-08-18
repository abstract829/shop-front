import React, { FC, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
interface props {
  type: string;
  text: string;
}
const ToastComponent: FC<props> = ({ type, text }) => {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast
        onClose={() => setShow(false)}
        delay={3000}
        autohide={true}
        show={show}
        bg={type}
      >
        <Toast.Header>
          <strong className="me-auto">
            {type === "success" ? "Exito!" : "Error!"}
          </strong>
        </Toast.Header>
        <Toast.Body style={{ color: "white" }}>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastComponent;
