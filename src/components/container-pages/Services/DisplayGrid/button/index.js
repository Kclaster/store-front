import React from 'react';

import './style.css';

const Button = props => {
  return (
    <button
      id={props.index}
      onClick={e => props.onTouch(e, true)}
      className="service-button"
    >
      {props.title}
    </button>
  );
};

export default Button;
