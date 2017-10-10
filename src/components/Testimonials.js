import React, { Component } from 'react';
import '../styles/App.css';

class Testimonials extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{color:"#007F86"}}>
          <h1 className="title">Testimonials</h1>
        </header>
        <div className="test" style={{color:"#007F86"}}>
        <p>
        img of work
        <br></br>
        quote
        <br></br>
        name
        </p>
        </div>
      </div>
    );
  }
}

export default Testimonials;
