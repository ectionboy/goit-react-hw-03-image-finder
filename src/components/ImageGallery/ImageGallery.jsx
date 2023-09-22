import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ photos, onClickImageItem }) => (

      <>
        <ul className="gallery">
          {photos.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClickImageItem={onClickImageItem}

            />
          ))}
        </ul>
      </>
    );
    export default ImageGallery;