import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/navbar.jsx'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<NavBar />, document.getElementById('navbar'));
registerServiceWorker();
