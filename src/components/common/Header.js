import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

import Navigation from './navigation/Navigation';
import Search from './search/Search';

const Header = () => {
	return (
		<header className="header">

			<div className="navigation navigation--top">
				<div className="navigation navigation--language-selector"></div>
				<div className="navigation navigation--my-account"></div>
				<div className="navigation navigation--currency-selector"></div>
			</div>

			<Search />
			<Navigation />
		</header>
	);
};

export default Header;
