import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const ProductListRow = ({product}) => {
  return (
    <div className="product-listing__item col-xs-4">
      <div><a href={product.watchHref} target="_blank">Watch</a></div>
      <div><Link to={'/product/' + product.id}>{product.title}</Link></div>
      <div>{product.brand}</div>
      {/* <div>{product.short-description}</div> */}
      <div>{product.price}</div>
    </div>
  )
}

ProductListRow.PropTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
