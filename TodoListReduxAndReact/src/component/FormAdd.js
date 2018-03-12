import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class FormAdd extends Component {

    constructor(props){
        super(props);
        this.state = {
          id : "",
          name : "",
          status : true
        };
    }

    onCloseForm = ()=> {
       this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            id: "",
            name:"",
            status:true
        });
    }

    onReset = (event) => {
        event.preventDefault();
        this.setState({
            name:"",
            status:true
        });
    }

    componentWillMount() {
        var { taskEdit } = this.props;
        if(taskEdit && taskEdit.id !== '') {
            this.setState({
                id : taskEdit.id,
                name: taskEdit.name,
                status: taskEdit.status
            });
        } else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.taskEdit) {
            this.setState({
                id : nextProps.taskEdit.id,
                name: nextProps.taskEdit.name,
                status: nextProps.taskEdit.status
            });
        } else if(!nextProps.taskEdit) {
            this.onClear();
        }

    }

    onHandleChangeData = (event) => {
        var { name,value } = event.target;
        if(name === 'status') {
            value = event.target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    SubmitForm = (event) => {
       event.preventDefault();
       this.props.onAddTask(this.state);
       this.onCloseForm();
       this.onClear();
    }

  render() {
    return (
        <div className="panel panel-success">
            <div className="panel-heading addCV">
                <h3 className="panel-title">{ this.state.id === '' ? 'Thêm Công Việc' : 'Cập nhập Công việc'}</h3>
                <span className="glyphicon glyphicon-remove-sign" onClick={this.onCloseForm}></span>
            </div>
            <div className="panel-body">
                <form onSubmit={this.SubmitForm}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" 
                               name="name" 
                               className="form-control" 
                               placeholder="Nhập tên công việc vào đây..."
                               value={this.state.name}
                               onChange={this.onHandleChangeData}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" 
                            required="required" 
                            name="status"
                            value={this.state.status}
                            onChange={this.onHandleChangeData}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning"><span className="glyphicon glyphicon-plus"></span> Thêm</button>&nbsp;
                        <button type="button" onClick={this.onReset} className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span> Hủy Bỏ</button>
                    </div>
                </form>
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
        onAddTask : (task) => {
            dispatch(action.saveTask(task));
        },
        onCloseForm : () => {
            dispatch(action.closeForm());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
