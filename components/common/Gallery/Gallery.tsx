import { FC, useState } from "react";
import { GalleryImage, GalleryWrapper } from "./GalleryStyled";
import { PopupImageStyled, PopupStyled } from "../Popup/PopupStyled";

interface GalleryProps {
  images: string[];
}
const Gallery: FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <GalleryWrapper>
        {images.map((image, index) => (
          <GalleryImage
            key={`${index}-${image}`}
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleClick(image)}
          />
        ))}
      </GalleryWrapper>
      {selectedImage && (
        <PopupStyled onClick={handleClose}>
          <PopupImageStyled src={selectedImage} alt="Full size" />
        </PopupStyled>
      )}
    </>
  );
};

export default Gallery;
