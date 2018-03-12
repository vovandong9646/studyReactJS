import React, { Component } from 'react';
import Products from './../components/Products';
import { connect } from 'react-redux';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import * as action from './../actions/index';

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (         
        <Products >
            { this.loopProduct(products) }
        </Products>
    );
  }

  loopProduct = (products) => {
    var result = null;
    if(products.length > 0) {
        result = products.map((product, index)=>{
            return <Product 
                            key = {index}
                            product={product}
                            addToProduct = {this.props.addToProduct}
                            changeMessage = { this.props.onChangeMessage }
                    />
                           
        });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired,
            price : PropTypes.number.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => {
    return {
        products : state.ReducersProducts
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToProduct : (product) => {
            dispatch(action.addItem(product,1));
        },
        onChangeMessage : (message) => {
            dispatch(action.changeMessage(message));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
