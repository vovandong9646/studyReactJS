import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Click from './component/events/click'

class App extends Component {
  render() {

    var products = [
      {
        id: 1,
        name: "Điện thoại iPhone X 64GB",
        image:"https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png",
        price:"29.990.000₫",
        buy:6
      },
       {
        id: 2,
        name: "Điện thoại Sony Xperia XA1 Plus",
        image:"https://cdn.tgdd.vn/Products/Images/42/112833/sony-xepria-xa1-plus-1-400x460.png",
        price:"6.490.000₫",
        buy:5
      },
       {
        id: 3,
        name: "Điện thoại Samsung Galaxy C9 Pro",
        image:"https://cdn.tgdd.vn/Products/Images/42/88397/samsung-galaxy-c9-pro-1-400x460.png",
        price:"8.990.000₫",
        buy:2
      },
       {
        id: 4,
        name: "Máy tính bảng Samsung Galaxy Tab E 9.6 (SM-T561)",
        image:"https://cdn.tgdd.vn/Products/Images/522/73280/samsung-galaxy-tab-e-96-sm-t561-400-400x400.png",
        price:"4.490.000₫",
        buy:4
      },
       {
        id: 5,
        name: "Pin sạc dự phòng 5.000 mAh eSaver Safari 2",
        image:"https://cdn.tgdd.vn/Products/Images/57/79354/pin-sac-du-phong-5000mah-esaver-safari-2-12-330x330.png",
        price:"200.000₫",
        buy:10
      }
    ];

    var sanpham = products.map((product,index)=>{
      /*truyen du lieu sang click.js*/
      return (
        <div key={index} className="col-md-4">
          <Click
                image={product.image}
                price={product.price}
                buy={product.buy}
                id={product.id}
          >{product.name}</Click> {/*cho name ra ngoai-> trong click.js goi this.props.children de lay*/}
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
          <div className="App col-md-12">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
               {/* <h1 className="App-title">Hello to ReactJS</h1>*/}
              </header>
             {/* <p className="App-intro">
               <Demo1/>
               <hr/>
               <Click/>
              </p>*/}
          </div>
        </div>
        <div className="row">
         { sanpham }
        </div>
      </div>
    );
  }
}

export default App;
