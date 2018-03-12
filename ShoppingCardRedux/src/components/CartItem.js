import React, { Component } from 'react';
import * as MessageType from './../constants/MessageType';

class CartItem extends Component {
    deleteItem(product) {
        this.props.deleteItem(product);
        this.props.changeMessage(MessageType.DELETE_SUCESS);
    };
    onUpdateItem(product, quantity) {
        this.props.onUpdateItem(product, quantity);
        this.props.changeMessage(MessageType.UPDATE_SUCCESS);
    };
  render() {
    var { cart } = this.props;
    var { product, quantity } = cart;
    return (
        <tr>
            <th scope="row">
                <img src={ product.image }
                    alt={ product.name } className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{ product.name }</strong>
                </h5>
            </td>
            <td>{ product.price }$</td>
            <td className="center-on-small-only">
                <span className="qty">{ quantity }</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label onClick={ ()=> this.onUpdateItem(product,quantity - 1) }  className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>—</a>
                    </label>
                    <label onClick={ ()=>{ this.onUpdateItem(product,quantity + 1) } } className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{ product.price * quantity }$</td>
            <td>
                <button onClick={ ()=>this.deleteItem(product) } type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
    );
  }
}

export default CartItem;
