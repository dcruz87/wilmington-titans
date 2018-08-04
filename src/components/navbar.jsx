import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navbar.css'
import App from '../App';
import logo from '../images/wordmark.svg';


class NavBar extends Component {
  render() {
    return (
      <div className = "testbg">
      <nav className = "navbar navbar-expand-lg navbar-dark fixed-top testbg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="testing123" alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link " href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">We Ready!</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Game Time!</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Titan Call!</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default NavBar;
