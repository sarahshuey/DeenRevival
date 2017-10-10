import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/DEENREVIVALSmall.png'
import ham from '../Images/austinham.png'
import '../styles/App.css';


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
          <div className="body">
            <nav className="row navbar navbar-inverse">
              <div className="container-fluid">
                <div style={border} className="navbar-header">
                  <a href="/"><img src={logo} alt="logo" style={{paddingTop:"15px",paddingLeft:"30px"}}></img></a>
                  <div className="dropdown">
                    <button className="dropbtn"><img src={ham} alt="Menu"></img></button>
                    <div className="dropdown-content">
                      <a href="/">Home</a>
                      <a href="/AboutUs">About Us</a>
                      <a href="/OurServices">Services</a>
                      <a href="/ContactUs">Contact Us</a>
                      <a href="/Testimonials">Testimonials</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {this.props.children}
            <footer style={footer} className="col-lg-11">
              <span className="footer-title">Deen Revival | </span>
              <span>
                Austin, Tx | (512) 417-7859
              </span>
            </footer>
          </div>
        );
        }
        }
export default BaseLayout;
