/*eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory } from 'react-router';

import './styles/base/_normalize.scss';
import './styles/shared.scss';

import routes from './routes';
import {loadProducts} from './actions/productActions';


const store = configureStore();
store.dispatch(loadProducts());


render(
	<Provider store={store}>
		<Router history ={browserHistory} routes = {routes} />
	</Provider>,
	document.getElementById('app')
);
