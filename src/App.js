
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
 
class App extends Component {
  render() {
    return (      
      <div className="introduction">
        <h1 className="brand">maasika</h1>
        <h5 className="description">Patient engagement platform for doctors</h5>
        <button className="login-btn">LOG IN</button>
      </div>  
     
    );
  }
}
 
export default App;

 // <Home></Home>
