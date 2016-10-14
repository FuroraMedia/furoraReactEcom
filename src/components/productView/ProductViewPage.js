import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';


class ProductView extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  productRow(product, index){
    return <div key={index}>{product.title}</div>;
  }

	render() {
    return (
			<div>
				<h1>Product View</h1>

        {this.props.products.map(this.productRow)}
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
