import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav';

const Home = () => <h1>You are home </h1>
const About = () => <h1>I teach best webcourse</h1>
const Friends = () => (<ul>
  <li>...</li>
  <li>...</li>
  </ul>)

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Route path="/" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Friends" component={Friends}/>
    </Router>
    
    </div>
  );
}

export default App;
