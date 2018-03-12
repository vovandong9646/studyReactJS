import React, { Component } from 'react';

class Click extends Component {

  onClickKhongParams() {
   alert("click khong truyen tham so");
  }

  onClickCoParams(buy) {
   
    console.log(buy);
  }

  render() {
    return (
      
      <div className="jumbotron">
          <h4>{this.props.children}</h4>
          <img style={{width:"250px"}} src={this.props.image} />
          <p style={{ marginTop:"10px" }}>{this.props.price}</p>
          <label>Buy: {this.props.buy}</label>
          <p>
            <a className="btn btn-info" onClick={ this.onClickKhongParams }>Click Loai 1</a>
            <a className="btn btn-danger" onClick={ () => this.onClickCoParams(this.props.buy) }>Click Loai 2</a>
          </p>
      </div>

    );
  }
}

export default Click;
