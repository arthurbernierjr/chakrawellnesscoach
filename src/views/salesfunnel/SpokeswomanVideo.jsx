import React from 'react';
const video = 'https://player.vimeo.com/video/303584193'

const Video = () => (
  <iframe
    title="Be Your Own Spiritual Nurse"
    width= '80%'
    height='80%'
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
);

export default Video;
