import React, {
  Component
} from 'react';
import Lightbox from 'lightbox-react';
import Button from './Button'
import 'lightbox-react/style.css'; // This only needs to be imported once in your app

import Video from './Video';

const images = [
  Video
];

export default class LbButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
    this.closeLightbox = this.closeLightbox.bind(this);
  }
  closeLightbox() {
    this.setState({
      isOpen: false
    });
  }
  render() {
    const {
      photoIndex,
      isOpen
    } = this.state;

    return (
      <div>
        <Button
          color="white"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => this.setState({ isOpen: true })}
        >
          <i className="fas fa-play" />Watch video
        </Button>

        {isOpen && (
          <Lightbox
            style={{zIndex:900000000}}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={this.closeLightbox}
          />
        )}
      </div>
    );
  }
}
