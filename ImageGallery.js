import React, { useState } from 'react';
import './ImageGallery.css';
import placeholderImage from './assets/placeholder.jpg';


import image1 from './assets/img G.jpg';
import image2 from './assets/placeholder.jpg';
import image3 from './assets/image Bed.jpg';
import image4 from './assets/img 7.jpg';
import image5 from './assets/img 25.jpg';
import image6 from './assets/img 55.jpg';
import image7 from './assets/img Cc.jpg';
import image8 from './assets/img C C ..jpg';
import image9 from './assets/img C C.jpg';
import image10 from './assets/img K.jpg';
import image11 from './assets/img D.jpg';
import image12 from './assets/img dining.jpg';
import image13 from './assets/img E.jpg';
import image14 from './assets/img F.jpg';
import image15 from './assets/img G.jpg';
import image16 from './assets/img I.jpg';
import image17 from './assets/img ii.jpg';
import image18 from './assets/img J.jpg';
import image19 from './assets/img K.jpg';
import image20 from './assets/img L.jpg';
import image21 from './assets/img M.jpg';
import image22 from './assets/img ol.jpg';
import image23 from './assets/img tt.jpg';
const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([
    { src: image1, loaded: false },
    { src: image2, loaded: false },
    { src: image3, loaded: false },
    { src: image4, loaded: false },
    { src: image5, loaded: false },
    { src: image6, loaded: false },
    { src: image7, loaded: false },
    { src: image8, loaded: false },
    { src: image9, loaded: false },
    { src: image10, loaded: false },
    { src: image11, loaded: false },
    { src: image12, loaded: false },
    { src: image13, loaded: false },
    { src: image14, loaded: false },
    { src: image15, loaded: false },
    { src: image16, loaded: false },
    { src: image17, loaded: false },
    { src: image18, loaded: false },
    { src: image19, loaded: false },
    { src: image20, loaded: false },
    { src: image21, loaded: false },
    { src: image22, loaded: false },
    { src: image23, loaded: false },
    
  ]);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleImageLoad = (index) => {
    const updatedImageUrls = [...imageUrls];
    updatedImageUrls[index].loaded = true;
    setImageUrls(updatedImageUrls);
  };

  return (
    <div className="image-gallery">
      {imageUrls.map((url, index) => (
        <div key={index} className="Galleryimage-container" onClick={() => openLightbox(index)}>
          {/* Conditionally set the src attribute based on the 'loaded' property */}
          <img
            src={url.loaded ? url.src : placeholderImage}
            alt={`Image ${index + 1}`}
            className="Galleryimage"
            // Handle the image load event to mark the image as loaded
            onLoad={() => handleImageLoad(index)}
          />
        </div>
      ))}

      {isOpen && (
        <div className="lightbox">
          <span className="close-btn" onClick={closeLightbox}>
            &times;
          </span>
          <img
            src={imageUrls[selectedImageIndex].src}
            alt={`Image ${selectedImageIndex + 1}`}
            className="lightbox-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
