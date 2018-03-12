import React, { Component } from 'react';

class ColorPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors : ["red","blue","yellow","green","pink","black","orange"]
    };
  }

  setColor(color) {
    return{
      backgroundColor : color
    };
  }

  clickColor(color) {
    this.props.truyenColorSangAppJS(color);
  }

  render() {

    var elmColors = this.state.colors.map((color,index)=>{
      return <span 
                  key={index} 
                  style={ this.setColor(color) }
                  className={this.props.color === color ? 'active' : ''}
                  onClick={()=>this.clickColor(color)}
              ></span>
    });

    return (
       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Style</h3>
          </div>
          <div className="panel-body">
            { elmColors }
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
