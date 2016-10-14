import React from 'react';
import { Route, IndexRoute, Link }  from 'react-router';

import App from './components/App';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ProductListPage from './components/productListing/ProductListPage';
// import ProductViewPage from './components/productView/ProductViewPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="products" component={ProductListPage} />
		{/* <Route path="products/:id" component={ProductViewPage} /> */}
	</Route>
);
