import React, { Component } from 'react';
import Jumbotron from './components/jumbotron.jsx'
import NavBar from './components/navbar.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Jumbotron/>
      </div>
    );
  }
}

export default App;
