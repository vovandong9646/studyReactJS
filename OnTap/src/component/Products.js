import React, { Component } from 'react';

class Products extends Component {

  render() {
    return (
        
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>stt</th>
                    <th>name</th>
                    <th>price</th>
                    <th>status</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                { this.props.children }
            </tbody>
        </table>
        
    );
  }
}

export default Products;
