import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class BaseLayout extends Component {
  render() {
    let navTitle = {
          "fontFamily": "Arizonia",
          "fontSize": "20px",
          "backgroundColor": '#bce9f4',
          "textAlign": "center",
          "textDecoration": "none",
          "display":"flex",
          "flexDirection": "row",
          "displayFlex": "center",
          "paddingLeft":"10px",
          "color":"#0d0056"
        }
        let footer = {
          "backgroundColor": "#bce9f4",
          "textAlign": "center",
          "color":"#0d0056"
        }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div style={navTitle} className="navbar-header">
              <ul style={navTitle} className="nav navbar-nav">
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
