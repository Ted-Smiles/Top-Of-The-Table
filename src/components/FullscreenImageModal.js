// FullscreenImageModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './FullscreenImageModal.css';

const FullscreenImageModal = ({ isOpen, onClose, imageUrl }) => {
  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    document.addEventListener('scroll', handleBodyScroll);
    return () => {
      document.removeEventListener('scroll', handleBodyScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    // Ensure that body overflow is set to 'auto' when the modal is closed
    if (!isOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Fullscreen Image"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <img src={imageUrl} alt="Fullscreen" />
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </Modal>
  );
};

export default FullscreenImageModal;