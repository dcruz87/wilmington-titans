import React, { Component } from 'react';
import NavBar from './components/navbar.jsx'
import Jumbotron from './components/jumbotron.jsx'

class App extends Component {
  render() {
    return (
      <div>
        {/*Load Navbar*/}
        <NavBar/>
        <Jumbotron/>
      </div>
    );
  }
}

export default App;
