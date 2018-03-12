import React, { Component } from 'react';

var products = [
    {
        id : 1,
        name : "iphone 6 Plus",
        price : 300
    },
    {
        id : 2,
        name : "sam sung galaxy s8 edge",
        price : 299
    },
    {
        id : 3,
        name : "Oppo F1S",
        price : 199
    }
];

class Products extends Component {

    showProducts = (products) => {
        var result = null;
        result = products.map((product, index)=>{
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>
                        {product.name}
                    </td>
                    <td>{product.price} $</td>
                </tr>
            );
        });
        return result;
    }

  render() {
      console.log(this.props.match);
    return (
        <div>
        <h1 style={{"marginBottom":30}}>Day la trang <span className="alert alert-info">Products</span></h1>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                { this.showProducts(products) }
            </tbody>
        </table>
        </div>
        
        
    );
  }
}

export default Products;