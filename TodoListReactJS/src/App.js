import React, { Component } from 'react';
import './App.css';
import FormAdd from './component/FormAdd';
import Control from './component/Control';
import DataTable from './component/DataTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      isDisplayForm : true,
      taskEdit : null,
      filter : {
        name : "",
        status:-1
      },
      search: "",
      sort:{
        name: "",
        by: ""
      }
    };
  }

  rand() {
    return Math.floor((Math.random() + 1) * 0x100000).toString(16);
  }

  randomId() {
    var ran = this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand();
    return ran;
  }

  // khi f5 lai khong bi mat gia tri trong localStorage
  componentWillMount() {
    this.onCloseFormAdd();
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = localStorage.getItem('tasks');
      tasks = JSON.parse(tasks);
      
      this.setState({
        tasks : tasks
      });
    }
  }

  onToggleClose = () => {
    
    if(this.state.isDisplayForm && this.state.taskEdit !== null) {
       this.setState({
        isDisplayForm : true,
        taskEdit:null
      });
    } else {
      this.setState({
        isDisplayForm : !this.state.isDisplayForm,
        taskEdit:null
      });
    } 
  }

  onCloseFormAdd = () => {
    this.setState({
      isDisplayForm : false
    });
  }

  xuLySubmitAppJS = (data) => {
    
    var { tasks } = this.state;
    if(data.id === '') {
      data.id = this.randomId();

      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    // vi data thieu 1 truong id nen gio ta them id vao
    // Clear di taskEdit để hiển thị thêm

    this.setState({
      tasks : tasks,
      taskEdit : null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onDeleteXyLy = (id) => {
    var { tasks } = this.state;
    // find index
   var index = this.findIndex(id);
    if(index !== -1) {
       tasks.splice(index,1);
       this.setState({
        tasks : tasks
       });
    }
    localStorage.setItem('tasks',tasks);
  }

  findIndex(id) {
    var { tasks } = this.state;
    var result = -1;
    tasks.map((t,index) => {
      if(t.id === id) {
        result = index;
      }
    });
    return result;
  }

  onOpenFormEdit = () => {
    this.setState({
      isDisplayForm : true
    });
  }

  onEditXuLy = (id) => {
    this.onOpenFormEdit();
    var index = this.findIndex(id);
    var { tasks } = this.state;
    this.setState({
      taskEdit : tasks[index]
    });
  }

  onFilterAppJS = (name,status) => {
    this.setState({
      filter : {
        name : name.toLowerCase(),
        status: status
      }
    });
  }

  onSearchAppXL = (data) => {
    this.setState({
      search: data.toLowerCase()
    });
  }

  onSortAppJS = (name,by) => {
    this.setState({
      sort: {
        name:name,
        by:by
      }
    });
  }

  render() {
    var { isDisplayForm,tasks,taskEdit,filter,search,sort } = this.state;
    var elmFormAdd = isDisplayForm ?  <FormAdd closeFormAdd={this.onCloseFormAdd} 
                                               onSubmitAppJS={this.xuLySubmitAppJS}
                                               taskEdit={ taskEdit }
                                       /> : '';
    if(sort) {
      if(sort.name === 'name') {
        tasks.sort((a,b)=>{
          if(a.name > b.name) return (sort.by);
          else if(a.name < b.name) return -(sort.by);
          else return 0;
        });
      } else {
        tasks.sort((a,b)=>{
          if(a.status > b.status) return -(sort.by);
          else if(a.status < b.status) return (sort.by);
          else return 0;
        });
      }
    }

    if(search) {
      tasks = tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(search) !== -1;
      });
    }

    if(filter) {
        // filter theo ten (search)
        if(filter.name) {
           tasks = tasks.filter((task)=>{
            // filter het tat ca du lieu roi neu tim duoc thi tra ve vi tri (khong tim duoc thi tra ve -1)
            return task.name.toLowerCase().indexOf(filter.name) !== -1; 
          });
        }

        // C1: filter trang thai
        tasks = tasks.filter((task)=>{
          if(filter.status === -1) {
            return task;
          } else {
            return filter.status === (task.status === true ? 1 : 0);
          }
        });

        // Cach 2: filter trang thai
        // if(filter.status === -1) {
        //   tasks = tasks.filter((task)=>{
        //     return task;
        //   });
        // } else {
        //   tasks = tasks.filter((task)=>{
        //     if((task.status === true ? 0 : 1) === filter.status) {
        //       return task;
        //     }
        //   });
        // }
    }
    
    return (
        <div className="container">
        <div className="text-center">
            <h1>TODO LIST</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              { elmFormAdd }
            </div>
            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>

                <Control onToggleClose={ this.onToggleClose }
                         onSearchApp={this.onSearchAppXL}
                         onSortApp={this.onSortAppJS}
                />

                <div className="row mt-15">
                    <DataTable tasks={tasks} 
                               onDeleteAppJS={this.onDeleteXyLy}
                               onEditAppJS={this.onEditXuLy} 
                               filterAppJS={this.onFilterAppJS}
                    />
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
