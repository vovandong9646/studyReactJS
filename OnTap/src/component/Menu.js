import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

var links = [
    {
        to: "/",
        exact: true,
        label : "Home"
    },
    {
        to: "/products",
        exact: false,
        label : "quan ly san pham"
    }
];

var CustomLinks = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active = match ? "active" : "";
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                );
            }}
        />
    );
}

class ProductItem extends Component {

    showMenuLinks = (links) => {
        var result = null;
        result = links.map((link, index)=>{
            return (
                <CustomLinks 
                    key={index}
                    to={link.to}
                    activeOnlyWhenExact={link.exact}
                    label={link.label}
                />
            );
        });
        return result;
    }

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
                    <a className="navbar-brand">Demo React</a>
                </div>
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        { this.showMenuLinks(links) }
                    </ul>
                    
                </div>
            </nav>
            
        );
    }
}

export default ProductItem;
