import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ imageUrl, isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {imageUrl && (
        <>
          <img src={imageUrl} alt="Large version of the image" />
          <button onClick={closeModal}>Close</button>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
