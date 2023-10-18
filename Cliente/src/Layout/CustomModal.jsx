import React from "react";
import { Modal } from "react-bootstrap";

export const CustomModal = ({ title, isActive, close, children }) => {
  return (
    <div className={isActive ? "modal show modal-active" : "modal show"}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={close}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>
      </Modal.Dialog>
    </div>
  );
};
