import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import logotest from '../images/Horizontal_Combination_Mark_RGB.png';

const test1 = 'Horizontal_Combination_Mark_RGB.png'

class NavBar extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="src/images/wordmark.svg" width="150" height="30" alt=""/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">We Ready!</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Game Time!</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Titan Call!</a>
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
