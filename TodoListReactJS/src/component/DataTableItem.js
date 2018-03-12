import React, { Component } from 'react';

class DataTableItem extends Component {

  onHandleDelete = () => {
    this.props.onDeleteDataTableItem(this.props.task.id);
  };

  onHandleEdit = () => {
    this.props.onEditDataItem(this.props.task.id);
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

export default DataTableItem;
