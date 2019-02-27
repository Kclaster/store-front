import React from 'react';
import { connect } from 'react-redux';
import servicePic from '../../../pics/cropped pics/services.jpg';
import swagPic from '../../../pics/cropped pics/swag.JPG';
import teamsPic from '../../../pics/cropped pics/teams.jpg';
import bikes from '../../../pics/cropped pics/bikes.jpg';
import kayak from '../../../pics/cropped pics/kayak.jpg';

import './style.css';

let picsArr = [
  { pic: servicePic, title: 'Services' },
  { pic: swagPic, title: 'Swag' },
  { pic: teamsPic, title: 'Teams' },
  { pic: bikes, title: 'Bikes' },
  { pic: kayak, title: 'Kayak' }
];

const HoveringSnippet = props => {
  return (
    <div className="snippet-container">
      {picsArr.map(cur => {
        return (
          <div className="snippet">
            <h2 className="snippet-title">{cur.title}</h2>
            <img src={cur.pic} />
            <div className="onhover" />
          </div>
        );
      })}
    </div>
  );
};

export default HoveringSnippet;
