import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem,} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/navbar.css'

class NavbarFeatures extends React.Component {


    render() {
        return (
            <div className='header'>
               <Router>
                    <Navbar className='nav' color="red accent-4" dark expand="md" scrolling>
                        <NavbarBrand href="/me">
                            <strong className='titulo'>Con Delantal</strong>
                            <img className='imagen_navbar' src="https://png.icons8.com/ios/1600/chef-hat.png" height="30"/>
                        </NavbarBrand>
                    </Navbar>
                 </Router> 
            </div>
            
        );
    }
}

export default NavbarFeatures;