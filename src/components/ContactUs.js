import React, { Component } from 'react';
import '../styles/App.css';

class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Contact Us</h1>
        </header>
        <div className="info">
        <p>
        You can reach us by email any time or call us Monday - Friday between 9:00 - 5:00
        <br></br>
        Phone: (512) 417-7859
        <br></br>
        Email: deen.austin@gmail.com
        </p>
        </div>
      </div>
    );
  }
}

export default ContactUs;
