import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import { connect } from 'react-redux';
import * as action  from './../actions/index';

class Control extends Component {

	onToggleForm = () => {
		if(this.props.taskEdit.id !== '') {
			this.props.onOpenForm();
		} else {
			this.props.onToggleForm();
		}
		this.props.onClear({
			id: "",
			name: "",
			status: true
		});
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
		       	<Search />
		        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		            <Sort />
		        </div>
		    </div>
	    </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		taskEdit : state.taskEdit
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onToggleForm : () => {
			dispatch(action.toggleForm());
		},
		onClear : (task) => {
			dispatch(action.updateTask(task));
		},
		onOpenForm : () => {
			dispatch(action.openForm());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
