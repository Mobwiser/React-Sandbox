import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { GALLERY } from '../../data/gallery';

class Gallery extends Component {
  render() {
    return (
      <div className="lg:h-full lg:h-full w-full flex lg:flex-row">
        <div className="w-full h-full lg:overflow-auto lg:mt-0">
          <div className="align-center">
            <ImageGallery
              className="w-full"
              items={GALLERY.slider}
              showNav={true}
              showThumbnails={true}
              showPlayButton={false}
              showBullets={false}
              showFullscreenButton={true}
              autoPlay={false}
              slideInterval={5000}
              thumbnailClass="gallery-thumbnail"
              disableThumbnailScroll={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
