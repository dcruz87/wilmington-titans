import React, { Component } from 'react';
//import NavBar from './components/navbar.jsx'
import test1 from './images/Icon_RGB.png';

class App extends Component {
  render() {
    return (
      <div>
        <img src={test1} />
        <button href="http://google.com/" className = "badge badge-primary m-3">wassup yall</button>
      </div>
    );
  }
}

export default App;
