import React, { Component } from 'react';
import {BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login';



class Routes extends Component{

    render(){
        return(
            <Router>
                <main>
                    <Navbar/>
                    <div className="container text-center">
                        <Route exact path="/" component={Signup} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                    </div>

                </main>
            </Router>

        )
    }
}

export default Routes;