import React, { Component } from 'react';
import './App.scss';
import Routes from './Routes';

import jquery  from 'jquery';
const $ =  jquery

class App extends Component {
  render() {
    return <Routes/>
  }
}

export default App;
