import React, { PropTypes } from 'react';
import ProductListItem from './ProductListRow.jsx';

const ProductList = products => (
  <div className="product-listing">
    {products.map(product =>
      <ProductListItem key={product.id} product={product} />
    )}
  </div>
);


ProductList.PropTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
