import React, { Component } from 'react';

class CartResult extends Component {
    totalPrice(carts) {
        var result = 0;
        if(carts.length > 0) {
            for(var i=0; i<carts.length; i++) {
                result += (carts[i].product.price * carts[i].quantity);
            }
        } 
        return result;
    }
  render() {
    var { carts } = this.props;
    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{ this.totalPrice(carts) }$</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
  }
}

export default CartResult;
