import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../pics/58black.png';
import Navbar from './Navbar';
import SignIn from './SignIn';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link className="logo" to="/">
          <img src={logo} />
        </Link>
        <Navbar />
        <SignIn />
      </div>
    );
  }
}

export default Header;
