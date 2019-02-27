import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../pics/58black.png';
import Navbar from './Navbar';

import './style.css';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
