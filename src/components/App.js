import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../Images/DeenRevival.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{color:"#007F86"}}>
          <h1 className="title">Welcome to Deen Revival</h1>
        </header>
        <div style={{color:"#007F86"}}>
        Who we are:
        What we do:
        images of work
        </div>
      </div>
    );
  }
}

export default App;
