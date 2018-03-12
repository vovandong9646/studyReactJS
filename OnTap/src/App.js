import React, { Component } from 'react';
import './App.css';
import Menu from './component/Menu';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

class App extends Component {

  showMenuContent = (routes) => {
    var result = null;
    result = routes.map((route,index)=>{
      return (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
        <Router>
          <div>
            <Menu />
            { this.showMenuContent(routes) }
          </div>
        </Router>
    );
  }
}

export default App;
