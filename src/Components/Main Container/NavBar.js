import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../Main Container/NavBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import image from '../Images/magnifying-glass.png';
import Logo from '../Images/Logo.png';

class NavBar extends Component {
    render() {
        return (
            <div>

                <Navbar bg="light" expand="lg" id="header">
                    <div className="Logo">
                        <img className="photo" src={Logo} alt="Discover Puerto Rico Logo" />
                    </div>
                                     
                <Nav className="NavBarContent">
                    <NavDropdown title="The Island" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                        
                    <NavDropdown title="Things to Do" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>   

                    <NavDropdown title="Regions" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>          

                    <NavDropdown title="Places to Stay" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>   

                    <NavDropdown title="Planning Essentials" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>  

                    <div>
                        <img src={image} alt="Search magnifying glass" />
                        <p> test</p>
                    </div>
                </Nav>
                    
                </Navbar>
            </div>
        )
    }
}

export default NavBar;






