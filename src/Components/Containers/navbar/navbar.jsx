import React, {Component} from 'react';  
import {  NavLink } from 'react-router-dom';  
import './navbar.css';  
import 'bootswatch/dist/sandstone/bootstrap.css';  
  
  
  
  class Navbarapp extends React.Component {  
    constructor(props) {  
      super(props);  
    } 
    render() {  
      return (  
        <section id = "navbarapp" name = "navbarapp" className = "bg-primary navbar-viewport">  
        <div className = "container" id = "navigbar">  
        <div className = "row">  
        <div className = "col-12 col-md-12 col-sm-12" >  
        <nav className="navbar navbar-expand-lg navbar-dark pl-0">  
        <a className="navbar-brand" href="#">APP.RU</a>  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">  
        <span className ="navbar-toggler-icon"></span>  
        </button>  
        <div className="collapse navbar-collapse" id="navbarNav" style = {{marginLeft: '1%'}}>  
        <ul className="navbar-nav mt-2 mt-lg-1 ml-2">  
        <li className="nav-item" style = {{marginLeft: '10%'}}>  
        <a className="nav-link"><NavLink activeClassName="active" to='/public/ex'>Ex</NavLink></a>  
        </li>
        </ul>  
        </div>  
        </nav>  
        </div>  
        </div>  
        </div>  
        </section>  
        );  
    }  
  }  

export default Navbarapp;  
  
