import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';

import css from './productListing.scss';

class ProductView extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  productRow(product, index){
    return <div key={index}>{product.title}</div>;
  }

	render() {
    const {products} = this.props;

    return (
			<div>
        <ProductList products={products} />
			</div>
		);
	}
}

ProductView.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
