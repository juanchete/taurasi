import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/argon-dashboard-react.scss';
import './App.css';
import Navbars from './components/Navbars';
import Home from './components/Home';
import Productos from './components/Productos';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
<Router>

<Navbars/>

<Route path="/" exact component={Home}/>
<Route path="/productos" exact component={Productos}/>


</Router>
  );
}

export default App;
