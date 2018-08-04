import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import './jumbotron.css'

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className = "jumbotron-fluid jumbobackground">
          <div className = "container-fluid test">
            <div>
              <h1>hi</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
