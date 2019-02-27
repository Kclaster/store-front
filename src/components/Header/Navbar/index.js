import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/about">
        Who We Are
      </Link>
      <Link className="link" to="/services">
        Services
      </Link>
      <Link className="link" to="/kayak">
        Kayak Kodiak
      </Link>
      <Link className="link" to="/shop">
        Shop
      </Link>
      <Link className="link" to="/team">
        The Team
      </Link>
    </div>
  );
};

export default Navbar;
