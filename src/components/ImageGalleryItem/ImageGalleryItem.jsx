import React, { Component } from 'react'

export default class ImageGalleryItem extends Component {
  render() {

    // console.log(this.props)
    return (
    <li className="gallery-item">
        <img src={this.props.webformatURL} alt="SmallPicture" />
    </li>    
    )}
}
