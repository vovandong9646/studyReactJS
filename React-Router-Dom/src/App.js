import React, { Component } from 'react';
import './App.css';
import Menu from './component/Menu';
import HomePage from './component/HomePage';
import About from './component/About';
import NotFound from './component/NotFound';
import Products from './component/Products';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

var menuContent = [
  {
    path : "/",
    exact : true,
    main : () => <HomePage />
  },
  {
    path : "/about",
    exact : false,
    main : () => <About />
  },
  {
    path : "/products",
    exact : false,
    main : ({match}) => <Products match={match}/>
  },
  {
    path : "",
    exact : false,
    main : () => <NotFound />
  }
];

class App extends Component {

  showMenuContent = (menuContent) => {
    var result = null;
    result = menuContent.map((menu, index)=>{
      return (
        <Route 
          key={index}
          path={menu.path}
          exact={menu.exact}
          component={menu.main}
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
              { this.showMenuContent(menuContent) }   
          </div>
        </Router>
    );
  }
}

export default App;
