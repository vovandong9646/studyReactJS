import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {

	onToggleForm = () => {
		this.props.onToggleClose();
	}

	onSearchControlXL = (data) => {
		this.props.onSearchApp(data);
	}

	onSortControlJS = (name,by) => {
		this.props.onSortApp(name,by);
	}

  render() {
    return (
        <div>
	     	<button type="button" 
	     			className="btn btn-primary"
	     			onClick={this.onToggleForm}
	     	>
	        	<span className="glyphicon glyphicon-plus mr-5"></span>Thêm Công Việc
		    </button>
		    <div className="row mt-15">
		       	<Search onSearchControl={this.onSearchControlXL}/>
		        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		            <Sort onSortControl={this.onSortControlJS}/>
		        </div>
		    </div>
	    </div>
    );
  }
}

export default Control;
