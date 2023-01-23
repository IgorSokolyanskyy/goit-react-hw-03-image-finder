import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      user: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  };

  state = {
    shownModal: false,
  };

  toggleModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };

  render() {
    const { item } = this.props;
    const { webformatURL, user } = item;

    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={user}
        />
        {this.state.shownModal && (
          <Modal onClose={this.toggleModal} image={item} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
