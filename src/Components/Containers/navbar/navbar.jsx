import React, {Component} from 'react';  
import { Link } from 'react-router-dom'; 
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './navbar.css';  
 
class Navbarapp extends React.Component {  
    constructor(props) {  
      super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };  
    } 

    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
    });
    }

    render() {  
      return (  
        <section id = "navbarapp" name = "navbarapp" className = "bg-primary navbar-viewport">  
            <div className = "container" id = "navigbar">  
                <div className = "row">  
                    <div className = "col-12 col-md-12 col-sm-12" >  
                        <nav className="navbar navbar-expand-lg navbar-dark pl-0">  
                            <a className="navbar-brand" href="#">APP.RU</a>  
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        
                            <Collapse isOpen={!this.state.collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <Link to="/public/ex" style = {{color: 'white', fontSize: '14px'}}
                                        className = "pl-4"><b>EX</b></Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </nav>  
                    </div>  
                </div>  
        </div>  
        </section>  
        );  
    }  
  }  

export default Navbarapp;  
  
