import React, { Component } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Signup  from './Components/Signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Signup/>
        </div>

      </div>
    );
  }
}

export default App;
