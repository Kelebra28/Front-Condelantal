import React,{Component} from 'react';
import './style.scss'
import payload from '../../resolvers/payload';
import isAuthenticated from '../../resolvers/isAuthenticated';


class Navbar extends Component {


    authenticatedRender = () => {
        if(isAuthenticated()){
            let user =  payload(localStorage.getItem('airbnbToken')).email
            return(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/me">Hola {user}!!</a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link" href="/logout">Logout</a>
                    </li>
                </ul>
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Clone Airbnb</a>

                <div className="collapse navbar-collapse">
                   {this.authenticatedRender()}
                </div>
            </nav>
        );

    }

}


export default Navbar;