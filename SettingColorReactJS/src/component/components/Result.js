import React, { Component } from 'react';

class Result extends Component {

  colorResult(color) {
    return{
      color: color
    };
  }

  backgroundResultColor(color,font) {
    return{
      backgroundColor: color,
      fontSize: font
    };
  }

  render() {

    return (
      <div className="col-md-12 result">
        <p>backgroundColor: <span style={this.colorResult(this.props.color)}>
          {this.props.color}</span> - fontSize: {this.props.fontSize}px
        </p>
        <div style={this.backgroundResultColor(this.props.color, this.props.fontSize)} >
          Chào mừng bạn đến với demo ReactJs của chúng tôi
        </div>
      </div>
    );
  }
}

export default Result;
