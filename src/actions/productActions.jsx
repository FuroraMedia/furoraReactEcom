import * as types from './actionTypes';
import productApi from '../api/mockProductAPi';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function(dispatch) {
    return productApi.getAllProducts().then((products) => {
      dispatch(loadProductsSuccess(products));
    }).catch((error) => {
      throw(error);
    });
  };
}
