import React from 'react';
import video from './../img/video.mp4';

function Video() {
  return (
    <video id="promo-video" loop muted autoPlay>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
export default Video;