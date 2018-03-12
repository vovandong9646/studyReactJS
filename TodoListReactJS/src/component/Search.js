import React, { Component } from 'react';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      search : ''
    };
  }

  onHandleChange = (event) => {
    this.setState({
      search : event.target.value
    });
  }

  onHandleSearch = (event) => {
    event.preventDefault();
    this.props.onSearchControl(this.state.search);
  };

  render() {
    return (
       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input type="text" className="form-control" 
                       placeholder="Nhập từ khóa..." 
                       name="search"
                       value={this.state.search}
                       onChange={this.onHandleChange}
                />
                <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.onHandleSearch}>
                    <span className="glyphicon glyphicon-search mr-5"></span> Tìm
                </button>
                </span>
            </div>
        </div>  
      
    );
  }
}

export default Search;
