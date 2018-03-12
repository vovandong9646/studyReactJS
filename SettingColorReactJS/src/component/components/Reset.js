import React, { Component } from 'react';

class Reset extends Component {
 
 	clickReset = () => {
 		this.props.truyenResetSangAppJS(true);
 	}

  render() {

    return (
        <button className="btn btn-danger" onClick={this.clickReset }>Reset</button>
    );
  }
}

export default Reset;
