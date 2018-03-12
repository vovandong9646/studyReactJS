import React, { Component } from 'react';
import DataTableItem from './DataTableItem';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterName : "",
      filterStatus : -1
    };

  }

  onHandleChange = (event) => {
    var { name,value } = event.target;
    if(name === 'filterStatus') {
      value = parseInt(value, 10);
    }
    this.props.filterAppJS(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus 
    );
    this.setState({
      [name] : value
    });
  }

  onDeleteDataTable = (id) => {
    this.props.onDeleteAppJS(id);
  }

  onEditDataTable = (id) => {
    this.props.onEditAppJS(id);
  }

  render() {

    var { tasks } = this.props;
   
    var elmTasks = tasks.map((task,index)=>{
      return <DataTableItem key={task.id} 
                            index={index} 
                            task={task} 
                            onDeleteDataTableItem={this.onDeleteDataTable}
                            onEditDataItem={this.onEditDataTable} />
    });
    return (
       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
              <thead>
                  <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td></td>
                      <td>
                          <input type="text" 
                                 className="form-control" 
                                 placeholder="Tìm kiếm bằng data table ..."
                                 name="filterName"
                                 value={this.state.filterName}
                                 onChange={this.onHandleChange}
                          />  
                      </td>
                      <td>
                          <select className="form-control" 
                                  name="filterStatus" 
                                  value={this.state.filterStatus}
                                  onChange={this.onHandleChange}
                          >
                              <option value={-1}>Tất Cả</option>
                              <option value={0}>Ẩn</option>
                              <option value={1}>Kích Hoạt</option>
                          </select>
                      </td>
                      <td></td>
                  </tr>

                  { elmTasks }

              </tbody>
          </table>
      </div>
      
    );
  }
}

export default Search;
