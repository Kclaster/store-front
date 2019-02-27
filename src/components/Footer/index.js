import React from 'react';
import logo from '../../pics/facebook-logo.png';

import './style.css';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/58degrees/">
        <img className="logo" src={logo} />
      </a>
      <h5>CopyRight 58 Degrees North</h5>
      <div id="reference">
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/simpleicon"
          title="SimpleIcon"
        >
          SimpleIcon
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
    </div>
  );
};

export default Footer;
