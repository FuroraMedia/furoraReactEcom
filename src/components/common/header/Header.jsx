import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import Navigation from './navigation/Navigation';
import Search from './search/Search';
import Account from './account/Account';
import Basket from './basket/Basket';

const Header = () => {
	return (
  <header className="header">
  <div className="logo" id="logo"></div>
  <nav>
  <Navigation />
  </nav>

  <ul className="sign-in-links col-md-3">
  <li className="search"><Search /></li>
  <li className="account"><Account /></li>
  <li className="shopping-bag"><Basket /></li>
  </ul>

  </header>
  );
};

export default Header;
