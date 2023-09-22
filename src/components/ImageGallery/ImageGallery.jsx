import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

export default class ImageGallery extends Component {

  render() {
     // console.log(this.props.photos);
    return (
      <>
        <ul className="gallery">
          {this.props.photos.map(photo => (
            <ImageGalleryItem key={photo.id}
              webformatURL={photo.webformatURL}
              largeImageURL={photo.largeImageURL}
            />
          ))}
        </ul>
      </>
    );
  }
}
