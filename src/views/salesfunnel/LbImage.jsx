import React, {
  Component
} from 'react';
import Lightbox from 'lightbox-react';
import Button from 'components/CustomButtons/Button'
import 'lightbox-react/style.css'; // This only needs to be imported once in your app

import Video from './SpokeswomanVideo';
import image from 'assets/img/screenshot.png';
const video = 'https://player.vimeo.com/video/303584193'

const images = [
  Video
];

export default class LbImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: true,
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
      <div style={{height:`60vh`, backgroundSize:`cover`}}>

        {isOpen && (<iframe
          title="Be Your Own Spiritual Nurse"
          width= '100%'
          height='100%'
          src= {`${video}`}
          style={{
            maxWidth: '97%',
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor:'purple'
          }}
        />

        )}
      </div>
    );
  }
}
// <Lightbox
//   mainSrc={images[photoIndex]}
//   onCloseRequest={this.closeLightbox}
// />
