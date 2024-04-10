import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={css.card} onClick={() => openModal(image.urls.regular)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
