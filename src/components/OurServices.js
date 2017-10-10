import React, { Component } from 'react';
import '../styles/App.css';

class OurServices extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{color:"#007F86"}}>
          <h1 className="title">Our Services</h1>
        </header>
        <div style={{color:"#007F86"}}>
        <h2>
        Bathrooms
        </h2>
        <h2>
        Kitchens
        </h2>
        <h2>
        Full Home
        </h2>
        <h2>
        New Build
        </h2>
        </div>
      </div>
    );
  }
}

export default OurServices;
