import React, { Component } from 'react';
import * as action from './../actions/index';
import { connect } from 'react-redux';

class DataTableItem extends Component {

  onHandleDelete = () => {
    this.props.onDeleteTask(this.props.task.id);
  };

  onHandleEdit = () => {
    this.props.openForm();
    this.props.onUpdateTask(this.props.task);
  };

  render() {
    
    var { task,index } = this.props;
    
    return (
        <tr>
          <td>{ index + 1 }</td>
          <td>{ task.name }</td>
          <td className="text-center">
              <span className={ task.status ? "label label-success" : "label label-danger"}>
                  { task.status ? "Kích Hoạt" : "Ẩn" }
              </span>
          </td>
          <td className="text-center">
              <button type="button" className="btn btn-warning" onClick={ this.onHandleEdit }>
                  <span className="glyphicon glyphicon-ok-circle"></span> Sửa
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger" onClick={ this.onHandleDelete }>
                  <span className="glyphicon glyphicon-trash"></span> Xóa
              </button>
          </td>
      </tr>
      
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask : (id) => {
      dispatch(action.deleteTask(id));
    },
    onUpdateTask : (task) => {
      dispatch(action.updateTask(task));
    },
    openForm : () => {
      dispatch(action.openForm());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTableItem);
