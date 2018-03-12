import React, { Component } from 'react';
import './App.css';
import FormAdd from './component/FormAdd';
import Control from './component/Control';
import DataTable from './component/DataTable';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    var { isDisplayForm, taskEdit } = this.props;
    
    var elmFormAdd = isDisplayForm ?  <FormAdd taskEdit={ taskEdit } /> : null;
    // if(sort) {
    //   if(sort.name === 'name') {
    //     tasks.sort((a,b)=>{
    //       if(a.name > b.name) return (sort.by);
    //       else if(a.name < b.name) return -(sort.by);
    //       else return 0;
    //     });
    //   } else {
    //     tasks.sort((a,b)=>{
    //       if(a.status > b.status) return -(sort.by);
    //       else if(a.status < b.status) return (sort.by);
    //       else return 0;
    //     });
    //   }
    // }

    
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

                <Control />

                <div className="row mt-15">
                    <DataTable  />
                </div>
            </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm : state.displayForm,
    taskEdit : state.taskEdit
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
