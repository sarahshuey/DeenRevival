import React, { Component } from 'react';
import image from '../Images/Austin.jpg'


class AboutUs extends Component {
  render() {
    let aboutStyle={
      display:"flex",
      flexDirection:"row",
      color:"#007F86",
    }
    let textStyle={
      color:"black",
      lineHeight:"50px",
      paddingRight:"20px"
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
        <p style={textStyle}> Austin grew up in Austin Texas and have 10 years of high end residential construction experience. He got his start by sweeping floors for a local construction company, after learning the carpentry trade he took a break from construction and attended Texas State University where he got his bachelors degree in Constrution Science and Management. After school he went back to his former employer where he became a project manager. In 2016 Austin decided to step out on his own and started Deen Revival. Deen Revival stands for quality work at a quality price and goes the extra mile to guarantee the clients happiness.
        </p>
        </div>
      </div>
      </div>
    );
  }
}

export default AboutUs;
