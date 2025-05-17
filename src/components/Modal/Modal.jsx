import React from "react";
import Modal from "react-modal";
import s from "./Modal.module.css";

Modal.setAppElement("#root");

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`${s.modal} ${isOpen ? s["modal-open"] : ""}`}
      overlayClassName={s.overlay}
    >
      <p>{message}</p>
      <div className={s.buttons}>
        <button className={s.confirmBtn} onClick={onConfirm}>
          Confirm
        </button>
        <button className={s.cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
