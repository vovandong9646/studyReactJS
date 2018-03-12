import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/components/ColorPicker';
import FontSize from './component/components/FontSize';
import Reset from './component/components/Reset';
import Result from './component/components/Result';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "red",
      fontSize:8
    };
  }

  xulyColorBackground = (color) => {
    this.setState({
      backgroundColor: color
    });
  }

  xulySizeNhanDuoc = (size) => {
    this.setState({
      fontSize: (this.state.fontSize + size >=8 && this.state.fontSize + size <= 36) ? (this.state.fontSize + size) : (this.state.fontSize)
    });
  }

  resetJS = (value) => {
   if(value) {
      this.setState({
        backgroundColor: "red",
        fontSize:8
      });
    }
  }

  render() {
    return (
        <div className="container">
          <div className="row">
           <ColorPicker color={this.state.backgroundColor}
                        truyenColorSangAppJS={ this.xulyColorBackground }
           />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <FontSize chuyenSizeSangAppJS={this.xulySizeNhanDuoc} 
                        fontSize={this.state.fontSize}
              />
              <Reset truyenResetSangAppJS={this.resetJS}/>
            </div>
          </div>
          <div className="row">
            <Result color={this.state.backgroundColor}
                    fontSize={this.state.fontSize}
            />
          </div>
        </div>
    );
  }
}

export default App;
