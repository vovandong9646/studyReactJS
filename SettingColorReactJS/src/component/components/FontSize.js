import React, { Component } from 'react';

class FontSize extends Component {

  kichthuoc(val){
    this.props.chuyenSizeSangAppJS(val);
  }

  render() {
    return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">FontSize Style</h3>
          </div>
          <div className="panel-body">
            <p>font-size: {this.props.fontSize}px</p>
            <button className="btn btn-warning" onClick={()=> this.kichthuoc(-2)} >Giam</button>
            <button className="btn btn-success" onClick={()=> this.kichthuoc(2)} >Tang</button>
          </div>
        </div>
    );
  }
}

export default FontSize;
