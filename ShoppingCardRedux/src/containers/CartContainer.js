import React, { Component } from 'react';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import Cart from './../components/Cart';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class CartContainer extends Component {
  render() {
    var { carts } = this.props;
    return (
        <Cart>
            { this.loopCartItem(carts) }
            { this.totalPrice(carts) }
        </Cart>
    );
  }

  loopCartItem(carts) {
    var result = null;
    if(carts.length > 0) {
        result = carts.map((cart,index)=>{
            return <CartItem 
                            key={index} 
                            cart={cart} 
                            deleteItem={this.props.deleteItem} 
                            onUpdateItem = {this.props.onUpdateItem}
                            changeMessage = { this.props.onChangeMesage }
                    />
        });
    }
    return result;
  };

  totalPrice(carts) {
    var result = null;
    if(carts.length > 0) {
        result = <CartResult carts={carts} />
    }
    return result;
  }

}

const mapStateToProps = state => {
    return {
        carts : state.ReducersCarts
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteItem : (product) => {
            dispatch(action.deleteItem(product));
        },
        onUpdateItem : (product, quantity) => {
            dispatch(action.updateItem(product, quantity));
        },
        onChangeMesage : (message)=> {
            dispatch(action.changeMessage(message));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
