import React from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const pathName = useLocation().pathname;

  return (
    <header className={pathName === '/' ? 'header_gray' : 'header'}>
      <div className="header__wrapper">
        <Link to="/" className="logo header__link-logo"><img src={logo} alt="Логотип" /></Link>
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  );
}

export default Header;
