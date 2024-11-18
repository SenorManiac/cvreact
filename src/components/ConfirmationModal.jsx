import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Accessibility setting

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
      style={{
        content: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
      }}
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this </p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onClose}>No</button>
    </Modal>
  );
};

export default ConfirmationModal;
