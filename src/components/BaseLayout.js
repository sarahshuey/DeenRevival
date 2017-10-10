import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/DEENREVIVALSmall.png'


class BaseLayout extends Component {
  render() {
    let navTitle = {
          "fontFamily": "Arizonia",
          "fontSize": "20px",
          "backgroundColor": 'white',
          "textAlign": "center",
          "textDecoration": "none",
          "display":"flex",
          "flexDirection": "row",
          "displayFlex": "row-reverse",
          "paddingLeft":"10px",
          "color":"#007F86",
        }
        let footer = {
          "backgroundColor": "white",
          "textAlign": "center",
          "color":"#007F86",
          "borderTopWidth":"3px",
          "borderTopColor":"#007F86",
          "borderTopStyle":"solid",
          "paddingTop":"25px"
        }
        let border ={
          "borderBottomWidth":"3px",
          "borderBottomColor":"#007F86",
          "borderBottomStyle":"solid",
        }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div style={border} className="navbar-header">
              <ul style={navTitle} className="nav navbar-nav">
              <img src={logo} alt="logo"></img>
              <li style={navTitle}>
                <NavLink style={navTitle} activeClassName="selected" to="/">Home</ NavLink >
              </li>
                <li style={navTitle}>
                  <NavLink style={navTitle} activeClassName="selected" to="/AboutUs">About Us</ NavLink >
                </li>
                <li style={navTitle}>
                <NavLink style={navTitle} activeClassName="selected" to="/ContactUs"> Contact Us </NavLink>
              </li>
                <li style={navTitle}>
                  <NavLink  style={navTitle} activeClassName="selected" to="/OurServices">Our Services</NavLink>
                </li>
                <li style={navTitle}>
                  <NavLink  style={navTitle} activeClassName="selected" to="/Testimonials">Testimonials</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer style={footer} className="col-lg-11">
          <span className="footer-title">Deen Revival | </span>
          <span>
            Austin, Tx | (512) 417 - 7859
          </span>
        </footer>
      </div>
    );
  }
}

export default BaseLayout;
