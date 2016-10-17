import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import './styles/base/_normalize.scss';
import './styles/shared.scss';
import { loadProducts } from './actions/productActions';
import routes from './routes';

const store = configureStore();
store.dispatch(loadProducts());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
   document.getElementById('app')
);
