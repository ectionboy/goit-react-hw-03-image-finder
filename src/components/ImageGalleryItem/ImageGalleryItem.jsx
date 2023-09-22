import React from 'react';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  onClickImageItem,
  largeImageURL,
}) => {
  const onImageClick = () => {
    onClickImageItem({ src: largeImageURL});
  };
  return (
    <li key={id} data-id={id} onClick={onImageClick}>
      <img src={webformatURL} alt='pictureBig' />
    </li>
  );
};

export default ImageGalleryItem;
    // console.log(this.props)
    // return (
    // <li className="gallery-item" onClick={onImageClick}>
    //     <img src={this.props.webformatURL} alt="SmallPicture" />
    // </li>    
    // )}

