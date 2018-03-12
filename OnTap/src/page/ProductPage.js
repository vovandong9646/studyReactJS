import React, { Component } from 'react';
import Products from './../component/Products';
import { connect } from 'react-redux';
import ProductItem from './../component/ProductItem';
import * as action from './../action/index';
import { Link } from 'react-router-dom';

class ProductPage extends Component {

  addProduct = () =>{
    this.props.addProduct();
  };

  componentDidMount() {
    this.props.fetchDataFromAPI();
  };

  render() {
    var { products } = this.props;
    return (
        <div>
            <Link to="/add" className="btn btn-primary" onClick={ this.addProduct } >Them san pham</Link>
            <Products>
              { this.showProducts(products) }
            </Products>
        </div>
        
        
    );
  }

  showProducts = (products) => {
    var result = null;
    result = products.map((product, index)=>{
      return <ProductItem 
                index={index}
                key={product.id}
                product={product}
      />
    });
    return result;
  }

}

const mapStateToProps = state => {
  return {
    products : state.products
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataFromAPI : () => {
      dispatch(action.fetchDataFromAPI());
    },
    addProduct: () => {
      dispatch(action.addProduct());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
