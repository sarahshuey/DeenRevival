import React, { Component } from 'react';
import image from '../Images/Austin.jpg'


class AboutUs extends Component {
  render() {
    let aboutStyle={
      display:"flex",
      flexDirection:"row",
      color:"#007F86",
    }
    return (
      <div className="App">
        <header className="header" style={{color:"#007F86"}}>
          <h1 className="title">About Us</h1>
        </header>
        <div className="page" style={aboutStyle}>
        <div className="AustinPic">
        <img style={{width: 550, padding:"10px"}} src={image} alt="Austin Deen"></img>
        </div>
        <div className="AboutAustin" style={{color:"#007F86"}}>
        <h2> Austin Deen </h2>
        <p> Austin Deen has been in construction for ----- years. He first got into construction when he was --- years old. Austin specializes in high end remodels with a focus on kitchens and bathrooms.This needs to be much longer add stuff about Texas State, and past work history.
        </p>
        </div>
      </div>
      </div>
    );
  }
}

export default AboutUs;
