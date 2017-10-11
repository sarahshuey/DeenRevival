import React, { Component } from 'react';
import '../styles/App.css';

class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{color:"#007F86"}}>
          <h1 className="title">Contact Us</h1>
        </header>
        <div className="info" style={{backgroundColor:"#007F86",color:"black",height:"75px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>
        <p>We would love to work with! Shoot us an email of what you are wanting and we will get back with you as soon as we can!
        </p>
        </div>
        <div className="info" style={{color:"#007F86"}}>
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
