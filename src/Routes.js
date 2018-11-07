import React, { Component } from 'react';
import {BrowserRouter as Router,
    Route,Redirect
} from 'react-router-dom'
import isAuthenticated from './resolvers/isAuthenticated';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import FormHouse from './Components/FormHouse/FormHouse';
import DetailHouse  from './Components/DetailHouse/DetailHouse';
import DateForm from './Components/DateForm/DateForm';
import PriceForm from './Components/PriceForm/PriceForm';


//redux

import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';


const store =  createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const PrivateRoute = ({component:Component,...rest}) => (
    <Route {...rest} render = {(props) => (
        isAuthenticated() ? <Component {...props}/> : <Redirect to="/login"/>

    )} />
)




const Logout  = () => {
    localStorage.removeItem('airbnbToken');
    return <Redirect to="/login"/>
} 

class Routes extends Component{


    render(){
        return(
        <Provider store={store}>
                <Router>
                    <main>
                        <Navbar/>
                        <div className="container text-center">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/login" component={Login} />
                            <PrivateRoute exact  path="/house/create" component={FormHouse} />
                            <PrivateRoute exact path="/logout" component={Logout} />
                            <PrivateRoute exact path="/checkout/date/:id" component={DateForm} />
                            <PrivateRoute exact path="/checkout/price/:id" component={PriceForm} />
                            <Route exact path="/house/:id" component={DetailHouse} />

                        </div>

                    </main>
                </Router>
        </Provider>

        )
    }
}

export default Routes;