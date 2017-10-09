import React, { Component } from 'react';
import '../styles/App.css';

class Testimonials extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Testimonials</h1>
        </header>
        <div className="test">
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
