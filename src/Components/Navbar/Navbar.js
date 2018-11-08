import React,{Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem,} from 'mdbreact';
import payload from '../../resolvers/payload';
import isAuthenticated from '../../resolvers/isAuthenticated';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/navbar.css'

class Navbar extends Component {


    authenticatedRender = () => {
        if(isAuthenticated()){
            let user =  payload(localStorage.getItem('condelantalToken')).email
            return(
                <div className='header'>
                <Router>
                     <Navbar className='nav' color="red accent-4" dark expand="md" scrolling>
                         <NavbarBrand href="#">
                             <strong className='titulo'>Con Delantal</strong>
                             <img className='imagen_navbar' src="https://png.icons8.com/ios/1600/chef-hat.png" height="30"/>
                         </NavbarBrand>
                     </Navbar>
                  </Router> 
             </div>
            )
        }else{
            return(
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link" href="/signup">SignUp</a>
                        </li>
                </ul>
            )
        }


    }

    render(){
        return(


                <div className="collapse navbar-collapse">
                   {this.authenticatedRender()}
                </div>

        );

    }

}


export default Navbar;