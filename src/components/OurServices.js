import React, { Component } from 'react';
import '../styles/App.css';

class OurServices extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{color:"#007F86"}}>
          <h1 className="title">Our Services</h1>
        </header>
        <div style={{color:"#007F86", display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <div style={{color:"#007F86", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingRight:"20px"}}>
        <h2>
        Remodels
        <ul>
        <li style={{paddingBottom:"10px",paddingRight:"40px",listStyleType:"none",fontSize:"18px",color:"black"}}>
        Kitchens
        </li>
        <li style={{paddingBottom:"10px",listStyleType:"none",paddingRight:"40px",fontSize:"18px",color:"black"}}>
        Bathrooms
        </li>
        <li style={{paddingBottom:"10px",listStyleType:"none",paddingRight:"40px",fontSize:"18px",color:"black"}}>
        Whole House
        </li>
        <li style={{paddingBottom:"10px",listStyleType:"none",paddingRight:"40px",fontSize:"18px",color:"black"}}>
        Additions
        </li>
        </ul>
        </h2>
        </div>
        <h2 style={{paddingRight:"20px"}}>
        New Construction
        </h2>
        <h2 style={{paddingRight:"20px"}}>
        Glass
        </h2>
        </div>
      </div>
    );
  }
}

export default OurServices;
