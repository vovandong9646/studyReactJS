import React, { Component } from 'react';
import DataTableItem from './DataTableItem';
import { connect } from 'react-redux';
import * as action from './../actions/index.js';

class DataTable extends Component {

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
    
    var filter = {
      filterName: name === 'filterName' ? value : this.state.filterName,
      filterStatus: name === 'filterStatus' ? value : this.state.filterStatus 
    }
    this.props.onFilterTask(filter);
    this.setState({
      [name] : value
    });
  }

  render() {

    var { tasks,filter,search,sort } = this.props;
    
    // filter.
    
      if(filter.filterName) {
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1;
        });
      }

      tasks = tasks.filter((task)=>{
        if(filter.filterStatus === -1) {
          return task;
        } else {
          return task.status === (filter.filterStatus === 1 ? true : false);
        }
      });

       if(search) {
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
      }

      if(sort) {
        if(sort.categories === 'name') {
            tasks.sort((a,b)=>{
              if(a.name > b.name) return (sort.orderBy);
              else if(a.name < b.name) return -(sort.orderBy);
              else return 0;
            });
        } 
        if(sort.categories === 'status') {
          tasks.sort((a,b)=>{
            if(a.status > b.status) return -(sort.orderBy);
            else if(a.status < b.status) return (sort.orderBy);
            else return 0;
          });
        }
      }
      
    

    var elmTasks = tasks.map((task,index)=>{
      return <DataTableItem key={task.id} 
                            index={index} 
                            task={task} 
                            />
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

const mapStateToProps = (state) => {
  return{
    tasks : state.tasks,
    filter : state.filter,
    search : state.search,
    sort : state.sort
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTask : (filter) => {
      dispatch(action.filterTask(filter));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
