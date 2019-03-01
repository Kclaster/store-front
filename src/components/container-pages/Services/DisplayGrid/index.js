import React from 'react';

import Button from './button';
import { services } from '../../../../data/index';
import './style.css';

const DisplayGrid = props => {
  return (
    <div className="display-grid-container">
      {services.map(function(cur, index) {
        return (
          <Button
            onTouch={props.onTouch}
            key={index}
            title={cur.title}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default DisplayGrid;
