import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

var linkMenu = [
  {
      label : "HomePage",
      to    : "/",
      exact : true
  },
  {
      label : "About",
      to    : "/about",
      exact : false
  },
  {
    label : "Products",
    to    : "/products",
    exact : false
}
];

var CreateCustomLink = ({label, to , activeOnlyWhenExact}) => {
    return (
        <Route 
            path={to} 
            exact={activeOnlyWhenExact}
            children={
                ({match})=>{
                    var active = match ? "active" : "";
                    return (
                        <li className={`${active}`}>
                            <Link to={to} className={`ok ${active}`} >{label}</Link>
                        </li>
                    );
                }
            }  
        />
    );
};

class Menu extends Component {
    
    showMenuLink = (linkMenu) => {
        var result = null;
        if(linkMenu.length > 0) {
            result = linkMenu.map((link,index)=>{
                return (
                    <CreateCustomLink 
                        key={index} 
                        label={link.label}
                        to={link.to}
                        activeOnlyWhenExact={link.exact}
                    />
                );
            });
        }
        return result;
    };

  render() {
    return (
        <nav className="navbar navbar-default">
           
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">Demo ReactRouterDom</a>
            </div>
        
            {/* NavLink */}
            {/* <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink exact to="/" activeStyle={{
                            coler:"red",
                            backgroundColor: "yellow"
                        }} >HomePage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{
                            coler:"red",
                            backgroundColor: "yellow"
                        }}>About</NavLink>
                    </li>
                </ul> 
            </div> */}

            {/* CustomLink */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                 { this.showMenuLink(linkMenu) }
                </ul> 
            </div>

        </nav>
        
    );
  }
}

export default Menu;
