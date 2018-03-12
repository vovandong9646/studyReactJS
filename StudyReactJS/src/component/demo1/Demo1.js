import React, { Component } from 'react';
import './Demo1.css';

class Demo1 extends Component {
  render() {

    var name = "DongVV2";
    function showInfo() {
      return (
        <div> 
          <h4>Ten: DongVV2</h4>
          <p>Tuoi: 22</p>
        </div>
      )
    };

    var info = {
      name: "DongVV2",
      age:21,
      address: "Hoi An"
    };

    var arrayInfo = [
      {
        id: 1,
        name:"DongVV1",
        age: 21
      },
      {
        id: 2,
        name:"DongVV2",
        age: 22
      },
      {
        id: 3,
        name:"DongVV3",
        age: 23
      }
    ];

    var information = arrayInfo.map((user,index)=>{
      return (
        <div key="{index}">
          <h2>Name: { user.name }</h2>
          <p>Age: { user.age }</p>
        </div>
      )
    });

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h3>Name: { name }</h3>
            <hr/>
            { showInfo() }
            <hr/>
            Name: {info.name}<br/>
            Tuoi: {info.age}<br/>
            Dia chi: {info.address}<br/>
            <hr/>
            {information}
          </div>
        </div>
      </div>
    );
  }
}

export default Demo1;
