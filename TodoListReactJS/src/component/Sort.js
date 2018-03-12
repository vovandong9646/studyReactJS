import React, { Component } from 'react';

class Search extends Component {
  // sort thi minh se lay tasks.sort(a,b) if(a.name>b.name) return 1 else -1 ,  0
  // do do ta se lay name va sort(1,-1) (0 la no bang roi)
  // 1: tang dan
  // 0: bang
  // -1 : giam dan
  constructor(props){
    super(props);
    this.state = {
      sortName: "",
      sortStatus: ""
    };
  };
  onSortJS = (name,status) => {  
    this.setState({
      sortName: name,
      sortStatus: status
    });
    this.props.onSortControl(name,status);
  }

  render() {
    return (
       <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Sắp Xếp <span className="glyphicon glyphicon-circle-arrow-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li onClick={() => this.onSortJS('name',1)}>
                <a role="button">
                    <span className="glyphicon glyphicon-sort-by-alphabet"></span> Tên A-Z <span className={this.state.sortName === 'name' && this.state.sortStatus === 1 ? "glyphicon glyphicon-ok" : ""}></span>
                </a>
              </li>
              <li onClick={() => this.onSortJS('name',-1)}>
                  <a role="button">
                      <span className="glyphicon glyphicon-sort-by-alphabet-alt"></span> Tên Z-A <span className={this.state.sortName === 'name' && this.state.sortStatus === -1 ? "glyphicon glyphicon-ok" : ""}></span>
                  </a>
              </li>
              <li role="separator" className="divider"></li>
              <li onClick={() => this.onSortJS('status',1)}><a role="button">Trạng Thái Kích Hoạt <span className={this.state.sortName === 'status' && this.state.sortStatus === 1 ? "glyphicon glyphicon-ok" : ""}></span></a></li>
              <li onClick={() => this.onSortJS('status',-1)}><a role="button">Trạng Thái Ẩn <span className={this.state.sortName === 'status' && this.state.sortStatus === -1 ? "glyphicon glyphicon-ok" : ""}></span></a></li>
          </ul>
      </div>
    );
  }
}

export default Search;
