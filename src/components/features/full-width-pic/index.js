import React from 'react';

import pic from '../../../pics/cropped pics/mountain.jpg';
import './style.css';

const FullWidthPic = () => {
  return (
    <div id="full-pic" className="full-pic">
      <img src={pic} />
    </div>
  );
};

export default FullWidthPic;
