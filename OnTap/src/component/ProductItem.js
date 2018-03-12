import React, { Component } from 'react';

class ProductItem extends Component {

    render() {
        var { product,index } = this.props;
        var status = product.status === true ? "con hang" : "het hang";
        var statusStyle = product.status === false ? "success" : "danger";
        return (
            <tr>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td><span className={`alert alert-${statusStyle}`}>{status}</span></td>
                <td>
                    <button className="btn btn-info">edit</button>
                    <button className="btn btn-danger">delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
